<template>
    <div>
        <h1 class="nagashima-color-blue">COLOR BLUE</h1>
        <h1 class="nagashima-color-white">COLOR WHITE</h1>
        <iframe width="100%" height="1000" id="iframe"  :src="data" frameborder="no" ></iframe>
        <h1>PAGES INDEX PAGE</h1>
        <iframe sandbox="allow-modals" width="100%" height="auto" style="display: inline-block;" id="iframe"  src='https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB/%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB.html' frameborder="no" ></iframe>
    </div>
</template>
<script setup>
const data = 'https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB/%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB.html'
onMounted(()=>{
    // iframe要素を取得.
    var iframe = document.getElementById('iframe');
    console.log('IFRAME',iframe)
    // iframe内のwindow要素にアクセスし、
    // コンテンツが読み終わった際に呼び出されるイベントをリッスンする.
    iframe.contentWindow.addEventListener('DOMContentLoaded', function () {

    // iframe内のbodyの高さを取得する.
    var height = iframe.contentDocument.body.clientHeight;
    console.log('iframe.body.height =', height)

    // その高さを、iframeタグ自体に設定する.
    iframe.style.height = height + 'px';
    });
})
</script>