<template>
  <div>
    <h1 id="foo">Hellow Uipart test</h1>
    <p>form test1↓</p>
    <form method="post" enctype="multipart/form-data">
      <label for="ice">アップロードするファイルを選択してください</label>
      
      <input type="file" id="ice" multiple webkitdirectory />
      <input type="submit" value="送信">
    </form>
    <hr>
    <h1>↓下のフォーム使って</h1>
    <p>form test2↓</p>
    <form method="" action="" enctype="multipart/form-data">
      <!-- <input type="file" name="input_file" multiple webkitdirectory> -->
      <input type="file" name="files" multiple webkitdirectory>
      <input type="submit" id="btn_submit" name="btn_submit" value="送信">
    </form>
  </div>
</template>
<script setup>

onMounted(()=>{
  
  // Form test1

  // const fileInput = document.getElementById('ice'); // input要素
  // // changeイベントで呼び出す関数
  // const handleFileSelect = () => {
  //   const files = fileInput.files;
  //   for (let i = 0; i < files.length; i++) {
  //     // if (files[i].size > sizeLimit) {
  //     //   // ファイルサイズが制限以上
  //     //   alert('ファイルサイズは1MB以下にしてください'); // エラーメッセージを表示
  //     //   fileInput.value = ''; // inputの中身をリセット
  //     //   return; // この時点で処理を終了する
  //     // }
  //     console.log('fileName',files[i].name)
  //     console.log('fileSize',files[i].size)
  //     console.log('file',files[i].webkitRelativePath)
  //     console.log('file',files[i])

  //   }
  // }
  // fileInput.addEventListener('change', handleFileSelect);



  // Form test2
  const btn_submit = document.getElementById("btn_submit");

	// (2) FormDataオブジェクトの初期化
	const fd = new FormData();
  const fdjson = new FormData();
  var dirstrc = []

	btn_submit.addEventListener('click', (e)=> {
		e.preventDefault();

		// (3) ファイル選択のinput要素を取得
		const input_file = document.querySelector('input[name=files]');

		// (4) FormDataオブジェクトにファイルデータをセット

    Object.keys(input_file.files).forEach(file => {
      fd.append('files', input_file.files[file])
      dirstrc.push(input_file.files[file].webkitRelativePath)

    });

    fd.append('struct_info',dirstrc)

		// (5) フォームの入力値を送信
		fetch('/api/testfolder/contentpush', {
			method: 'POST',
      headers: {
        // 'Content-Type': 'multipart/form-data; boundary=----hogehoge' 
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
			body:fd
      
		})
		.then(response => response.json())
		.then(data => {
      console.log('happy')
      // json post

			// fetch('/api/testfolder/contentpush', {
      //   method: 'POST',
      //   headers: {
      //     // 'Content-Type': 'multipart/form-data; boundary=----hogehoge' 
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body:fdjson
        
      // })
		})
		.catch((error) => {
			console.error(error);
		});
	});
})

</script>