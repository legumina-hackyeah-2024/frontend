export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client'
  ],
  plugins: [
    '~/plugins/leaflet.js'
  ],
  vite: {
    optimizeDeps: {
      include: ['@vue-leaflet/vue-leaflet']
    }
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://treasures-of-poland.up.railway.app/graphql',
    }
  }
})