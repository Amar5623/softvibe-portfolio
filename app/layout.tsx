import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/seo-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
});

const title = "SoftVibe Services — Premium Software Solutions for Startups & Businesses";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | SoftVibe Services",
  },
  description: siteConfig.description,
  keywords: [
    "software development agency",
    "custom web application development",
    "SaaS product development",
    "Next.js development agency",
    "business automation software",
    "software agency Gujarat India",
  ],
  authors: [{ name: "Amar Tiwari" }, { name: "Nitraj Solanki" }],
  creator: "SoftVibe Services",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: "SoftVibe Services",
    title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "SoftVibe Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jbMono.variable} font-sans bg-bg text-ink antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}