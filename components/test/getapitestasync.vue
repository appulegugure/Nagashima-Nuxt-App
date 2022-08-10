<script setup>
console.log('TESTASYNCDATA')
const route = useRoute()
console.log(route.params.id)

const page = ref('http://52.88.36.114:8080/read/' + route.params.id);


const { data: users,pending, error, refresh} = await useFetch(page)
// { data: users, pending, refresh, error }
// const { data: zip,} = await useFetch(() => 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=783006' + page.value);
function refresheee(){
  location.reload();
}

</script>
<template>
  <div>
    <!-- <h1>useLazyAsyncData</h1> -->
    <!-- <p><span>Id:</span>{{poposts.Id}}</p>
    <p><span>Title:</span>{{poposts.title}}</p>
    <p><span>Body:</span>{{poposts.body}}</p>
    <p><span>blocks:</span>{{JSON.parse(poposts.blocks)}}</p>
    <img :src="poposts.img" alt="" width="500px" height="500px">
    <button @click="refresh">Refresh</button> -->

    <!-- <h1>Pages:{{page}}</h1> -->
    <p>blocks:{{users.blocks}}</p>
    <PartsViewer :data="users.blocks"></PartsViewer>
    
    <h1>Fetch Status</h1>
    <div v-if="pending">Pending</div>
    <div v-else-if="error">Error</div>
    <div v-else-if="refresh">Refresh</div>
    <button @click="refresheee()"></button>
  </div>
</template>