<script setup >
console.log('GETCATEGORYAPI')
const route = useRoute()
const router = useRouter();
console.log(route.params.category)
const { data: posts } = await useLazyFetch('http://52.88.36.114:8080/show/' + route.params.category )

</script>
<template>
  <div>
    <h1>sssasa</h1>
    <div v-for="post in posts" :key="post">
      <p>{{post.Id}}</p>
      <!-- <NuxtLink :to="post.Id">KOKOOSE</NuxtLink> -->
      <NuxtLink :to="'/study-content/' + post.Id">test</NuxtLink>
    </div>
    
  
    
    
  </div>
</template>