<template>
  <div>
    <p>nowpagequery::{{nowpagequery}}</p>
    <p>Key::{{$route.params.contentKey}}</p>
    <p>apiurl::{{apiurl}}</p>
    <p>s3objectkey::{{s3objectKey}}</p>
    <p>GETAPI::{{s3ObjectsGetApi}}</p>
    <p>URL PARAM::{{apiurl}}</p>
    <!-- <Splide :item="apiurl" /> -->
    <!-- <p>DATE</p>
    <div>apiurl::{{apiurl}}</div>
    <div>
      {{ pending ? 'Loading' : data }}
    </div> -->
    <pre>
      {{s3object}}
    </pre>
    <button @click="refresh">refresh</button>
  </div>
</template>
<script setup>
// debug hensnuu //
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
const {s3ObjectsGetApi } = apiGet()
const route = useRoute()
// const s3objectKey = route.params.contentKey
// const apiurl = computed(()=>{return s3ObjectsGetApi + '/' + s3objectKey}) 
const { data, pending} = await useFetch(`https://7p6bvpmzy5.execute-api.us-west-2.amazonaws.com/dev/items/${route.params.contentKey}`)
//`https://7p6bvpmzy5.execute-api.us-west-2.amazonaws.com/dev/items/compony-introduction`
// const { pending, data:s3object } = useLazyAsyncData('s3content', () => $fetch(`https://7p6bvpmzy5.execute-api.us-west-2.amazonaws.com/dev/items/${route.params.contentKey}`))
// const { pending, data:s3object } = useFetch(apiurl,{key:'s3content'})
// // route.params 更新時 リフレッシュを掛ける
const refresh = () => refreshNuxtData('s3content')
// watch(route.params.contentKey,refresh())
</script>