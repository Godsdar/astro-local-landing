# Launch checklist

## Accounts and ownership

- Domain and hosting account belong to the client. The site is deployed on the client account.
- Hosting: Cloudflare Pages or Netlify. Check their current terms for commercial use, and confirm with a lawyer.
- Do not use GitHub Pages or Vercel Hobby for a commercial client site. GitHub Pages disallows business sites; Vercel Hobby is non-commercial only.

## Before launch

- [ ] `site.config.ts` filled from the client materials.
- [ ] `demo` set to `false` for a real client; demo builds keep `noindex`.
- [ ] `siteUrl` set to the final domain; `public/robots.txt` sitemap URL updated.
- [ ] Images are the client's own; light and compressed.
- [ ] `npm run check` green locally.
- [ ] Contact links work: phone, WhatsApp, Telegram, email.
- [ ] Mobile look checked at about 360 px.

## DNS and deploy

- [ ] Domain A/CNAME records point to the host, per the host docs.
- [ ] Custom domain added in the host dashboard, HTTPS issued.
- [ ] One test deploy, then check the live URL.

## After launch

- [ ] Live URL returns 200 and shows the site.
- [ ] No console errors; map loads only after a click.
- [ ] Sitemap reachable; `noindex` removed for a real client.
- [ ] Handover: accesses, repo, how to edit text. See `~/job-search/templates/acceptance-handoff.md`.

Legal texts (privacy policy, contracts) are templates. Check them with a lawyer.
