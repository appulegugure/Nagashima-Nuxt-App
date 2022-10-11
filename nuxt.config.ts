import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr:true,
  // css:['~/assets/css/main.css','~/assets/style/test.scss'],
  modules: ['@formkit/nuxt', '@nuxt/ui-edge','@nuxtjs/tailwindcss'],
  // formkit: {
  //   defaultConfig: true,
  //   configFile: './formkit.config.ts',
  // }, 
  typescript: {
    strict: true
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
      S3CONTENT_API_GET: process.env.S3CONTENT_GET_KEY || ''
    },
  },
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css","@/assets/css/default.css"],

  /* vuetify for nuxt3 condig */
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
//////////////////////////////////
  /* tailwind config */ 
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    // config: {},
    injectPosition: 0,
    viewer: true,
  }
})
