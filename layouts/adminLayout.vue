<template>
  <div class="admin-layout">
    <h1>Admin LAYOUT</h1>
    <slot name="ppagecompo" />
  </div>
</template>
<style lang="scss" scoped>
h1{
  text-align: center;
  font-weight: 900;
}
.admin-layout{
  background: rgb(69, 136, 185);
  padding: 2px;
  width: 100%;
  min-height: 100vh;
}
</style>