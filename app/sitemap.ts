import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

// Next.js auto-serves this at https://yourdomain.com/sitemap.xml
// This is a one-page site, so there's a single entry. If you ever add
// real separate routes (e.g. /privacy, /terms, /blog/some-post), add
// another object to this array for each one.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}