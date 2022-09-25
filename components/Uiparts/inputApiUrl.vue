<script setup>
  const inputurl = ref('')
  const ss = true
</script>
<template>
  <div>
    <label for="inputurl">
      INPUT:
      <input type="text" id="inputurl" v-model="inputurl">
    </label>
    <p>APIURL:{{inputurl}}</p>
    <NCard n="green-500">
      <!-- both of them are themed green -->
      <NRadio v-model="ss">Z</NRadio>
      <NCheckbox n="purple xl">i accept the terms & conditions</NCheckbox>
      <NButton>Submit</NButton>
    </NCard>
    <p>SS:{{ss}}</p>
  </div>
</template>