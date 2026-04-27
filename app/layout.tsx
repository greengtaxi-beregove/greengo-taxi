import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-5NRDDBLF";

const SITE_URL = "https://greengotaxi.com.ua";
const SITE_NAME = "GreenGo Taxi";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "GreenGo Taxi — Таксі в Береговому | Електрокар за 5 хвилин",
    template: "%s | GreenGo Taxi Берегово",
  },
  description:
    "Замовте таксі в Береговому за 5 хвилин. Електрокари, цілодобово, без вихідних. Телефон: 050 220 5500. Залиште номер — передзвонимо за 60 секунд.",

  keywords: [
    "таксі Берегово",
    "таксі Берегово замовити",
    "GreenGo таксі",
    "таксі Закарпаття",
    "taxi Berehove",
    "taxi Beregovo",
    "таксі електрокар Берегово",
    "виклик таксі Берегово",
    "таксі 24/7 Берегово",
    "дешеве таксі Берегово",
    "таксі Chizay",
    "таксі Бакта",
    "таксі Жайворонок",
    "таксі Лужанка",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "GreenGo Taxi — Таксі в Береговому | Електрокар за 5 хвилин",
    description:
      "Замовте таксі в Береговому за 5 хвилин. Електрокари, цілодобово. Телефон: 050 220 5500.",
    images: [
      {
        url: "/cover_mob.png",
        width: 1200,
        height: 630,
        alt: "GreenGo Taxi — Берегово",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GreenGo Taxi — Таксі в Береговому",
    description: "Електрокар за 5 хвилин. Цілодобово. 050 220 5500.",
    images: ["/cover_mob.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: "Служба таксі в Береговому. Електрокари, подача за 5 хвилин, цілодобово.",
      inLanguage: "uk",
    },
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      description:
        "Служба таксі в Береговому. Електрокари Renault Zoe, подача за 5 хвилин, цілодобово, без вихідних.",
      url: SITE_URL,
      telephone: "+380502205500",
      priceRange: "₴",
      image: `${SITE_URL}/cover_mob.png`,
      logo: `${SITE_URL}/logo.png`,
      foundingDate: "2023",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Берегово",
        addressRegion: "Закарпатська область",
        addressCountry: "UA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.2044,
        longitude: 22.6444,
      },
      hasMap: "https://maps.google.com/?q=Берегово,+Закарпатська+область",
      areaServed: [
        { "@type": "City", name: "Берегово" },
        { "@type": "Place", name: "Chizay" },
        { "@type": "Place", name: "Бакта" },
        { "@type": "Place", name: "Жайворонок" },
        { "@type": "Place", name: "Лужанка" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+380502205500",
        contactType: "customer service",
        availableLanguage: ["Ukrainian"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      sameAs: [],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Скільки чекати таксі в Береговому?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Середній час подачі GreenGo Taxi в Береговому — 5 хвилин. У парку 40+ електрокарів, які постійно чергують по місту.",
          },
        },
        {
          "@type": "Question",
          name: "Як викликати таксі в Береговому?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Зателефонуйте за номером 050 220 5500 або залиште свій номер телефону на сайті greengo.taxi — оператор передзвонить протягом 60 секунд.",
          },
        },
        {
          "@type": "Question",
          name: "Чи працює GreenGo Taxi цілодобово?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Так, GreenGo Taxi працює 24/7, без вихідних і свят. Ви можете замовити таксі в Береговому в будь-який час доби.",
          },
        },
        {
          "@type": "Question",
          name: "Які маршрути обслуговує GreenGo Taxi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GreenGo Taxi обслуговує Берегово та приміські напрямки: Chizay, Бакта, Жайворонок, Лужанка, а також будь-яку точку міста.",
          },
        },
        {
          "@type": "Question",
          name: "Які автомобілі використовує GreenGo Taxi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Увесь парк GreenGo Taxi — електрокари Renault Zoe. Тихо, чисто, екологічно і комфортно.",
          },
        },
        {
          "@type": "Question",
          name: "Скільки коштує таксі в Береговому?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Тарифи GreenGo Taxi в Береговому — одні з найдоступніших у місті. Дзвоніть 050 220 5500 щоб дізнатися вартість поїздки.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className="h-full">
      <head>
        <link rel="preload" href="/fonts/TTFirsNeue-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/TTFirsNeue-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-full">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
