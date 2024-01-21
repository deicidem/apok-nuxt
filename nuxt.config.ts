import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  // modules
  modules: [
    // chore
    "@nuxtjs/eslint-module",
    // styling & ui
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    // management
    "@pinia/nuxt",
    "@vueuse/nuxt",
    // contents,
    "@nuxt/content",
    "shadcn-nuxt",
  ],

  css: [
    resolve("./assets/scss/_variables.scss"),
    resolve("./assets/scss/app.scss"),
  ],

  components: [
    {
      prefix: "Layout",
      path: resolve("./components/layouts"),
      global: true,
    },
    {
      prefix: "Awesome",
      path: resolve("./components/awesome"),
      global: true,
    },
  ],

  imports: {
    dirs: [resolve("./stores"), "~/stores"],
  },

  // module::pinia
  pinia: {
    storesDirs: ["~/stores/**", "#/stores/**", "@/stores/**"],
  },

  // module::headlessui
  headlessui: {
    prefix: "Headless",
  },
  // module::color-mode
  colorMode: {
    classSuffix: "",
  },
  // module::shadcn
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
