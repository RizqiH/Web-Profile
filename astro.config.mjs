// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://rizqiamanan.app',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind(),
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
})
