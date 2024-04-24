// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href:"Rti.ico" }
      ]
    }
  },
 modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  gtag: {
    id: ''
  },
  css: ['@/assets/css/tailwind.css'],
   "nitro": {
   "plugins": ["~/server/db/index.js"],
 },
})
