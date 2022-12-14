<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-2 fixed w-full z-10 top-0">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<a class="text-white no-underline hover:text-white hover:no-underline" href="#">
				<span class="text-2xl pl-2"><i class="em em-grinning"></i> :- Nagashima -:</span>
			</a>
		</div>

		<div class="block lg:hidden">
			<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				<li class="mr-3">
					<NuxtLink to="/" class="text-gray-300 hover:text-indigo-500 active:text-indigo-700 text-sm px-3 font-semibold transition duration-500 border-r-1 border-indigo-500">Home</NuxtLink>
				</li>
				<li class="mr-3">
					<NuxtLink to="/mypage" class="text-gray-300 hover:text-indigo-500 active:text-indigo-700 text-sm px-3 font-semibold transition duration-100 border-r-1 border-indigo-500">Mypage</NuxtLink>
				</li>
				<li class="mr-3">
					<NuxtLink to="/adminpage" class="text-gray-300 hover:text-indigo-500 active:text-indigo-700 text-sm px-3 font-semibold transition duration-100 border-r-1 border-indigo-500">Adminpage</NuxtLink>
				</li>
				<li class="mr-3">
					<NuxtLink to="/404" class="text-gray-300 hover:text-indigo-500 active:text-indigo-700 text-sm px-3 font-semibold transition duration-100">404</NuxtLink>
				</li>
				<li class="mr-3 hidden lg:flex">
					<div class="lg:pl-20 flex-col lg:justify-start gap-2.5 -ml-8">
						<div v-if="loggedIn">
							<NuxtLink @click="logout" to="/" class="text-gray-300 hover:text-indigo-50011111111
							[[[[---¥¥¥¥
							]]]] active:text-indigo-700 text-sm px-3 font-semibold transition duration-100">
								LogOut
							</NuxtLink>
						</div>
						<div v-else>
							<NuxtLink to="/login" page-key=“static” class="text-gray-300 hover:text-indigo-500 active:text-indigo-700 text-sm px-3 font-semibold transition duration-100">
								<Icon class="p-1" name="ion:person-outline" size="2em" color="D9D4C7"/>
								Login
							</nuxtLink>
						</div>
					</div>
				</li>
				<li class="mr-3 flex lg:hidden">
					<div v-if="loggedIn">
						<NuxtLink @click="logout" to="/" class="text-gray-300 hover:text-indigo-500 active:text-indigo-700 text-sm px-3 font-semibold transition duration-100">
							LogOut
						</NuxtLink>
					</div>
					<div v-else>
						<NuxtLink to="/login" page-key=“static” class="text-gray-300 hover:text-indigo-500 active:text-indigo-700 text-sm px-3 font-semibold transition duration-100">
							Login
						</nuxtLink>
					</div>
				</li>
			</ul>
		</div>
	</nav>

	<!--Container-->
	<div class="container shadow-lg mx-auto bg-white mt-6 md:mt-18">
	</div>
</template>

<script setup>
  const { loggedIn,loggedInUser,logout,cookie } = useAuth()

  definePageMeta({
    layout: "custom",
  });

onMounted(()=>{
  document.getElementById('nav-toggle').onclick = function(){
			document.getElementById("nav-content").classList.toggle("hidden");
		}
})
</script>