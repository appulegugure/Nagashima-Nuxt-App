<template>
  <div>
    <p>Key::{{$route.params.contentKey}}</p>
    <p>apiurl::{{apiurl}}</p>
    <p>s3objectkey::{{s3objectKey}}</p>
    <p>GETAPI::{{s3ObjectsGetApi}}</p>
    <Splide :item="apiurl" />
    <p>DATE</p>
    <p>{{data}}</p>
  </div>
</template>
<script setup>
const {s3ObjectsGetApi } = apiGet()
const route = useRoute()
const s3objectKey = route.params.contentKey
const apiurl = s3ObjectsGetApi + '/' + s3objectKey
const { data, pending, error, refresh } = await useFetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${route.params.contentKey}`)
</script>