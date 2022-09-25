<template>
  <div>
    <NuxtLayout name="main-layout">
      <template #header>
        <HeaderCompo />
      </template>
      <template #main>
        <AppCompo />
      </template>
      <template #footer>
        <FooterCompo />
      </template>
    </NuxtLayout>
  </div>
</template>