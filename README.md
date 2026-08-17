# Mahogany Beef Market & Bulalohan — Tagaytay Guide

这是一个以 **Astro 7、Tailwind CSS 4 与 TypeScript** 构建的单页菲律宾语旅游指南。站点面向菲律宾 Cavite 省 Tagaytay 的 Mahogany Beef Market & Bulalohan，采用 Cloudflare Workers Static Assets 架构；没有数据库、账号体系、CMS 或服务端业务逻辑。

## 运行方式

项目使用完整版本号锁定的 pnpm。请先使用 `.node-version` 中指定的 Node.js 版本，然后执行下列命令。

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build
```

本地开发使用 `corepack pnpm dev`。生产构建产物输出至 `dist/`，执行 `corepack pnpm deploy` 即会先构建，再以 `wrangler.jsonc` 的 Static Assets 配置发布至 Cloudflare Worker。发布动作须由部署者在具备对应 Cloudflare 账户权限的环境中执行。

## 单一域名配置

唯一的站点绝对 URL 配置为环境变量 `PUBLIC_SITE_URL`。例如，在 Cloudflare 构建环境中将其设置为最终的 `https://your-domain.tld` 后再构建。`astro.config.mjs` 只在该值有效时设定 Astro 的 `site` 并启用 `@astrojs/sitemap`；若未配置，构建仍会成功，canonical、Open Graph 的绝对 URL 和 sitemap 都会优雅省略，绝不会回落为占位域名。

| 配置项 | 作用 | 未配置时的行为 |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | 站点的唯一规范域名来源 | 不生成绝对 canonical / Open Graph URL，且不启用 sitemap |
| `wrangler.jsonc` | Worker 名称、入口文件与 `dist/` 静态资源目录 | 可直接由 Wrangler 读取，不依赖数据库或密钥 |

## 内容与合规说明

页面使用 Filipino（Tagalog）为主语言，并保留不可替代的地名、景点名与地图服务专名。文案中将营业时间、价格、停车位和公共交通都标注为应在出行当日确认的动态信息，避免把来源不稳定的资料写成保证。

结构化数据同时包含 `TouristAttraction` / `LocalBusiness` 与 `FAQPage`。评分信息为 Google Maps 检索时展示的 4.4/5 和 13,870 reviews 快照；该信息可能随时变化。GA4 `G-HXM22WWPKP` 只有在访客明确选择同意 analytics 后才动态载入。站点同时提供可打开的隐私说明、使用条款及 Cookie Settings。

| 信息或照片用途 | 公开来源 |
| --- | --- |
| 地址、坐标、地图、评分快照 | [Google Maps place listing](https://www.google.com/maps/place/Mahogany+Beef+Market+%26+Bulalohan/@14.1040923,120.9312525,1535m/) |
| Tagaytay 行政与周边游览背景 | [City Government of Tagaytay](https://www.tagaytay.gov.ph/) |
| 停车、开放式市场与非高峰到访建议 | [King Tolentino local market guide](https://www.kingtolentino.com/blog/mahogany-market) |
| 市场及 Bulalo 实拍素材来源 | [Tripadvisor — Mahogany Beef Market & Bulalohan](https://www.tripadvisor.com/Restaurant_Review-g317121-d3419894-Reviews-Mahogany_Beef_Market_Bulalohan-Tagaytay_Cavite_Province_Calabarzon_Region_Luzon.html) |

站点运行时通过项目托管的 `/manus-storage/` 地址引用实拍和品牌图形，避免在项目目录内放置大图片而拖慢部署。交付压缩包同时附带一个 `asset-library/` 文件夹，以便在迁移至其他托管环境时重新上传和替换这些资源；使用前请确认每张照片的版权、使用许可与归属。

## 已完成的交付前验证

在干净依赖环境中，已依次执行 `rm -rf node_modules`、`CI=1 corepack pnpm install --frozen-lockfile`、`corepack pnpm check` 和 `corepack pnpm build`，均成功完成。`astro check` 输出为 0 errors、0 warnings、0 hints。生产构建产物已检查，不含 `example.com`、`localhost` 或 `chrome-extension://`。当前未设置 `PUBLIC_SITE_URL`，因此没有生成假域名 sitemap；配置真实域名并重新构建后会自动生成。

同时已执行 `wrangler deploy --dry-run`，Wrangler 成功读取 `dist/` 中的静态资源并完成打包预检，未执行实际发布。
