export default defineNuxtRouteMiddleware(async (to) => {
  if (!process.server) {
    console.log('middleware auth')
    const { checkAuthState, token } = useAuth()
    await checkAuthState()
    console.log(token.value)
    if (token.value === '') {
      // replaceで遷移
      return await navigateTo('/auth', { replace: true })
    }
  }
}) 