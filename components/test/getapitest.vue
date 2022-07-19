<script setup >
console.log('TESTGETCATEGORYAPI')
const route = useRoute()
console.log(route.params.id)
const { data: posts } = await useFetch('http://52.88.36.114:8080/read/' + route.params.id)
console.log('READ:ID',posts)
</script>

<template>
  <div>
    <h1>useFetch</h1>
    <p><span>Id:</span>{{posts.id}}</p>
    <p><span>Title:</span>{{posts.title}}</p>
    <p><span>Body:</span>{{posts.body}}</p>
    <p><span>blocks:</span>{{JSON.parse(posts.blocks)}}</p>
    <img :src="posts.img" alt="" width="500px" height="500px">

  <!-- lplplplp -->
    <button @click="refresh">Refresh</button>
  </div>
</template>
<style scoped>
span{color: red;font-size: 2em;}
</style>