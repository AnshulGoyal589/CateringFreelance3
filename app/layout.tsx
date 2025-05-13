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
    "Savoury Soiree",
    "Delhi catering",
    "luxury catering",
    "event catering",
    "wedding food",
    "private events",
    "corporate parties",
    "international cuisine Delhi",
    "Savoury Soiree",
    "luxury catering Delhi NCR",
    "premium wedding catering",
    "corporate catering Delhi",
    "private party catering",
    "gourmet event food",
    "custom event menus",
    "international cuisine caterers",
    "buffet catering Delhi",
    "top Delhi caterers",
    "outdoor catering events",
    "five star catering Delhi",
    "caterers for engagement",
    "cocktail party catering",
    "birthday catering services",
    "event planners Delhi NCR",
    "south Delhi caterers",
    "Noida Gurgaon catering",
    "Delhi catering services",
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
    title: "Savoury Soirée | Luxury Catering in Delhi NCR",
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
    title: "Savoury Soirée | Premium Catering in Delhi NCR",
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
              sameAs: [
                "https://www.instagram.com/thesavourysoiree",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressRegion: "DL",
                addressCountry: "IN",
              },
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
