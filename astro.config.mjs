// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import mdx from "@astrojs/mdx";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
  },

  integrations: [mdx()],
  site: "https://your-domain.com",
});
