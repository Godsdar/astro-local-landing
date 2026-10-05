# Audit report

Date: 2026-10-05. Numbers below are measured from the build and CI, not estimates.

## Measured

- `npm run check` (lint, astro check, Vitest, build, size) passes locally and in CI.
- Tests: 13 Vitest cases pass.
- Build: 3 pages (`/`, `/404.html`, `/privacy/`).
- Page budget (HTML + CSS + JS, no images): 30.9 KB against a 150 KB limit.
- GitHub Actions `check` workflow: green.
- GitHub Pages `pages` workflow: green; live demo https://godsdar.github.io/astro-local-landing/ returns 200 with the Demo label and `noindex`.

## Not measured yet (open)

- Lighthouse mobile scores (Performance, Accessibility, Best Practices, SEO) and a `npm run audit` script.
- Playwright smoke tests and axe-core checks (network map click-to-load, FAQ, console errors).
- Self-hosted `@fontsource` font (the demo uses the system font stack to keep the budget and avoid cyrillic subset risk).

Reason: these need extra tooling installs (Lighthouse, Playwright browsers, axe) that were left out of this pass. They are planned as a follow-up. The current page budget and CI gates are the measured baseline.
