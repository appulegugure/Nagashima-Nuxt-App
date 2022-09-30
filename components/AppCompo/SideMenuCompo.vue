<template>
  <div :class="compoName">
    <h2 class="side-title">Content List</h2>    
    <ul class="sidecontent-list">
      <li v-for="item in itemlist" :key="item" class="sidecontent-item">
        <NuxtLink :to="item" ><span>{{item}}</span></NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
  const {s3ObjectsGetApi } = apiGet()
  const compoName = 'slide-menu-compo'
  const url = s3ObjectsGetApi
  const { data:s3list ,pending, error, refresh} = await useFetch(url)
  
  const itemarray = []
  for (const item of s3list._rawValue.Items){
    itemarray.push(item.filename)
  }

  // console.log('ARRT',itemarray)

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