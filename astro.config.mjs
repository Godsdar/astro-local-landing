import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages demo: site + base must match the repository path.
export default defineConfig({
  site: "https://godsdar.github.io",
  base: "/astro-local-landing",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
