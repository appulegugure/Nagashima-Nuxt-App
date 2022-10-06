import { useAuth } from '@/composables/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {
  // この middleware が設定されている場合は要ログイン
  const { getToken } = useAuth()
  const token = getToken()
  if (!token && to.path !== '/login') {
    const path = '/login'
    return { path }
  }
})  


// getTokenがあればページ遷移される。
// getTokenが空であれば'/login'へ飛ばされる