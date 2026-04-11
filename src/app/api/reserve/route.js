import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req) {
  try {
    const data = await req.json();
    const { carName, startDate, endDate, customerName, customerPhone, customerEmail, lang } = data;

    // 1. Availability Logic (Max 4 cars per type)
    const MAX_CARS = 4;

    // Check for overlaps: 
    // (existing_start <= new_end) AND (existing_end >= new_start)
    const { data: overlaps, error: countError } = await supabase
      .from('reservations')
      .select('id')
      .eq('car_name', carName)
      .lte('start_date', endDate)
      .gte('end_date', startDate);

    if (countError) throw countError;

    if (overlaps.length >= MAX_CARS) {
      return NextResponse.json({ 
        success: false, 
        error: lang === 'tr' ? 'Bu tarihlerde müsait araç kalmadı.' : 'No cars available for these dates.' 
      }, { status: 400 });
    }

    // 2. Calculate days for total price
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
    
    // 3. Save to Supabase
    const { data: newBooking, error: sbError } = await supabase
      .from('reservations')
      .insert([
        { 
          car_name: carName, 
          start_date: startDate,
          end_date: endDate,
          days, 
          customer_name: customerName, 
          customer_phone: customerPhone, 
          customer_email: customerEmail,
          language: lang 
        }
      ])
      .select('id')
      .single();

    if (sbError) throw sbError;

    // 4. Send Telegram Notification
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (token && chatId) {
      const message = `
🚨 *YENİ REZERVASYON* 🚨
------------------------
🆔 *ID:* ${newBooking.id}
📍 *Ürün:* ${carName}
📅 *Tarih:* ${startDate} - ${endDate} (${days} Gün)
👤 *Müşteri:* ${customerName}
📞 *Telefon:* ${customerPhone}
------------------------
✅ Rezervasyon sisteme başarıyla kaydedildi.
      `;

      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Reservation Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
