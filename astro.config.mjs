// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),

  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    domains: ['res.cloudinary.com'],
  },

  server: {
    port: 3000,
    host: true,
  }
});
