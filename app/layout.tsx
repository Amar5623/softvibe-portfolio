import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  title: "SoftVibe Services — Premium Software Solutions for Startups & Businesses",
  description:
    "SoftVibe Services builds reliable, scalable, production-ready software — custom web apps, SaaS products, and business systems for startups and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jbMono.variable} font-sans bg-bg text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
