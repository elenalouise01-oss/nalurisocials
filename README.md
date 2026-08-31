# Naluri Socials

Editorial marketing site for Naluri Socials, built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing copy

All site copy lives in [`content/site.ts`](content/site.ts), separated from the components that render it. Edit text there — no need to touch component files for wording changes.

## Adding your own photography

Every image on the site is currently an art-directed placeholder (`components/PlaceholderImage.tsx`) so the layout, crops and aspect ratios are already correct. To swap in a real photo, pass a `src` to the relevant `PlaceholderImage` call in a section component (e.g. `components/sections/Hero.tsx`, `components/sections/About.tsx`) — point it at a file in `public/images/`.

## Adding licensed fonts

Playfair Display, Montserrat and Gochi Hand load automatically from Google Fonts. Giaza (logo), AC Fifindrel and Biro Script are licensed fonts not included in this repo — see [`public/fonts/README.md`](public/fonts/README.md) for exact filenames to drop in.

## Structure

- `content/` — all copy, kept separate from presentation
- `components/` — reusable building blocks (nav, buttons, headings, offer chapters, testimonials, CTA, footer, placeholders)
- `components/sections/` — one file per homepage section, composed in `app/page.tsx`
- `lib/` — shared motion variants and the reduced-motion hook

## Production build

```bash
npm run build
npm run start
```
