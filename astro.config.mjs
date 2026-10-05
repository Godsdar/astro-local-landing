import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./site.config.ts";

export default defineConfig({
  site: site.siteUrl,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
