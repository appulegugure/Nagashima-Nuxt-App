<script setup>
const {token} = useAuth()
</script>
<template>
  <div>
    <p>Token:{{token}}</p>
    <NuxtLink to="/auth/">HOME</NuxtLink>
  </div>
</template>