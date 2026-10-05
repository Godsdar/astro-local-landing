# Deploy on Cloudflare Pages (template, do not run in autopilot)

Owner: the client account (recommended, see ~/hermes-workspace/research/order-flow.md, section 6).

## Steps (manual, later)

1. Push the repository to the client's GitHub (manual, not in autopilot).
2. In the Cloudflare dashboard: Workers and Pages -> Create -> Pages -> Connect to Git.
3. Build command: `npm run build`. Output directory: `dist`.
4. Node version: 22 (set an env var `NODE_VERSION=22` if needed).
5. Add the custom domain from the client and set `site` in `site.config.ts` to match.
6. Do not commit any API token. Cloudflare tokens stay in the dashboard only.

Commercial use on the Free plan was not restricted on the limits page read
(developers.cloudflare.com/pages/platform/limits); verify the general Cloudflare
terms and check with a lawyer.
