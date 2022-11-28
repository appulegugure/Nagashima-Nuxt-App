<template>
  <div>
    <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
      <SplideSlide v-for="i,index in data.Items" :key="index" :virtualIndex="index" class="s3objects-item" :id="i">
        <div  class="objectswrap" :id="index">
          <div class="img-wra flex justify-center mb-10">
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

// middleware setting


const route = useRoute()
const {api, data, Event} = await $fetch(`/${route.params.contentKey}`, {
  baseURL:'/api/awsapigateway/s3-studycontent' 
})



</script>