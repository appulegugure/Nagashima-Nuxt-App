<template>
  <div>
      <h1>Hemlcontent</h1>
      <iframe id="iframeid" :src=sssdata.file_path scrolling="no" frameborder="0" allowfullscreen="allowfullscreen" style="width:100%;"></iframe>
      <!-- <p>{{sssdata}}</p> -->
  </div>
</template>

<script setup>
// middleware setting
definePageMeta({
  middleware: 'basicauth',
})

console.log('indexhetml')

const route = useRoute()
const sssdata = await $fetch(`/${route.params.contentId}`, {
  baseURL:'/api/formbackend/content' 
})

console.log('BACKEND',sssdata)

onMounted(()=>{
    console.log('WINDOW',window)
    window.addEventListener('message', (e)=>{
        console.log('window listen secsess')
        console.log('e_origin', e.origin)
        console.log('e_data', e.data)
        document.getElementById('iframeid').height = e.data;

    }, false);
  })

</script>