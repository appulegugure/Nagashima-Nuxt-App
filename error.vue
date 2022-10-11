<script setup>
const error = useError()
const router = useRouter();
const routhing = () => {router.push({ path: "/" });}
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <div class="flex">
      <div class="w-full">
        <img class="mt-15 ml-5 h-12 w-auto" src="https://www.nagashima-mfg.com/_next/image?url=%2Fsvg%2Fnagashima_logo_w.svg&w=3840&q=75" alt="Your Company">
        <ul class="mt-50 ml-5">
          <li class="mt-3 text-xl font-bold">{{ error.statusCode }}</li>
          <li class="mt-3 ml-2 text-3xl font-bold">{{ error.message }}</li>
        </ul>
        <div class="ml-5 mt-10 text-xl font-bold" @click="handleError">
          Go Back Home   →
        </div>
      </div>
      <div class="w-full">
        <div class="w-full h-auto bg-zinc-700">
          <!-- <img class="" src="./assets/img/AdobeStock_379505991.jpeg" alt="err-img"> -->
        </div>
      </div>
    </div>
    
  </div>
</template>