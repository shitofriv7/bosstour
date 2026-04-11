import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // TCMB XML servisini çekiyoruz
    const response = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml', {
      next: { revalidate: 3600 } // Saatte bir yenile
    });
    
    if (!response.ok) throw new Error('TCMB çekilemedi');
    
    const xmlText = await response.text();
    
    // Basit bir regex ile Euro ForexSelling değerini çekelim (Büyük XML kütüphanelerine gerek kalmaması için)
    // <Currency CrossOrder="9" Kod="EUR" CurrencyCode="EUR"> ... <ForexSelling>34.1234</ForexSelling>
    const eurPart = xmlText.match(/<Currency[^>]+CurrencyCode="EUR"[^>]*>([\s\S]*?)<\/Currency>/);
    if (!eurPart) throw new Error('Euro verisi bulunamadı');
    
    const rateMatch = eurPart[1].match(/<ForexSelling>([\d.]+)<\/ForexSelling>/);
    if (!rateMatch) throw new Error('Kur değeri bulunamadı');
    
    const rate = parseFloat(rateMatch[1]);
    
    return NextResponse.json({ rate });
  } catch (error) {
    console.error('Currency API Error:', error);
    // Hata durumunda yedek (fallback) bir değer dönelim (veya Frankfurter gibi alternatif bir API'ye yönelebiliriz)
    return NextResponse.json({ rate: 36.5, fallback: true }); 
  }
}
