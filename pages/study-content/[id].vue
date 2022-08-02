<template>
  <div class="main-wrap">
    <!-- <h1>view↓</h1>
    <div id="viewjs" ref="viewjs"></div> -->
    <!-- <p>{{$route.params.id}}</p> -->
    <!-- <TestGetapitest/> -->
    <TestGetapitestasync/>
    <!-- <p>{{title}}</p> -->
    <!-- <p>{{ JSON.parse(title.blocks)}}</p> -->
    <ul>
      <li>
        <span>カテゴリー[AWS]:</span><NuxtLink to="/category-aws/">AWS</NuxtLink>
      </li>
      <li>
        <span>カテゴリー[omoni]:</span><NuxtLink to="/category-omoni/">OMONI</NuxtLink>
      </li>
      <li>
        <span>カテゴリー[test]:</span><NuxtLink to="/category-test/">test</NuxtLink>
      </li>
    </ul>    
  </div>
</template>
<script>
export default {
  name:'',
  props:[],
  data(){
    return{
      viewer:''
    }
  },
  // watchQuery: ['page'],
  mounted(){
    this.viewer = this.$editor({
      holder: 'viewjs',
      placeholder: 'No content',
    })
  },

}
</script>
<style scoped>
@media screen and (min-width: 599px)  {
  .main-wrap{
    width: 100%;
    padding: 20px;
  }
}
@media screen and (max-width: 598px)  {
  
}
</style>>