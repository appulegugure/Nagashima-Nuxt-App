<template>
  <div>
    <h1>Spkied</h1>
    <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
      <SplideSlide v-for="i,index in s3object.Items" :key="index" :virtualIndex="index" class="s3objects-item" :id="i">
        <div  class="objectswrap" :id="index">
          <div class="img-wrap">
            <!-- <img :src="i.contentinfo.urlprefix"> -->
            <p>{{i.contentinfo.urlprefix}}</p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
    <p>S3objecrt</p>
    <pre>
      {{s3object}}
    </pre>
    <h1>
      <span>URL:ITE>>{{url.item}}</span>
    </h1>
  </div>
</template>


<script setup>
  import '@splidejs/vue-splide/css';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';

  const url = defineProps({
    item: String
})
  // const { data:s3object ,pending, error, refresh} = await useLazyFetch(url.item)
  const { data:s3object ,pending, error, refresh} = await useAsyncData('object', () => $fetch(url.item))
</script>


<style lang="scss" scoped>
span{
  color: red;
  background: black;
}
.content-wrap{
  background: whitesmoke;
}
.s3objects-wrap{
  display:flex;
  overflow: auto;
  flex-flow: row nowrap;
  scroll-snap-type: x mandatory;
  width: 100%;
  /* background: salmon; */
}
.s3objects-item{
  /* margin: 0px 50px; */
  /* scroll-snap-align: center; */
  background: teal;
  width: 100%;
}
.img-wrap{
  padding: 0 0;
  width: 70%;
  height: auto;
  background: seagreen;
}
.img-wrap img{
  object-fit:contain;
  width: 100%;
}
</style>