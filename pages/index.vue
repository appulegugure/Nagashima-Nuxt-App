<template>
  <div>
    <div class="sm:pb-20 pt-12 md:pt-28">
      <div class="mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl relative flex flex-col items-center sm:items-start gap-y-8">
        <a href="#" class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-xs px-2.5 py-1.5 border border-transparent u-text-gray-700 u-bg-gray-100 hover:u-bg-gray-200 disabled:u-bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:u-ring-gray-900 inline-flex items-center rounded-lg">
          <span class="text-left break-all line-clamp-1">Ver 1.0</span>
        </a>
        <h1 class="relative max-w-2xl text-5xl font-semibold text-center sm:text-left md:text-6xl lg:text-7xl u-text-gray-900">
          <!--[-->The Intuitive Web Framework<!--]-->
        </h1>
        <p class="max-w-lg text-xl text-center text-gray-500 sm:w-3/5 sm:text-left dark:text-gray-100 leading-8">
          <!--[-->Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.<!--]-->
        </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 z-[1]">
        <NuxtLink to="/content/education/" class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-base px-4 py-2 relative text-white gradient-border-2 border-gradient-br-gradient-gray-900 hover:border-gradient-br-gradient-black before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-green-400 before:via-teal-400 before:to-teal-600 before:blur-md before:z-[-1] inline-flex items-center rounded-lg focus-visible:ring-2">
          
          <span class="text-left break-all line-clamp-1">Get started</span>
          
        </NuxtLink>
        <!-- <NuxtLink to="https://www.nagashima-mfg.com/" rel="noopener noreferrer" target="_blank" class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-base px-4 py-2 border border-transparent u-text-gray-500 hover:u-text-gray-700 focus:u-text-gray-700 disabled:hover:u-text-gray-500 inline-flex items-center rounded-lg u-text-gray-900 focus-visible:ring-2">
          <span class="text-left break-all line-clamp-1">Open on Github</span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="flex-shrink-0 h-5 w-5 ml-3 -mr-1" style="" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z"></path>
          </svg>
        </NuxtLink> -->
      </div>
      </div>
    </div>

    <!-- debug -->
    <!-- <UipartsTest/> -->
  </div>
</template>
<script setup>
onMounted(()=>{
  const sub = document.getElementById("iframe");
  console.log('SUB',sub.contentWindow.document.body.scrollHeight)
  sub.style.height = sub.contentWindow.document.body.scrollHeight
})

</script>