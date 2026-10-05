# local-landing

A small static landing starter for a local business. Astro, TypeScript, Tailwind and Vitest. One config file, no backend, no external fonts.

This repository ships with an invented **Demo** business. Replace all of it before showing a client. No real clients, prices, reviews or photos are included.

## What is inside

- `site.config.ts`: the only file you edit per client (name, description, services, optional prices, hours, address, phone, messengers, map link, colors, language `ru`).
- Sections: hero, services, optional pricing, how we work, optional testimonials (empty by default), contacts, footer.
- Contact without a backend: phone, WhatsApp, Telegram links and a call button. No form.
- SEO: title, description, Open Graph, sitemap, robots.txt, JSON-LD LocalBusiness, favicon.
- Speed: system fonts, no external scripts, own SVG placeholders only.

## Turn it into a client site in 1 to 2 days (estimate)

1. Copy this folder into a new project directory. Run `git init` (local only).
2. Fill `site.config.ts`: business name, description, services, hours, address, phone, WhatsApp/Telegram, map link, colors. Turn `demo` off only for a real client.
3. Replace `public/images/*.svg` with the client's own images (keep them light). Replace `public/favicon.svg` with the client logo, or keep a clean icon.
4. Set `siteUrl` in `site.config.ts` to the client domain, and update `public/robots.txt` sitemap URL to the same domain.
5. Check the content against the client's materials and the intake file `~/job-search/templates/client-intake.md`.
6. Run `npm install` then `npm run check`. Fix anything red.
7. Run `npm run preview` and check the page on a narrow screen and a wide screen.
8. Deploy to the client account (Cloudflare Pages or Netlify). See `deploy/`. The client owns the account and the domain.

## Check before handover

- All text, services, address, hours and contacts come from the client.
- Contact links work: phone, WhatsApp, Telegram, map.
- Mobile layout is fine at about 360 px wide.
- Page budget: run `npm run check`, it fails if HTML + CSS + JS go over 150 KB.
- SEO tags present: title, description, Open Graph, sitemap, robots.txt, JSON-LD, favicon.
- Handover checklist: `~/job-search/templates/acceptance-handoff.md`.

## Commands

- `npm run dev`: local dev server.
- `npm run check`: lint, `astro check`, tests, build, size budget. This is the gate.
- `npm run build`: production build into `dist/`.
- `npm run preview`: preview the built site.

## Later: use as a public portfolio demo

This starter can become a public demo project for a portfolio. Keep the **Demo** label, keep the invented business, and add no client data. Then link it from the portfolio README as a live demo, not as client work.
