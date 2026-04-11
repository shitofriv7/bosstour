import "./globals.css";

export const metadata = {
  title: "Boos Tour | Luxury VIP Car Rental & Tours",
  description: "Experience the ultimate luxury with Boos Tour. Premium VIP car rental, airport transfers, and private tours in Turkey. Multilingual service in English, Turkish, and German.",
  keywords: "luxury car rental, VIP transfer, Boos Tour, airport transfer Turkey, private chauffeur, luxury tours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
