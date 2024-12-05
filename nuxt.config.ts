// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  compatibilityDate: "2024-11-25",
  runtimeConfig: {
    myProxyUrl: 'https://apis.tollguru.com/toll/v2/'
  }
})