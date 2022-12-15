<template>
  <div class="slide-menu-compo min-w-[170px]">

    <!-- desigun 1 -->
    <div class="flex justify-between ">
        <h2 class="font-medium text-green-700 hover:text-green-400 text-xl m-1">Content List</h2>    
        <UipartsArrow size="1.2em" class="my-auto" class-name="arrow1" @menuopen="arrow1Accordion" @menuclose="arrow1Accordion"/>
      
    </div>
    <transition>
      <div v-show="isShowText" class="acordionlist overflow-hidden">
        <UipartsAcordionList :s3list="itemlist"/>
      </div>
    </transition>

    <!-- desigun2 -->
    <div class="flex justify-between">
        <h2 class="font-medium text-green-700 hover:text-green-400 text-xl m-1">sonota</h2>    
        <UipartsArrow size="1.2em" class="my-auto" class-name="arrow2" @menuopen="arrow2Accordion" @menuclose="arrow2Accordion"/>
    </div>
    <transition>
      <div v-show="isdj" class="acordionlist overflow-hidden">
        <UipartsAcordionList2 :s3list="backendlistToTileArray"/>
      </div>
    </transition>

    <!-- debug -->
  </div>
</template>
<script setup>

  const isShowText = ref(false)
  const isdj = ref(false)
  
  /* バックエンド S3 */
  const { data:s3list } = await $fetch('/api/awsapigateway/s3-studycontent/list')

  const itemarray = []
  for (const item of s3list.Items){
    itemarray.push(item.filename)
  }

  const itemlist =  Array.from(new Set(itemarray))

  /* バックエンド 倫太郎 */
  const { data:backendlist } = await $fetch('/api/formbackend/contentId',{
    method:'get'
  })

  let backendlistToTileArray = []
  for (const item of backendlist){
    backendlistToTileArray.push(item)
  }
  

  console.log('itemlist', itemlist)
  console.log('backend', backendlist)


  // emit triger close function
  const arrow1Accordion = () => {
    console.log('openfire')
    if( isShowText.value === true){
      isShowText.value = false
    } else {
      isShowText.value = true
    }
    
  }

  const arrow2Accordion = () => {
    console.log('openfire')
    if( isdj.value === true){
      isdj.value = false
    } else {
      isdj.value = true
    }
    
  }
  // emit triger close function
  const close = () => {
    isShowText.value = false
  }

</script>
<style lang="scss" scoped>
.slide-menu-compo{
  // background: lightgreen;

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
      // background: rgb(12, 94, 56);
    }
  }
}

.v-enter-active, .v-leave-active {
  transition: opacity .3s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

</style>