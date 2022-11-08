<template>
  <div>
    <h1>PAGES INDEX PAGE</h1>
    <iframe sandbox="allow-modals" width="100%" height="auto" style="display: inline-block;" id="iframe"  src='https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB/%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB.html' frameborder="no" ></iframe>
    <!-- <object width="100%" height="auto" style="display: inline-block;" data="https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB/%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB.html" type=""></object> -->
  </div>

</template>
<script setup>
onMounted(()=>{
  const sub = document.getElementById("iframe");
  console.log('SUB',sub.contentWindow.document.body.scrollHeight)
  sub.style.height = sub.contentWindow.document.body.scrollHeight
})

</script>