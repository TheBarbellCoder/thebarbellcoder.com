import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://www.thebarbellcoder.com",
  integrations: [tailwind(), image({serviceEntryPoint: '@astrojs/image/sharp'})],
  vite: {ssr: {external: ["svgo"]}},
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      wrap: false
    }
  }
});
