// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: `https://${process.env.SITE_DOMAIN}`,
  compressHTML: false,
  prefetch: { prefetchAll: true },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    svelte(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: "2025-01-28",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
  ],

  adapter: node({
    mode: "standalone",
  }),
});

