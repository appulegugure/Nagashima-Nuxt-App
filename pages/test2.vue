<script setup>
// const { data, pending, error, refresh } = await useFetch('/api/testfolder/login')
const { setToken } = useAuth();
const {api, data, Event} = await $fetch('/api/testfolder/logintest')
</script>
<template>
    <div>
        <button type="button" aria-expanded="false" aria-controls="section1">開く</button>
        <section id="section1" aria-hidden="true" class="dia">コンテンツ</section>
        <P class="text-white">code::<span class="text-blue-400 font-bold">{{data.code}}</span></P>
        <P class="text-white">expire::<span class="text-blue-400 font-bold">{{data.expire}}</span></P>
        <p class="text-white">token::<span class="text-blue-400 font-bold">{{data.token}}</span></p> 
        <p>COOKIE↓</p>
    </div>
</template>
<style>
.dia{
    background: sandybrown;
}

.dia {

}
</style>