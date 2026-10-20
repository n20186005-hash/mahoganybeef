# Mahogany Beef Market & Bulalohan guide

Independent Filipino visitor guide to Mahogany Market in Tagaytay, built with Astro, Tailwind CSS and TypeScript.

## Local checks

Use the pinned pnpm package manager and Node.js 22.12 or later.

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build
```

`PUBLIC_SITE_URL` can override the default canonical origin, https://mahoganybeef.com/. The same setting governs canonical, social URLs and the generated sitemap. `src/worker.ts` normalizes HTTP/www requests on the production domain, preserves paths and query strings, and returns missing pages with noindex. Assets are bundled from `public/`.

## Content maintenance

The site is an independent guide, not the market or a restaurant operator. Confirm current hours, prices, menus, transport and facilities with the relevant operators. Do not publish third-party Maps ratings as reviews collected by this site or use unsupported restaurant, price, admission or opening-hour structured data. Keep visible FAQ answers and FAQPage output consistent.

Analytics is loaded after a visitor grants consent. The preference is stored locally and can be changed on the cookie settings page. Google Maps and Google Fonts are separate third-party services.

The image sources and attribution notes are retained in `asset-library/` and the public guide. Check rights before reusing photographs.
