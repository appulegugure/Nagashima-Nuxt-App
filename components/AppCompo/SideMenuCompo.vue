<template>
  <div :class="compoName">
    
    <!-- desigun 1 -->
    <h2 class="side-title">Content List</h2>    
    <ul class="sidecontent-list">
      <li v-for="item in itemlist" :key="item" class="sidecontent-item">
        <NuxtLink :to="'/content/education/' + item" ><span>{{item}}</span></NuxtLink>
      </li>
    </ul>

    <!-- desigun 2 -->
    <h2 class="p-2">Content List</h2>    
    <ul class="pl-5">
      <li v-for="item in itemlist" :key="item" class="py-1 hover:text-sky-400">
        <NuxtLink :to="'/content/education/' + item" ><span>{{item}}</span></NuxtLink>
      </li>
    </ul>

  </div>
</template>
<script setup>

  const compoName = 'slide-menu-compo'
  
  const { data:s3list } = await $fetch('/api/awsapigateway/s3-studycontent/list')

  const itemarray = []
  for (const item of s3list.Items){
    itemarray.push(item.filename)
  }

  const itemlist =  Array.from(new Set(itemarray))

  
</script>
<style lang="scss" scoped>
.slide-menu-compo{
  background: lightgreen;

  .side-title{
    font-size: 2em;
    font-weight: 900;
  }
  .sidecontent-list{
    width: 280px;

    .sidecontent-item{
      margin: 5px;
      padding: 5px;
      font-weight: 900;   
      background: rgb(12, 94, 56);
    }
  }
}

</style>