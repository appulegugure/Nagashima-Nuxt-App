<template>
  <div>
    <div id="nuxtvuew"></div>
  </div>
</template>
<script>
export default {
  name:'',
  props:['data'],
  data(){
    return{
      viewer:'',
    }
  },
  mounted(){
    this.viewer = this.$editor({
      holder: 'nuxtvuew',
      placeholder: 'No content',
      data:JSON.parse(this.data)
    })
  },
  beforeDestroy(){
    this.viewer = this.$editor({
      holder: 'nuxtvuew',
      placeholder: 'No content',
      data:JSON.parse('')
    })
  } 

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