import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { getSEO } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "700",
});

const seo = getSEO();

export const metadata: Metadata = {
  title: seo.defaultTitle,
  description: seo.defaultDescription,
  keywords: ["piano lessons", "piano courses", "music education", "piano teacher", "learn piano", "London piano lessons"],
  authors: [{ name: "Modern Way Piano" }],
  creator: "Modern Way Piano",
  publisher: "Modern Way Piano",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(`https://${seo.defaultTitle.toLowerCase().replace(/\s+/g, '')}.com`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: `https://${seo.defaultTitle.toLowerCase().replace(/\s+/g, '')}.com`,
    siteName: seo.defaultTitle,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}