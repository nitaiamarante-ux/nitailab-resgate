// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://resgateseugoogle.nitailab.com.br',
  base: '/',
  integrations: [sitemap({ filter: (page) => !page.includes('/eu-37ja0k92rj') })],
});
