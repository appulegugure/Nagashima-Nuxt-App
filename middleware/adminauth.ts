import { useAuth } from '@/composables/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {
  // この middleware が設定されている場合は要ログイン
  const { getToken } = useAuth()
  const token = getToken()
  // トークンがアドミンの場合、adminページに飛ばす。
  if (!token || token !== 'admin@gmail.com'){
    throw showError({ statusCode: 404, statusMessage: "not authority this user" })
  }

  return true
})  