<script setup>
definePageMeta({
  middleware: 'auth',
})

const { getToken } = useAuth()
const mypageToken = getToken()
</script>

<template>
  <div>
    <h1>🔒 マイページ</h1>
    <h1>TOKEN::=~>{{mypageToken}}</h1>
  </div>
</template>