// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.js" },
      { code: "nl", iso: "nl-NL", file: "nl.js" },
      { code: "fr", iso: "fr-FR", file: "fr.js" },
    ],
    defaultLocale: "nl",
    langDir: "lang/",
    vueI18n: "./i18n.config.ts",
    globalInjection: true,
  },
  app: {
    head: {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css",
        },
      ],
    },
  },
});
