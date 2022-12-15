<template>
  <div>
    <div class="sm:pb-20 pt-12 md:pt-28">
      <div class="mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl relative flex flex-col items-center sm:items-start gap-y-8">
        <a href="#" class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-xs px-2.5 py-1.5 border border-transparent u-text-gray-700 u-bg-gray-100 hover:u-bg-gray-200 disabled:u-bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:u-ring-gray-900 inline-flex items-center rounded-lg">
          <span class="text-left break-all line-clamp-1">Ver 1.0</span>
        </a>
        <h1 class="relative max-w-2xl text-5xl font-semibold lg:text-left text-center md:text-6xl lg:text-7xl u-text-gray-900">
          <!--[-->The Intuitive Web Framework<!--]-->
        </h1>
        <p class="max-w-lg text-xl lg:text-left text-gray-500 sm:w-3/5 text-center dark:text-gray-100 leading-8">
          <!--[-->Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.<!--]-->
        </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 z-[1]">
        <NuxtLink to="/content/education/" class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-base px-4 py-2 relative text-white gradient-border-2 border-gradient-br-gradient-gray-900 hover:border-gradient-br-gradient-black before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-green-400 before:via-teal-400 before:to-teal-600 before:blur-md before:z-[-1] inline-flex items-center rounded-lg focus-visible:ring-2">
          <span class="text-left break-all line-clamp-1 underline underline-offset-4">Get started</span>
        </NuxtLink>
      </div>
      </div>
    </div>
    <!-- debug -->
    <!-- <UipartsTest/> -->
    <!--  -->
    <div v-for="sele in all_course_data.data" :key="sele" :value="sele.ID" :class="'bg-[' +sele.color +']'">NAME:{{sele.name}},,color{{sele.color}}</div>
    <div class="bg-[#50d71e]">sasasasasa</div>
  </div>
</template>
<script setup>

const { data:all_course_data, pending, error, refresh } = await useFetch('/api/formbackend/all_genre')

// クライアント
onMounted(()=>{
  const sub = document.getElementById("iframe");
  console.log('SUB',sub.contentWindow.document.body.scrollHeight)
  sub.style.height = sub.contentWindow.document.body.scrollHeight
})

</script>