<template>
  <div>
    <NuxtLayout name="system-layout">
      <template #alart>
        <UipartsAlart/>
      </template>
      <template #maincompo>
        <MainCompo />
      </template>
    </NuxtLayout>

    <!-- test ↓ -->
    <UipartsAcordionList
      :s3list="ss"/>
  </div>
</template>

<script setup>

  onMounted(()=>{
    console.log('Welcome!! this method is rendering in client side')
  })
</script>


