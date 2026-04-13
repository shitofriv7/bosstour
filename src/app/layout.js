import "./globals.css";

export const metadata = {
  title: "Boss Tour | Luxury VIP Car Rental & Tours",
  description: "Experience the ultimate luxury with Boss Tour. Premium VIP car rental, airport transfers, and private tours in Turkey. Multilingual service in English, Turkish, and German.",
  keywords: "luxury car rental, VIP transfer, Boss Tour, airport transfer Turkey, private chauffeur, luxury tours",
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
