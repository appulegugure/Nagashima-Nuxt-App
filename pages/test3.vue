<template>
    <div>
        <p>{{data}}</p>
        <h1>TEST 3 PAGE</h1>
    </div>
</template>
<script setup>
const {api, data, Event} = await $fetch(`/${route.params.contentKey}`, {
    baseURL:'/api/testfolder/logintest' 
})
</script>