<template>
  <div>
    <h1>ジャンル設定</h1>
    <form method="post" action="">
      <label for="pet-select">Choose a pet:</label>

      <select name="genre" id="genre">

          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
      </select>

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
    const input_select_genre = document.querySelector('select[name=genre]');

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
			body: JSON.stringify({'name': input_select_genre.value })

		})
		.then(() => {
      // console.log(input_select_genre.value)
      // フォームの内容削除
      input_select_genre.value = ''
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