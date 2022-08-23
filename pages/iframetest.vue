<template>
  <div>
    <label for="text">
        S3 URL INPUT  
        <input type="text" id="text" v-model="iframesrc">
        iframe width
        <input type="text" id="text" v-model="width">
        iframe height
        <input type="text" id="text" v-model="height">
    </label>
    <div v-for="i in 31" :key="i">
      <iframe class="iframetest" frameborder="0" :src="iframesrc+'.00'+ i +'.jpeg'" :width="width" :height="height" ></iframe>
    </div>
    
    <!-- <iframe class="iframetest" frameborder="0" :src="iframesrc" :width="width" :height="height" ></iframe> -->
  </div>
</template>
<script setup>
  const iframesrc = ref('https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/%E4%BC%9A%E7%A4%BE%E8%AA%AC%E6%98%8E%EF%BC%8820220810%EF%BC%893')
  const width = ref('1000')
  const height = ref('600')
</script>
<style>
.iframetest{
  background: white;
}
</style>