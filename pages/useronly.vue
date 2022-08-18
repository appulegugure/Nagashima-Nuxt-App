<template>
  <div>
    User Only Page
  </div>
</template>

<script setup>
definePageMeta({
  // This is an example of inline middleware
  middleware: async() => {
    const { checkAuthState, token } = useAuth()
    await checkAuthState().then(()=>{
      console.log('token', token.value)
      if (token.value === 'false'){

        return false
      }
      return false
    })
  }
})
</script>