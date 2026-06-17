# SoftVibe Services — Portfolio (Next.js / TypeScript / Tailwind)

Built and verified against the same stack you've used across your client
projects: Next.js (App Router) + TypeScript + Tailwind CSS, with `lucide-react`
for icons. TypeScript and the production build were both checked locally —
no errors.

## What's inside

```
app/
  layout.tsx        — fonts (Inter + JetBrains Mono via next/font), metadata
  page.tsx           — assembles every section in order
  globals.css        — base styles, scroll behavior, status-dot animation
components/
  Navbar.tsx          — sticky header, scroll-spy active link, animated mobile menu
  Hero.tsx
  About.tsx           — mission, values, 7-step process, industries served
  Services.tsx        — 11 services, hairline grid-divider layout
  Portfolio.tsx        — all 7 projects, status dots, price, tech, links
  Testimonials.tsx
  FAQ.tsx              — native <details> accordion, no extra JS
  Team.tsx
  Contact.tsx
  Footer.tsx
data/
  portfolio-data.ts    — every piece of copy and project data lives here
tailwind.config.ts      — color tokens + font family extensions
package.json / tsconfig.json / postcss.config.js — included for reference only
```

## Color tokens (already wired into `tailwind.config.ts`)

| Token          | Hex       | Use                         |
|----------------|-----------|------------------------------|
| `bg`           | `#F8F7F4` | Page background              |
| `bg-alt`       | `#F1EFE9` | Alternating section background |
| `surface`      | `#FFFFFF` | Cards                        |
| `border`       | `#E4E1D9` | Hairline dividers             |
| `ink`          | `#1A1A18` | Primary text                  |
| `ink-soft`     | `#6B6B65` | Secondary text                |
| `accent`       | `#1B4332` | Forest green accent           |
| `accent-soft`  | `#E3EAE5` | Tinted backgrounds/badges     |

## Integrating into your existing project

1. Copy `components/`, `data/`, and `app/` into your existing Next.js app
   (if your `app/page.tsx` and `app/layout.tsx` already exist, merge the
   content rather than overwriting — keep your existing metadata/providers
   if any).
2. Merge the `colors` and `fontFamily` blocks from `tailwind.config.ts` into
   your existing Tailwind config's `theme.extend`.
3. Install the one new dependency:
   ```
   npm install lucide-react
   ```
4. Run `npm run dev` and check `http://localhost:3000`.

## Notes

- All section ids (`#home`, `#about`, `#services`, `#portfolio`,
  `#testimonials`, `#faq`, `#team`, `#contact`) match the nav links exactly —
  rename in `data/portfolio-data.ts` if you change them.
- `Navbar.tsx` and the mobile menu are the only places using browser APIs
  (`"use client"`); everything else renders as a server component.
- The Aman Sales Delivery Partner App and the NFT Marketplace have no public
  live link in the source data, so their cards show a demo video / "In
  Production" status instead of a "Visit live site" button — update
  `data/portfolio-data.ts` once you have a public link.
- The Floris testimonial's source name field was a corrupted placeholder, so
  it's shown as "Owner, Floris Restaurant & Banquet" rather than guessing a
  name. Swap in the real name if you have it.
- Got more projects to add? Add another object to the `projects` array in
  `data/portfolio-data.ts` — the component will pick it up automatically.
