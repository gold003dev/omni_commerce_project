import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { liveDesigner } from "@pinegrow/vite-plugin";
import Unocss from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import AutoImportComponents from "unplugin-vue-components/vite";
import AutoImportAPIs from "unplugin-auto-import/vite";
import VueRouter from "unplugin-vue-router/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import Layouts from "vite-plugin-vue-layouts";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    liveDesigner({
      //...
    }),
    Unocss({
      presets: [
        presetIcons({
          prefix: "i-", // default prefix, do not change
        }),
      ],
      content: {
        pipeline: {
          /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
          include: ["./src/**/*"],
        },
      },
    }),
    AutoImportComponents({
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

      dirs: ["./src/components"],

      // allow auto load markdown components under ./src/components/
      extensions: ["vue", "md"],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // resolvers: [], // Auto-import using resolvers
      dts: "components.d.ts",
    }),
    // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
    AutoImportAPIs({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
        // /\.mdx$/, // .mdx
      ],
      imports: [
        "vue",
        "vue-router",
        VueRouterAutoImports,
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // '@vueuse/core',
        // 'pinia',
      ],
      dirs: [
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        // 'src/composables',
        // 'src/utils',
        // 'src/stores',
      ],
      vueTemplate: true,
      dts: "auto-imports.d.ts",
    }),
    VueRouter({
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

      // routesFolder: 'src/pages', // default
      dts: "typed-router.d.ts",
    }),
    Layouts(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // this ensures that the browser opens upon server start
    open: false,
    // this sets a default port to 3000
    port: 3000,
  },
});
