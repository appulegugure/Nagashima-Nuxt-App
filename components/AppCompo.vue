<template>
  <div>
    <NuxtLayout name="app-layout">
      <template #AppContent>
        <div class="flex">
          <div class="bg-transparent p-2">
            <AppCompoSideMenuCompo />
          </div>
          <div class="bg-transparent p-2 w-full h-full">
            <AppCompoCenterContent />
          </div>
        </div>  
      </template>
    </NuxtLayout>  
  </div>
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