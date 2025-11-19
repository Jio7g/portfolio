// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config'
  },

  app: {
    head: {
      title: 'Ingeniero en Sistemas | Portfolio Profesional',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfolio profesional de Ingeniero en Sistemas. Especialista en normativas de seguridad (ISO 27001/NIST) y arquitectura de software robusta.'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600&family=Outfit:wght@300;500;700&display=swap'
        }
      ]
    }
  },

  nitro: {
    preset: 'node-server'
  },

  typescript: {
    strict: true,
    typeCheck: false
  }
})
