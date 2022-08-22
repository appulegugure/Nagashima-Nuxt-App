<script setup>
const signSwitch = ref(false)
</script>
<template> 
  <div>
    <h2>Auth Page</h2>
    <span @click="signSwitch=!signSwitch">👉 Switch </span>
    <div v-if="signSwitch">
      <PartsSigninform></PartsSigninform>
    </div>
    <div v-else>
      <PartsSignupform></PartsSignupform>
    </div>
    <NuxtLink to="/">To Home</NuxtLink>
  </div>
</template>