// @ts-check
import { defineConfig } from "astro/config";

import { loadEnv } from "vite";

import node from "@astrojs/node";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";

const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");

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
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET,
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
