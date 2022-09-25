<template>
  <div :class="compoName">
    <ul>
      <li v-for="item in itemlist" :key="item">
        <NuxtLink :to="item">{{item}}</NuxtLink>
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
    
  console.log('NO COMPLZe',itemlist)
</script>
<style lang="scss" scoped>
.slide-menu-compo{
  background: lightgreen;
}

</style>