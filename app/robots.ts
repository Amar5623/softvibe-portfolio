import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

// Next.js auto-serves this at https://yourdomain.com/robots.txt — no
// public/robots.txt needed, and it stays in sync with siteConfig.url.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}