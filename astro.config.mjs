// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://critter-care.com',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/thank-you') && !page.includes('/404'),
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
