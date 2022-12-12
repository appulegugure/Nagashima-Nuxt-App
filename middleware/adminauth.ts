import { useAuth } from '@/composables/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {

  console.log('adminauth middleware')
  // この middleware が設定されている場合は要ログイン
  const { getEmail } = useAuth()
  const token = getEmail()
  // トークンがアドミンの場合、adminページに飛ばす。
  if (!token || token !== 'admin@gmail.com'){
    throw showError({ statusCode: 404, statusMessage: "not authority this user" })
  }

  return true
})  