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
    <iframe :src="iframesrc" :width="width" :height="height" ></iframe>
  </div>
</template>
<script setup>
  const iframesrc = ref('')
  const width = ref('')
  const height = ref('')
</script>