<template>
  <NuxtLayout name="app-layout">
    <template #AppContent>
      <div class="app-content-wrap">
        <div class="side-menu">
          <AppCompoSideMenuCompo />
        </div>
        <div class="center-content">
          <AppCompoCenterContent />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.app-content-wrap{
  display: flex;
  .side-menu{
    background: lightblue;
  }
  .center-content{
    background: lightpink;
  }
}

</style>