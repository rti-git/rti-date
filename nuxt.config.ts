// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href:"Rti.ico" }
      ]
    }
  },
 modules: ['@nuxtjs/tailwindcss'], 
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/css/tailwind.css'],
})
