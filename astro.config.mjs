// Ridge Market Ledger: one optional site URL governs all absolute SEO output.
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const site = configuredSite ? new URL(configuredSite) : undefined;

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
