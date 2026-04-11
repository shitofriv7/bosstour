import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req) {
  try {
    const body = await req.json();
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const adminPassword = process.env.TELEGRAM_ADMIN_PASSWORD || 'boos123';

    // 1. Check for Callback Query (Delete button press)
    if (body.callback_query) {
      const { id, data, message } = body.callback_query;
      const chatId = message.chat.id;

      if (data.startsWith('delete_')) {
        const resId = data.split('_')[1];
        
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: `⚠️ *DİKKAT:* #${resId} numaralı rezervasyonu silmek üzeresiniz.\n\nLütfen onaylamak için şu komutu gönderin:\n\n\`/sil ${adminPassword} ${resId}\``,
            parse_mode: 'Markdown'
          })
        });
      }

      // Acknowledge callback query
      await fetch(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ callback_query_id: id })
      });
    }

    // 2. Check for Message (Command processing)
    if (body.message && body.message.text) {
      const text = body.message.text;
      const chatId = body.message.chat.id;

      if (text.startsWith('/sil')) {
        const parts = text.split(' ');
        if (parts.length < 3) {
          return sendTelegramMessage(chatId, "❌ Hatalı kullanım. Örnek: `/sil [şifre] [id]`", token);
        }

        const inputPassword = parts[1];
        const resId = parts[2];

        if (inputPassword !== adminPassword) {
          return sendTelegramMessage(chatId, "🚫 Geçersiz şifre!", token);
        }

        // Delete from Supabase
        const { error } = await supabase
          .from('reservations')
          .delete()
          .eq('id', resId);

        if (error) {
          return sendTelegramMessage(chatId, `❌ Hata oluştu: ${error.message}`, token);
        }

        return sendTelegramMessage(chatId, `✅ #${resId} numaralı rezervasyon başarıyla silindi.`, token);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ ok: true }); // Always return 200 to Telegram
  }
}

async function sendTelegramMessage(chatId, text, token) {
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'Markdown'
    })
  });
  return NextResponse.json({ ok: true });
}
