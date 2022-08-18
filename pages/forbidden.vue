<template>
  <div>
    Forbidden
  </div>
</template>

<script setup>
definePageMeta({
  // This is an example of inline middleware
  middleware: () => {
    console.log('Strictly forbidden.')
    // return navigateTo('auth',{redirectCode:302})
    return false
  }
})
</script>