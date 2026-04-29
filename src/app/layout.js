import "./globals.css";

export const metadata = {
  title: "Boss Tour | Luxury VIP Car Rental & Tours in Alanya & Antalya",
  description: "Experience the ultimate luxury with Boss Tour. Premium VIP car rental, airport transfers, and private tours in Alanya, Antalya, Belek and Side. Multilingual service since 2012.",
  keywords: "luxury car rental Alanya, VIP transfer Antalya, Boss Tour, airport transfer Turkey, private chauffeur Alanya, luxury tours Antalya, rent a car Avsallar, VIP transfer Belek",
  alternates: {
    canonical: "https://boostour.com",
  },
  openGraph: {
    title: "Boss Tour | Luxury VIP Car Rental & Tours",
    description: "Premium VIP car rental and private tours in Turkey. Experience luxury with our professional multilingual team.",
    url: "https://boostour.com",
    siteName: "Boss Tour",
    images: [
      {
        url: "https://boostour.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boss Tour | Luxury VIP Car Rental & Tours",
    description: "Premium VIP car rental and private tours in Turkey.",
    images: ["https://boostour.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
              "@type": ["Organization", "LocalBusiness"],
              "name": "Boss Tour - King Boss Tour Seyahat Acentası",
              "url": "https://boostour.com",
              "logo": "https://boostour.com/logo.png",
              "image": "https://i.imgur.com/OEIUzWY.jpeg",
              "description": "Premium VIP car rental, airport transfers, and private tours in Antalya and Alanya.",
              "telephone": "+90-542-414-25-86",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Avsallar Mah. Söğüt Cad. Ünal Apartmanı No: 17A",
                "addressLocality": "Alanya",
                "addressRegion": "Antalya",
                "postalCode": "07400",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.621,
                "longitude": 31.733
              },
              "sameAs": [
                "https://www.instagram.com/boss_tour_rentacar/",
                "https://wa.me/905424142586"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90-542-414-25-86",
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
