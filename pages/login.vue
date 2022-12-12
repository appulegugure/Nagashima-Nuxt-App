<script setup>
// import { email, password } from '@formkit/inputs';
definePageMeta({
  middleware: 'pass',
})

const formInputEmail = ref('')
const formInputPassword = ref('')
const { login, setEmail, setPassword, setToken } = useAuth();

const loginFunction = () => {
  setEmail(formInputEmail)
  setPassword(formInputPassword)
  setToken('wwwwwwwwwwwwwwwww')
  login().then(() => {
    const router = useRouter();
    router.push({ path: "/" });
    console.log('route to')
  });
};

</script>
<template>
  <div>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://www.nagashima-mfg.com/_next/image?url=%2Fsvg%2Fnagashima_logo_w.svg&w=3840&q=75" alt="Your Company">
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login to your account</h2>
        </div>
        <form class="mt-8 space-y-6"  @submit.prevent="loginFunction">
          <input type="hidden" name="remember" value="true">
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" v-model="formInputEmail" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" v-model="formInputPassword" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password">
            </div>
          </div>
          <div>
            <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <!-- Heroicon name: mini/lock-closed -->
                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
              </span>
              Login
            </button>
          </div>
        </form>
        <NuxtLink to="/signup" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 ">Sign up</NuxtLink>
      </div>
    </div>
    <p>長島製作所ドメイン::nagashima-s.co.jp</p>
  </div>
</template>