<template>
  <div :class="layoutName">
    <h1>SYSTEM LAYOUT</h1>
    <slot name="maincompo" />
  </div>
</template>
<script setup>
  const layoutName = 'system-layout'
</script>
<style lang="scss" scoped>
h1{
  text-align: center;
  font-weight: 900;
}
.system-layout{
  background: rgb(239, 198, 161);
  padding: 2px;
  width: 100%;
  min-height: 100vh;
}
</style>