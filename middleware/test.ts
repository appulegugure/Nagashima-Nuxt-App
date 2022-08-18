export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id == 'auth') {
    return navigateTo('/auth', { redirectCode: 301 })
  }
  else if(to.params.id === 'edit'){
    return navigateTo('editpage', { redirectCode: 301 })
  }
})