// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  uiPro: {
    license: process.env.NUXT_UI_PRO_LICENSE,
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-vuefire", "@nuxt/ui-pro"],
  compatibilityDate: "2024-11-25",
  runtimeConfig: {
    myProxyUrl: "https://apis.tollguru.com/toll/v2/",
  },
  vuefire: {
    auth: {
      enabled: true,
      debug: process.env.NODE_ENV !== "production",
      isTokenAutoRefreshEnabled: true,
    },
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
  routeRules: {
    "/": { isr: true },
    // Make some pages client only (since we have an SPA)
    // useful for authenticated pages that require the user to be logged in to be
    // displayed
    "/admin": { ssr: false },
    "/users": { ssr: false },
    "/posts/new": { ssr: false },
    "/emoji-panel": { ssr: false },
    "/login": { ssr: false },
    "/profileForm": { ssr: false },
    "/settings": { ssr: false },
    "/settings/*": { ssr: false },
    "/annonceurs/ride/*": { ssr: false },
    "/annonceurs/*": { ssr: false },
    "/annonceurs": { ssr: false },
    "/dashboard": { ssr: false },
    "/convoyeurs/*": { ssr: false },
    "/convoyeurs/rides": { ssr: false },
    "/convoyeurs": { ssr: false },
    "/inbox": { ssr: false },
    "/inbox/*": { ssr: false },
  },
  nitro: {
    storage: {
      uploads: {
        driver: "fs",
        base: "./public/uploads",
      },
    },
  },
});
