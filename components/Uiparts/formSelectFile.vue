<template>
  <div>
    <form 
      novalidate
      @submit.prevent="postS3"
    >
      <input
          v-model="Item"
          type="text"
          placeholder="Add an item!"
        >
    </form>
    <button type="submit" @click="postS3">Submit</button>
  </div>
</template>
<script setup>
  const Item = ref('')
  const postS3 = async() => {
    return await $fetch('/api/testfolder/returnpromise', { method: 'POST', body: { some: 'json' } })
  }
</script>