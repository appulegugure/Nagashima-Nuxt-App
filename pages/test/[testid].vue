<template>
  <div>
    <!-- <p>Date↓</p>
    <p>api::{{api}}</p>
    <p>data::{{data}}</p>
    <p>event::{{Event}}</p> -->
    <!-- <button @click="refresh">RREFRESH</button> -->
    <!-- <h1>Spkied</h1> -->
    <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
      <SplideSlide v-for="i,index in data.Items" :key="index" :virtualIndex="index" class="s3objects-item" :id="i">
        <div  class="objectswrap" :id="index">
          <div class="img-wrap">
            <img :src="i.contentinfo.urlprefix">
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
  
</template>

<script setup>
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';


const route = useRoute()
const {api, data, Event} = await $fetch(`/${route.params.testid}`, {
  baseURL:'/api/awsapigateway/s3-studycontent' 
})

// const refresh = () => refresh()
// route.params 更新時 リフレッシュを掛ける
// watch(route.params.testid,refresh())
</script>