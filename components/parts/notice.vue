<script setup>
  const notice = ref(false)
</script>
<template>
  <div class="notice" v-if="notice">
    <p>Notice</p>
  </div>  
</template>
<style>
.notice{
  background: rgb(31, 132, 31);
  color: white;
  font-weight: 900;
  padding: 10px;
}
</style>