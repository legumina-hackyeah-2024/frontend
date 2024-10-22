export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      download: true,
      families: {
        'Caveat+Brush': [400]
      }
    }]
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
      GQL_HOST: `${process.env.base_URL}/graphql`,
      URL: process.env.base_URL
    }
  },
})