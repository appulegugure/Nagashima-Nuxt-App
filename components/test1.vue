<script setup>
const { counter, inc, dec } = useSharedCounter()
onMounted(() => { console.log(counter.value) })
</script>

<template>
  <div>
    カウンター: {{ counter }}
    <button @click="inc"> + </button>
    <button @click="dec"> - </button>
  </div>
</template>