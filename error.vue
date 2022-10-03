<script setup>
const error = useError()
</script>

<template>
  <div>
    <ul>
      <li>{{ error.statusCode }}</li>
      <li>{{ error.message }}</li>
    </ul>
    <NuxtLink to="/">Go Back Home</NuxtLink>
  </div>
</template>