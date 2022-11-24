<template>
  <div>
    <NuxtLayout name="main-layout">
      <template #header>
        <!-- <HeaderCompo2 /> -->
        <HeaderCompo />
      </template>
      <template #main>
        <div v-if="selectCompo == 'homeCompo'" class="py-[56px]">
          <HomeCompo />
        </div>
        <div v-else-if="selectCompo == 'appCompo'" class="py-[56px]">
          <AppCompo />
        </div>
        <div v-else-if="selectCompo == 'plainCompo'" class="py-[56px]">
          <PlainCompo />
        </div>
        <div v-else-if="selectCompo == 'adminCompo'" class="py-[56px]">
          <AdminCompo />
        </div>
      </template>
      <template #footer>
        <FooterCompo />
      </template>
    </NuxtLayout>
  </div>
</template>
<script setup>
  
  const route = useRoute()
  const initial = ()=> {
    if (route.path === '/'){
      return "homeCompo"

    }else if (route.path === '/login'){
      return "plainCompo"

    }else if(route.path === '/signup'){
      return "plainCompo"

    }else if(route.path === '/adminpage'){
      return "adminCompo"

    }else{
      return "appCompo"
    }
  }

  let selectCompo = initial()

  watch(() => route.query,()=>{
    if (route.path === '/'){
      selectCompo  = "homeCompo"

    }else if (route.path === '/login'){
      selectCompo  = "plainCompo"

    }else if(route.path === '/signup'){
      selectCompo  = "plainCompo"

    }else if(route.path.startsWith('/adminpage')){
      selectCompo  = "adminCompo"

    }else{
      selectCompo  = "appCompo"
    }
  })
</script>