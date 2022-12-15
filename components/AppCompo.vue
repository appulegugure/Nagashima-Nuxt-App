<template>
  <div>
    <NuxtLayout name="app-layout">
      <template #AppContent>
        <div class="block lg:flex">
          <div class="bg-transparent p-0">

            <div class="block lg:hidden">
              <button id="side-bar-toggle" class="flex items-center px-1 py-1 text-gray-500 border-gray-600 hover:text-white origin-center rotate-45">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-5 h-5 transition-transform duration-100 transform u-text-gray-400 rotate-0" width="1em" height="1em" viewBox="0 0 24 24" data-v-047565da="">
                  <path fill="currentColor" d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z">
                  </path>
                </svg>
              </button>
            </div>
            <div class="hidden lg:block" id="side-content">
              <!-- <AppCompoSideMenuCompo /> -->
            </div>
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

<script setup>
onMounted(()=>{
  document.getElementById('side-bar-toggle').onclick = function(){
			document.getElementById("side-content").classList.toggle("hidden");
		}
})
</script>