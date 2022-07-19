<template>
  <div class="main-wrap">
    <h1>view↓</h1>
    <div id="viewjs"></div>
    <p>{{$route.params.id}}</p>
    <!-- <TestGetapitest/> -->
    <TestGetapitestasync/>
    <!-- <p>{{title}}</p> -->
    <!-- <p>{{ JSON.parse(title.blocks)}}</p> -->
    <NuxtLink to="/category-aws/">AWS</NuxtLink>
    <NuxtLink to="/category-omoni/">OMONI</NuxtLink>
    <NuxtLink to="/category-test/">test</NuxtLink>

  </div>
</template>
<script>
export default {
  name:'',
  props:[],
  data(){
    return{
    }
  },
  // watchQuery: ['page'],
  mounted(){
    const editor = this.$editor({
      holder: 'viewjs',
      placeholder: 'No content',
    })
  },

  // async asyncData ({params}) {
  //   console.log('start')
  //   try{
  //     let { data,status } = await axios.get(`http://52.88.36.114:8080/read/${params.id}`)
  //     console.log('data',data.blocks)
  //     console.log('status',status)
  //     return { title: data.blocks, apiStatus: status }
  //   }catch(err){
  //     console.log(err)
  //   }
  // },
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