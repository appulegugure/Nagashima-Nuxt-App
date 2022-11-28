<template>
  <div>
    <h1 id="foo">Hellow Uipart test</h1>
    <form method="post" enctype="multipart/form-data">
      <label for="ice">アップロードするファイルを選択してください</label>
      <input type="file" id="ice" name="upfile[]" webkitdirectory/>
      <input type="submit" value="送信">
    </form>
    <div class="result"></div>
  </div>
</template>
<script setup>
import { file } from '@babel/types';

onMounted(()=>{
  
  const fileInput = document.getElementById('ice'); // input要素
  // changeイベントで呼び出す関数
  const handleFileSelect = () => {
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
      // if (files[i].size > sizeLimit) {
      //   // ファイルサイズが制限以上
      //   alert('ファイルサイズは1MB以下にしてください'); // エラーメッセージを表示
      //   fileInput.value = ''; // inputの中身をリセット
      //   return; // この時点で処理を終了する
      // }
      console.log('fileName',files[i].name)
      console.log('fileSize',files[i].size)
      // console.log('fileIntro',files[i])

    }
  }
  fileInput.addEventListener('change', handleFileSelect);

})

</script>