<script setup>
  const color = useColor()
  const change = () => { color.value = 'red'}
</script>

<template>
  <div>
    <p>Current color: {{ color }}</p>
    <button @click="change">CHANGE COLOR</button>
  </div>
</template>