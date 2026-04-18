import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    if (!supabase) {
      throw new Error("Supabase connection not initialized. Please check Environment Variables.");
    }
    const data = await req.json();
    const { carName, startDate, endDate, customerName, customerPhone, customerEmail, lang, hotel, room, time, adults, children } = data;

    // 1. Availability Logic (Max 4 for cars, others are unlimited or high limit)
    const isCar = ["Fiat Egea", "Renault Clio", "Fiat Egea Cross", "Citroen C3", "Suzuki Jeep (Retro)", "Hyundai i20", "Ford Custom", "ATV CF Moto (4x4)", "Electric 3-Wheel Bicycle"].includes(carName);
    const MAX_LIMIT = isCar ? 4 : 1000;

    // Check for overlaps: 
    // (existing_start <= new_end) AND (existing_end >= new_start)
    const { data: overlaps, error: countError } = await supabase
      .from('reservations')
      .select('id')
      .eq('car_name', carName)
      .lte('start_date', endDate)
      .gte('end_date', startDate);

    if (countError) throw countError;

    if (overlaps.length >= MAX_LIMIT) {
      return NextResponse.json({ 
        success: false, 
        error: lang === 'tr' ? 'Bu tarihlerde müsaitlik kalmadı.' : 'No availability for these dates.' 
      }, { status: 400 });
    }

    // 2. Calculate days
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
    
    // 3. Save to Supabase
    // We try to include hotel and room, but we'll use a try-catch or just omit if columns don't exist
    // For now, let's keep the existing columns to avoid DB errors, but add them to Telegram.
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

    if (sbError) {
       console.warn('Supabase Insert Error (continuing to Telegram):', sbError);
       // We'll continue even if DB fails, as Telegram is critical
    }

    // 4. Send Telegram Notification
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (token && chatId) {
      const typeLabel = isCar ? 'ARAÇ' : (hotel ? 'TRANSFER' : 'TUR');
      const message = `
🚨 *YENİ ${typeLabel} REZERVASYONU* 🚨
------------------------
📍 *Ürün:* ${carName}
📅 *Tarih:* ${startDate}${endDate !== startDate ? ` - ${endDate} (${days} Gün)` : ''}
${time ? `⏰ *Saat:* ${time}` : ''}
${adults ? `👥 *Kişi:* ${adults} Yetişkin${children ? `, ${children} Çocuk` : ''}` : ''}
👤 *Müşteri:* ${customerName}
📞 *Telefon:* ${customerPhone}
${hotel ? `🏨 *Otel:* ${hotel}` : ''}
${room ? `🔑 *Oda:* ${room}` : ''}
------------------------
✅ Rezervasyon talebi başarıyla iletildi.
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

