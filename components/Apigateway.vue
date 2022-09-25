<script setup>
  import { Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
  import { Navigation, Pagination, Scrollbar, A11y,Virtual } from 'swiper';

  import VPagination from "@hennge/vue3-pagination";

  import 'swiper/css/bundle' 
  // import "swiper/swiper-bundle.css";
  // import 'swiper/css/navigation';
  // import 'swiper/css/pagination';
  // import 'swiper/css/scrollbar';
  // import 'swiper/css/a11y'
  
  import "@hennge/vue3-pagination/dist/vue3-pagination.css";

  const page = ref('')
  const onSwiper = (swiper) => {
        console.log(swiper);
      };
  const onSlideChange = () => {
        console.log('slide change');
      };
  const updateHandler = (window) => {
    }

  const apiurl = 'https://7p6bvpmzy5.execute-api.us-west-2.amazonaws.com/dev/items/compony-introduction'
  const { data:s3object ,pending, error, refresh} = await useFetch(apiurl)
</script>
<template>
  <div class="content-wrap">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"  

    >
      <swiper-slide v-for="i,index in s3object.Items" :key="index" :virtualIndex="index" class="s3objects-item" :id="i">
        <div  class="objectswrap" :id="index">
          <div class="img-wrap">
            <img :src="i.contentinfo.urlprefix">
          </div>
          <p>URL:{{i.contentinfo.urlprefix}}</p>
          <p>BUCKET NAME:{{i.contentinfo.bucketname}}</p>
          <p>SIZE:{{i.contentinfo.objectseze}}</p>
          <p>OBJECT KEY:{{i.contentinfo.objectkey}}</p>
        </div>
      </swiper-slide>
    </swiper>
    <v-pagination
      v-model="page"
      :pages="s3object.Items.length"
      :range-size="3"
      active-color="#DCEDFF"
      @update:modelValue="updateHandler()"
    />
  </div>

</template>
<style scoped>
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
  width: 80%;
  height: auto;
  background: seagreen;
}
.img-wrap img{
  object-fit:contain;
  width: 100%;
}
*{
  box-sizing: border-box;
}
</style>