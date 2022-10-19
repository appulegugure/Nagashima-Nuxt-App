<template>
  <div>
    <NuxtLayout name="main-layout">
      <template #header>
        <HeaderCompo />
      </template>
      <template #main>
        <div v-if="selectCompo == 'appCompo'">
          <AppCompo />
        </div>
        <div v-else-if="selectCompo == 'plainCompo'">
          <PlainCompo />
        </div>
        <div v-else-if="selectCompo == 'adminCompo'">
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
    if (route.path === '/login'){
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
    if (route.path === '/login'){
      selectCompo  = "plainCompo"

    }else if(route.path === '/signup'){
      selectCompo  = "plainCompo"

    }else if(route.path === '/adminpage'){
      selectCompo  = "adminCompo"

    }else{
      selectCompo  = "appCompo"
    }
  })
</script>