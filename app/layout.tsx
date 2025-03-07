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
  title: "Premium Catering Services in Delhi NCR | Wedding & Corporate Events",
  description: "Leading catering service provider in Delhi NCR. Specialized in luxury weddings, corporate events, and international cuisine. Professional catering solutions with customized menus.",
  keywords: ['Premium', 'Catering', 'Service'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-screen overflow-x-hidden min-h-screen flex flex-col font-inter bg-[#ecece2]">
        <Header />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
