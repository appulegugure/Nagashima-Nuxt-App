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
        <a href="http://54.184.204.137:3000/editpage">EDITPAGE</a>
      </li>
      <li>
        <a href="http://54.184.204.137:3000/category-aws/">category:aws</a>
      </li>
      <li>
        <a href="http://54.184.204.137:3000/category-ds/">category:ds</a>
      </li>
    </ul>
    <Nuxtlink to="/forbidden">Go To forbidden</Nuxtlink>
    <NuxtLink to="/auth">To Auth</NuxtLink>
  </div>
</template>