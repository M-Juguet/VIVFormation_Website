// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: remplacer par le domaine de production définitif (requis pour le sitemap et les URLs canoniques).
  site: 'https://www.viv-formation.com',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
});
