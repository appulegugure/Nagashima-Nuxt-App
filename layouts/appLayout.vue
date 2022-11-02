<template>
  <div class="p-3 bg-black">
    <!-- <h1>APP Layout</h1> -->
    <slot name="AppContent" />
  </div>
</template>
<script setup>
  const layoutName = 'app-content'
</script>
<style lang="scss" scoped>
h1{
  text-align: center;
  font-weight: 900;
}
</style>
