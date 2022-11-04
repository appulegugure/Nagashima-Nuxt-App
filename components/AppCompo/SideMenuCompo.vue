<template>
  <div class="slide-menu-compo min-w-[170px]">
    
    <!-- desigun 1 -->
    <div class="flex justify-between ">
        <h2 class="font-medium text-green-700 hover:text-green-400 text-xl m-1">Content List</h2>    
        <UipartsArrow size="1.2em" class="my-auto" class-name="arrow1" @menuopen="arrow1Accordion" @menuclose="arrow1Accordion"/>
      
    </div>
    
    <!-- <nav>
      <ul class="sidecontent-list">
        <li v-for="item in itemlist" :key="item" class="sidecontent-item">
          <ul>
            <li class="py-1 hover:text-sky-400 focus:text-violet-500">
              <NuxtLink :to="'/content/education/' + item" ><span>{{item}}</span></NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/content/education/' + item + '/test'" ><span class="text-red">TEST →</span></NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav> -->
    <transition>
      <div v-show="isShowText" class="acordionlist overflow-hidden">
        <UipartsAcordionList :s3list="itemlist"/>
      </div>
    </transition>


    <div class="flex justify-between">
        <h2 class="font-medium text-green-700 hover:text-green-400 text-xl m-1">sonota</h2>    
        <UipartsArrow size="1.2em" class="my-auto" class-name="arrow2" @menuopen="arrow2Accordion" @menuclose="arrow2Accordion"/>
    </div>
    <transition>
      <div v-show="isdj" class="acordionlist overflow-hidden">
        <UipartsAcordionList :s3list="itemlist"/>
      </div>
    </transition>
  </div>
</template>
<script setup>

  const isShowText = ref(false)
  const isdj = ref(false)
  
  const { data:s3list } = await $fetch('/api/awsapigateway/s3-studycontent/list')

  const itemarray = []
  for (const item of s3list.Items){
    itemarray.push(item.filename)
  }

  const itemlist =  Array.from(new Set(itemarray))

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