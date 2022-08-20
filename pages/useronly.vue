<template>
  <div>
    User Only Page
    <PartsInputfile></PartsInputfile>
  </div>
</template>

<script setup>
definePageMeta({
  // This is an example of inline middleware
  middleware: async() => {
    const { checkAuthState, token } = useAuth()
    return await checkAuthState().then(()=>{
      console.log('token', token.value)
      if (token.value === 'false'){
        console.log('token value is null')
        return navigateTo('/auth', { redirectCode: 301 })
      }
      console.log('there is token value ')
      return true
    })
  }
})
</script>