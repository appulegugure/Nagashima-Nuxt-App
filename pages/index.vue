<script setup>
definePageMeta({
  layout: 'main',
});
</script>
<template>
  <div>
    <h1>Index page</h1>
    <ul>
      <li>
        <Nuxtlink to="/editpage">EDITPAGE</Nuxtlink>
      </li>
      <li>
        <Nuxtlink to="/category-aws">category:aws</Nuxtlink>
      </li>
      <li>
        <Nuxtlink to="/category-ds">category:ds</Nuxtlink>
      </li>
      <li>
        <NuxtLink to="/auth">Auth Page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/iframetest">Iframe Page</NuxtLink>
      </li>
      <li>
        <Nuxtlink to="/forbidden">Forbidden</Nuxtlink>
      </li>
    </ul>
  </div>
</template>