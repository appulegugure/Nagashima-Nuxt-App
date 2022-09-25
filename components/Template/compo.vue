<template>
  <div :class="compoName">
    <ul>
      <li>AAA</li>
      <li>BBB</li>
      <li>CCC</li>
    </ul>
  </div>
</template>
<script setup>
  const compoName = 'slide-menu-compo'
</script>
<style lang="scss" scoped>
.slide-menu-compo{
  background: lightgreen;
}

</style>