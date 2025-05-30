import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./utils/Header";
import Footer from "@/GlobalComponent/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.savourysoirée.com/"),
  title: {
    default:
      "Savoury Soirée | Premium Catering Services in Delhi NCR - Luxury Weddings, Corporate & Private Events",
    template: "%s | Savoury Soirée",
  },
  description:
    "Savoury Soirée offers premium catering for weddings, corporate gatherings, and private parties in Delhi NCR. Experience customized menus and exquisite service.",
  keywords: [
    "Savoury Soirée",
    "Delhi catering",
    "luxury catering",
    "premium wedding catering",
    "corporate catering Delhi",
    "private party catering",
    "event catering",
    "custom event menus",
    "gourmet event food",
    "five star catering Delhi",

    "live counters catering",
    "buffet setup catering",
    "barbeque catering Delhi",
    "continental food Delhi",
    "Indian cuisine catering",
    "multi-cuisine buffet",
    "Asian fusion catering",
    "grazing table setup",
    "luxury dessert counters",
    "modern catering presentation",

    "catering in Gurgaon",
    "catering in Noida",
    "South Delhi catering",
    "Greater Noida caterers",
    "Ghaziabad catering services",
    "Faridabad catering solutions",
    "Delhi NCR event caterers",

    "wedding food",
    "cocktail party catering",
    "engagement catering Delhi",
    "birthday catering services",
    "outdoor catering events",
    "event planners Delhi NCR",
    "sustainable catering Delhi"
  ],
  applicationName: "Savoury Soirée",
  authors: [
    {
      name: "Savoury Soirée",
      url: "https://www.savourysoirée.com/about",
    },
  ],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.savourysoirée.com/",
    siteName: "Savoury Soirée",
    title: "Savoury Soiree | Best Catering Services in Delhi, Noida, Gurgaon & Chandigarh",
    description:
      "Tailored catering for weddings, corporate events, and private parties. Discover our gourmet menus and personalized service.",
    images: [
      {
        url: "https://www.savourysoirée.com/Logo.png",
        width: 800,
        height: 600,
        alt: "Savoury Soirée Catering Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Savoury Soiree | Best Catering Services in Delhi, Noida, Gurgaon & Chandigarh",
    description:
      "Elegant and personalized catering solutions for weddings, corporate events & more.",
    site: "@savorysoiree",
    creator: "@savorysoiree",
    images: ["https://www.savourysoirée.com/Logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/Metadata.json",

  other: {
    "msapplication-TileColor": "#ffffff",
    "apple-mobile-web-app-title": "Savoury Soirée",
    "apple-mobile-web-app-status-bar-style": "default",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "7 days",
    "og:image:alt": "Savoury Soirée Catering Logo",
    "geo.region": "IN-DL",
    "geo.placename": "Delhi",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139,77.2090",
    // "google-site-verification": "XXXX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Savoury Soirée",
              url: "https://www.savourysoirée.com",
              logo: "https://www.savourysoirée.com/Logo.png",
              sameAs: ["https://www.instagram.com/thesavourysoiree"],
              location: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Delhi",
                  addressRegion: "DL",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Gurgaon",
                  addressRegion: "HR",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Noida",
                  addressRegion: "UP",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Faridabad",
                  addressRegion: "HR",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Ghaziabad",
                  addressRegion: "UP",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Greater Noida",
                  addressRegion: "UP",
                  addressCountry: "IN",
                },
              ],
            }),
          }}
        />

      </head>
      <body className="antialiased bg-[#ecece2] text-gray-900">
        <div className="max-w-screen overflow-x-hidden min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
