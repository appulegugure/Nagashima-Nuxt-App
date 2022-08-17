<template>
  <div>
    <div class="main-title-wrap">
      <!-- <p class="main-title">Category:<span>{{$route.params.category}}</span></p> -->
    </div>
    <GetCategoryApi/>
  </div>
</template>
<style scoped>
.main-title-wrap{
  background:linear-gradient(45deg,#989898,#cfcfcf,#aeaeae);
}
.main-title {
  justify-content: center;
  line-height: 1;
  color: #EDEDED;
  font-size: 1em;
  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.4);
  font-weight: 100;
  background: transparent;
  padding: 10px;
}
</style>