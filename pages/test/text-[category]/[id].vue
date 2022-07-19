<template>
  <div>
    <p>$route:<span>{{$route}}</span></p>
    <p>$route.params<span>{{$route.params}}</span></p>
    <p>$route.params.category<span>{{$route.params.category}}</span></p>
    <p>$route.params.id<span>{{$route.params.id}}</span></p>
  </div>
</template>
<style scoped>
span{
  color: chocolate;
}
</style>