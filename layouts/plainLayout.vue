<template>
  <div class="plain-layout">
    <h1>PLAIN LAYOUT</h1>
    <slot name="pagecompo" />
  </div>
</template>
<style lang="scss" scoped>
h1{
  text-align: center;
  font-weight: 900;
}
.plain-layout{
  background: rgb(139, 52, 152);
  padding: 2px;
  width: 100%;
  min-height: 100vh;
}
</style>