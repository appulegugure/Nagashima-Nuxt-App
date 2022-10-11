<template>
  <div class="header-wrap">
    <!-- <h2>HEADER</h2> -->
    <!-- <div class="flex">
      <h2 class="p-4">login_State::<span class="text-zinc-900 font-extrabold">{{loggedIn}}</span></h2>
      <h2 class="p-4">login_User::<span class="text-zinc-900 font-extrabold">{{loggedInUser}}</span></h2>
      <h2 class="p-4">cookie::{{cookie}}</h2>
    </div>
    <ul class="list-none">
      <li class="hover:bg-sky-700">
        <div v-if="loggedIn">
          <NuxtLink @click="logout" to="/">LogOut</NuxtLink>
        </div>
        <div v-else>
          <NuxtLink to="login">LogIn</nuxtLink>
        </div>
      </li>
      <li class="hover:bg-sky-700">
        <NuxtLink to="/mypage">My Page</NuxtLink> 
      </li>
      <li class="hover:bg-sky-700">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="hover:bg-sky-700">
        <NuxtLink to="/adminpage">Admin Page</NuxtLink>
      </li>
    </ul> -->
    
    <!-- test -->
    <div>
      <div class="bg-black lg:pb-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header class="flex justify-between items-center py-4 md:py-8">
            <!-- logo - start -->
            <NuxtLink to="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
              <img class="mx-auto h-12 w-auto" src="https://www.nagashima-mfg.com/_next/image?url=%2Fsvg%2Fnagashima_logo_w.svg&w=3840&q=75" alt="Your Company">
              長島製作所
            </NuxtLink>
            <!-- logo - end -->

            <!-- nav - start -->
            <nav class="hidden lg:flex gap-12">
  
              <NuxtLink to="/" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Home</NuxtLink>
              <NuxtLink to="/mypage" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Mypage</NuxtLink>
              <NuxtLink to="/adminpage" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Adminpage</NuxtLink>
              <NuxtLink to="/404" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">404</NuxtLink>
            </nav>
            <!-- nav - end -->

            <!-- buttons - start -->
            <div class="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
              
              <div v-if="loggedIn">
                <NuxtLink @click="logout" to="/" class="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">LogOut</NuxtLink>
              </div>
              <div v-else>
                <NuxtLink to="/login" page-key=“static” class="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">LogIn</nuxtLink>
              </div>
              <NuxtLink to="/signup" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Sign up</NuxtLink>
            </div>

            <!-- <button type="button" class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
              Menu
            </button> -->
            <!-- buttons - end -->
          </header>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { loggedIn,loggedInUser,logout,cookie } = useAuth()

  definePageMeta({
    layout: "custom",
  });

</script>

<style lang="scss" scoped>
  h2{
    font-weight: 100;
  }
  .header-wrap{
    background: steelblue;
  }
</style>