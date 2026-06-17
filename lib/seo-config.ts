// Single source of truth for site-wide SEO values.
// Update the URL here once you have your real domain — every other
// SEO file (robots.ts, sitemap.ts, layout.tsx, StructuredData.tsx)
// reads from this file, so you never have to hunt through the codebase.

export const siteConfig = {
  name: "SoftVibe Services",

  // TODO: replace with your real production domain before deploying.
  // Use your custom domain if you have one (e.g. "https://softvibeservices.com"),
  // or your Vercel URL if not (e.g. "https://softvibe-portfolio.vercel.app").
  // No trailing slash.
  url: "https://softvibe-service.vercel.app",

  description:
    "SoftVibe Services builds reliable, scalable, production-ready software — custom web apps, SaaS products, and business systems for startups and businesses.",

  // TODO: add a 1200x630 image at /public/og-image.png for social link previews
  // (WhatsApp, LinkedIn, Twitter/X all use this). Until then this path will 404,
  // which is harmless but means link previews won't show an image.
  ogImage: "/og-image.png",
};