import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./utils/Header";
import Footer from "@/GlobalComponent/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Base URL for resolving relative URLs in metadata
  metadataBase: new URL("https://www.savourysoirée.com/"),
  
  // Primary SEO Tags
  title:
    "Savoury Soiree: Premium Catering Services in Delhi NCR | Luxury Weddings, Corporate & Private Events",
  description:
    "Discover Savoury Soiree, a leading catering service provider in Delhi NCR specializing in luxury weddings, corporate events, private parties, and international cuisine. Enjoy customized menus, exceptional service, and unforgettable dining experiences tailored to your event.",
  keywords: [
    "catering",
    "premium catering",
    "wedding catering",
    "corporate catering",
    "luxury events",
    "Delhi NCR catering",
    "private parties",
    "international cuisine"
  ],
  authors: [
    { name: "Savoury Soiree", url: "https://www.savourysoirée.com/about" }
  ],
  applicationName: "Savoury Soiree",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  // OpenGraph Tags for social sharing (e.g., Facebook, LinkedIn)
  openGraph: {
    title: "Savoury Soiree: Premium Catering Services in Delhi NCR",
    description:
      "Experience exceptional catering for luxury weddings, corporate events, and private parties with Savoury Soiree. Tailored menus and top-notch service for an unforgettable event.",
    url: "https://www.savourysoirée.com/",
    type: "website",
    locale: "en_US",
    siteName: "Savoury Soiree",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "Premium Catering Service"
      }
    ]
  },

  // Twitter Card Tags for enhanced Twitter sharing
  twitter: {
    card: "summary_large_image",
    title: "Savoury Soiree: Premium Catering Services in Delhi NCR",
    description:
      "Luxury weddings, corporate events, and private parties catered with excellence. Discover our tailored menus and top-notch service.",
    site: "@savorysoiree",    // Replace with your Twitter username
    creator: "@savorysoiree", // Replace with your Twitter handle
    images: ["/Logo.png"]
  },

  // Robots tag to guide search engine crawling and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  // Icons and manifest for progressive web app (PWA) support and favicon setup
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/Metadata.json",

  // Viewport settings for responsive design
  viewport: "width=device-width, initial-scale=1",

  // Additional Meta Tags for broader audience targeting
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/mstile-144x144.png",
    "apple-mobile-web-app-title": "Savoury Soiree",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "7 days",
    "og:image:alt": "Premium Catering Service by Savoury Soiree",
    "og:site_name": "Savoury Soiree",
    "geo.region": "IN-DL",
    "geo.placename": "Delhi",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
    "google-site-verification": "your-google-site-verification-code"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="max-w-screen overflow-x-hidden min-h-screen flex flex-col font-inter bg-[#ecece2]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
