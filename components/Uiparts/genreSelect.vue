<template>
  <div>
    <h1>ジャンル設定</h1>
    <form method="post" action="">
      <label for="genre">Genre title:</label>
      <input type="text" name="genre" id="genre">
      <label for="head">Color</label>
      <input type="color" id="color" name="color" value="#e66465">
      <button type="submit" id="btn_genre_submit" name="btn_genre_submit">送信</button>
    </form>
  </div>
</template>
<style>
.hidden{
  display: none;
}
</style>
<script setup>



// クライアントサイド↓
onMounted(()=>{

  // submit element 取得
  const btn_genre_submit = document.getElementById("btn_genre_submit");

  // submit element addEventListener 設定 
  btn_genre_submit.addEventListener('click', (e)=> {
		
    // click時デフォルト動作停止
    e.preventDefault();
    // btn_genre_submit.classList.add('hidden')
    // btn_genre_submit.disabled = true

    // select form element取得
    const input_text_genre = document.querySelector('input[name=genre]');
    const input_text_color = document.querySelector('input[name=color]');

    // if(input_select_genre.value === ''){
    //   console.log('return exec')
    //   return
    // }
    
    // (5) フォームの入力値を送信
    const select_genre_apiurl = 'http://34.210.165.213:8080/create_genre'

    fetch(select_genre_apiurl,{
			method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      // mode: 'no-cors',
      // json用bodyに変換
			body: JSON.stringify({
        'name': input_text_genre.value,
        'color': input_text_color.value
      })

		})
		.then(() => {
      // console.log(input_select_genre.value)
      // フォームの内容削除
      input_text_genre.value= ''
      input_text_color.value= ''
      // btn_genre_submit.classList.remove('hidden')
      console.log('SUCSSESS')
      // btn_genre_submit.disabled = false

		})
		.catch((error) => {
			console.error(error);

		});
  })
})
</script>