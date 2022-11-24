<template>
  <div class="p-3 bg-transparent">
    <!-- <h1>APP Layout</h1> -->
    <slot name="homecompo" />
  </div>
</template>
<script setup>
  const layoutName = 'home-content'
</script>
<style lang="scss" scoped>
h1{
  text-align: center;
  font-weight: 900;
}
</style>