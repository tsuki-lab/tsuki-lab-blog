import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import rehypeShiftHeading from "rehype-shift-heading";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  integrations: [sitemap(), preact()],
  markdown: {
    rehypePlugins: [[rehypeShiftHeading, { shift: 1 }]],
    extendDefaultPlugins: true,
  },
});
