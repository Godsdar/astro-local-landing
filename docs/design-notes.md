# Design notes

## Direction

A small local business site that does not look like a default template. The
structure is calm and readable; the hero is asymmetric so it does not read as a
centered template block.

## Type

System font stack (`system-ui`, then platform fallbacks). Reason: zero font
requests, fast first paint, and no license or subset risk for cyrillic plus
latin. A self-hosted OFL font via `@fontsource` was considered; the 60 KB font
budget and the cyrillic subset made system fonts the better trade for this demo.

## Color and theme

One accent pair per preset, driven by CSS variables. Presets `calm`, `bold`,
`warm` switch palette and font mood with one line in `site.config.ts`. Dark mode
follows `prefers-color-scheme`.

## Space and motion

A small spacing scale (`--space-1` to `--space-5`), rounded cards, and subtle
hover lift. Motion is CSS only and only inside `prefers-reduced-motion:
no-preference`.

## Illustrations

Only own SVG illustrations (hero, map, favicon, OG image). No third-party images.
