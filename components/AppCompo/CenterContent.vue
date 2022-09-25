<template>
  <div :class="compoName">
    <NuxtPage />
  </div>
</template>
<script setup>
  const compoName = 'center-content'
</script>
<style lang="scss" scoped>
.center-content{
  background: lightgreen;
}

</style>