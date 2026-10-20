// Ridge Market Ledger: one optional site URL governs all absolute SEO output.
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const site = new URL(configuredSite || "https://mahoganybeef.com/").toString();

export default defineConfig({
  site,
  integrations: site ? [sitemap({ filter: (page) => !page.endsWith("/404/") })] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
