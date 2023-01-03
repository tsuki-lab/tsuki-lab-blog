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
    remarkPlugins: [digest],
    rehypePlugins: [[rehypeShiftHeading, { shift: 1 }]],
    extendDefaultPlugins: true,
  },
});

function digest() {
  const transfer2Text = (tree) => {
    return tree.children.reduce((acc, crr) => {
      if (crr.type === "text") {
        return (acc += crr.value);
      }
      return (acc += transfer2Text(crr));
    }, "");
  };

  return function (tree, file) {
    const text = transfer2Text(tree);
    file.data.astro.frontmatter.digest = text.slice(0, 140);
  };
}
