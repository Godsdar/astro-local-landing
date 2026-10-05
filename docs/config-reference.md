# Config reference (site.config.ts)

All the content lives in `site.config.ts`. Edit only that file for a new client.

## Top level

- `lang`: `"ru"` or `"en"`. Sets the `html lang` attribute.
- `demo`: `true` keeps the Demo banner and `noindex`. Set `false` for a real client.
- `theme`: `"calm"`, `"bold"` or `"warm"`. One line switches the palette and font mood.
- `businessName`, `tagline`, `description`, `city`: text.
- `phone`, `whatsapp`, `telegram`, `email`, `instagram`: contacts. `whatsapp` is digits only.
- `address`, `hours`: shown in contacts and the map block.
- `services`: list of `{ title, description, price? }`.
- `showPricing`, `pricingNote`: the pricing block is optional.
- `process`: list of `{ title, text }`.
- `testimonials`: list of `{ name, text }`. The block is hidden when empty.
- `faq`: list of `{ q, a }`.
- `map`: see below.
- `siteUrl`, `ogImage`: canonical URL and Open Graph image path.

## map

- `provider`: `"osm-embed"` (click-to-load OpenStreetMap iframe) or `"links-only"`.
- `lat`, `lon`, `zoom`: demo uses a neutral point in central Almaty.
- `label`: caption under the map image. The demo says it is not a real address.
- `links`: `[{ label, url }]` for "build a route" and "open in maps".

No map request happens before the user clicks "Показать карту". Attribution
"© OpenStreetMap contributors" links to openstreetmap.org/copyright.

## Validate

`validateConfig` in `src/lib/format.ts` checks required fields, phone and link
formats, theme, map coordinates, FAQ shape, and (in production mode) placeholder
text. Tests: `test/site.config.test.ts`.
