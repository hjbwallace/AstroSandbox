// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hjbwallace.github.io',
  base: '/AstroSandbox',
  integrations: [
    preact(), 
    sitemap({
      filter: (page) => page !== 'https://hjbwallace.github.io/AstroSandbox/posts/post-1/',
      entryLimit: 10000,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2022-02-24'),
    }),
  ],
});