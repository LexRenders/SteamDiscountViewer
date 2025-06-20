// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: '/astro-build',
  site: 'https://lex-renders-portfolio.be.be/astro-build'
});