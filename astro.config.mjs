import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// @astrojs/cloudflare is listed in devDependencies for future SSR/hybrid use.
// For static Cloudflare Pages deployment, no adapter is required.
// To enable: import cloudflare from '@astrojs/cloudflare'; then add adapter: cloudflare()

export default defineConfig({
  site: 'https://cowaty.com',
  output: 'static',
  compressHTML: true,
  integrations: [
    sitemap(),
  ],
});
