import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr:true,
  // css:['~/assets/css/main.css','~/assets/style/test.scss'],
  modules: ['@formkit/nuxt', '@nuxt/ui-edge','@nuxtjs/tailwindcss'],
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css","@/assets/css/default.css"], 
  typescript: {
    strict: true
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
      S3CONTENT_API_GET: process.env.S3CONTENT_GET_KEY || '',
      content_test: process.env.CONTENT_TEST || ''
    },
  },
  
//////////////////////////////////
  /*form kit config*/ 
  formkit: {
    defaultConfig: true,
    configFile: './formkit.config.ts',
  },

//////////////////////////////////
  /* vuetify for nuxt3 config */
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
    cssPath: '~/assets/style/tailwind.scss',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    // config: {},
    injectPosition: 0,
    viewer: true,
  }
})
