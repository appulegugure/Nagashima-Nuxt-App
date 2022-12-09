import { useAuth } from '@/composables/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {

  // token取得
  const { getToken } = useAuth()
  const token = getToken()

// ミドルウェアスルー設定
  if(to.path === '/login'){
    // console.log('path /login')
    return true
  }

  if(to.path === '/'){
    // console.log('path /')
    return true
  }

// ミドルウェア認証設定
  if (!token || token !== 'nagashima0601@nagashima-s.co.jp'){
    return navigateTo('/login', { redirectCode: 301 })

    // return true
  }

  return true
})  