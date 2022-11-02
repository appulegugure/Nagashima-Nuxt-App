<template>
  <div :class="compoName">
    
    <!-- desigun 1 -->
    <div class="flex bg-green-900">
        <h2 class="font-medium text-xl m-1">Content List</h2>    
        <UipartsArrow size="1.6em" class="my-auto" @menuopen="open" @menuclose="close"/>
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
    <div class="acordionlist overflow-hidden max-h-0">
      <UipartsAcordionList :s3list="itemlist"/>
    </div>
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

  // emit triger close function
  const open = () => {
    console.log('open')
  }

  // emit triger close function
  const close = () => {
    console.log('close')
  }

  onMounted(()=>{
        const arrowelem = document.querySelector(".acordionlist");
      
        // const divHeight = arrowelem.getBoundingClientRect().height;
        console.log('ss',arrowelem )
        arrowelem.addEventListener('click', function () {

            let arrowelemMaxHeight = arrowelem.style.maxHeight;
            console.log('MAX', arrowelemMaxHeight)
            
        });
    })

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