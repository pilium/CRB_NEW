// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/svg-sprite',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})