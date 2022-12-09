<template>
  <div>
    <hr>
    <h1>↓下のフォーム使って</h1>
    <p>form test2↓</p>
    <form method="post" action="" enctype="multipart/form-data">
      <input type="text" name="title"/>
      <input type="text" name="description">
      <input type="text" name="junle">
      <input type="file" name="files" multiple webkitdirectory>
      <input type="submit" id="btn_submit" name="btn_submit" value="送信">
    </form>
  </div>
</template>
<script setup>

onMounted(()=>{

  // Form test2
  const btn_submit = document.getElementById("btn_submit");

	// (2) FormDataオブジェクトの初期化
	const fd = new FormData();
  const fdjson = new FormData();
  let dirstrc = []
  let contystrc = []


	btn_submit.addEventListener('click', (e)=> {
		e.preventDefault();

		// (3) ファイル選択のinput要素を取得
		const input_file = document.querySelector('input[name=files]');

		// (4) FormDataオブジェクトにファイルデータをセット

    console.log('input file', input_file)
    Object.keys(input_file.files).forEach(file => {
      console.log(`${input_file.files[file].name}`,input_file.files[file].type)

      if(input_file.files[file].name.endsWith('.DS_Store')){
        return;

      }
      
      fd.append('files', input_file.files[file])
      dirstrc.push(input_file.files[file].webkitRelativePath)
      contystrc.push(input_file.files[file].type)

    });

    fd.append('struct_info',dirstrc)
    fd.append('content_type_info',contystrc)


		// (5) フォームの入力値を送信
		// fetch('/api/testfolder/contentpush', {
    fetch('http://34.210.165.213:8080/post',{
			method: 'POST',
      headers: {
        // header input

      },
			body:fd

		})
		.then(response => response.json())
		.then(data => {

      // フォームの内容削除
      input_file.value = ''
		})
		.catch((error) => {
			console.error(error);
		});
	});
})

</script>