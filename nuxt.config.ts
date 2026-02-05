// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  // globale SCSS/CSS-Dateien, einmalig registrieren
  css: ['./app/styles/main.scss'],
})

