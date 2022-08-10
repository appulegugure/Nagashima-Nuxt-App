export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', () => {
      /* your code goes here */
      console.log('☎️Nuxt Lifecycle Hook as "app:create" ')
    })
})