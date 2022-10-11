<template>
  <div>
    <NuxtLayout name="app-layout">
      <template #AppContent>
        <div class="flex">
          <div class="bg-blue-400 p-1">
            <AppCompoSideMenuCompo />
          </div>
          <div class="bg-pink-400 p-1 w-full h-full">
            <AppCompoCenterContent />
          </div>
        </div>  
      </template>
    </NuxtLayout>  
  </div>
</template>

<!-- <script setup >
// レイアウト切り替え　appLayout or plainLayout

</script> -->
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