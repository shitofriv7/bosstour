import "./globals.css";

export const metadata = {
  title: "Boss Tour | Luxury VIP Car Rental & Tours",
  description: "Experience the ultimate luxury with Boss Tour. Premium VIP car rental, airport transfers, and private tours in Turkey. Multilingual service in English, Turkish, and German.",
  keywords: "luxury car rental, VIP transfer, Boss Tour, airport transfer Turkey, private chauffeur, luxury tours",
};

import { LanguageProvider } from "@/context/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import DynamicTitle from "@/components/DynamicTitle";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Boss Tour",
              "url": "https://boostour.com",
              "logo": "https://boostour.com/logo.png",
              "sameAs": [
                "https://www.instagram.com/boss_tour_rentacar/",
                "https://wa.me/905434499552"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90-543-449-95-52",
                "contactType": "customer service",
                "areaServed": "TR",
                "availableLanguage": ["Turkish", "English", "German", "Russian"]
              }
            })
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <ScrollProgressBar />
          <DynamicTitle />
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
