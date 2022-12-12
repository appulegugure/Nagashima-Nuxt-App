<template>
  <div>
    <h1> コース設定</h1>
    <form method="post" action="">
      <label for="pet-select">Choose a pet:</label>
      
      <select name="course" id="course">
          <option value="">--Please choose an option--</option>
          <option v-for="sele in selectdata.key" :key="sele" :value="sele.id">{{sele.title}}</option>
      </select>

      <button type="submit" id="btn_course_submit" name="btn_course_submit">送信</button>
    </form>
  </div>
</template>
<style>
.hidden{
  display: none;
}
</style>
<script setup>
const selectdata = {
  key: [
    {
      title: 'sasada',
      id: '0000',
    },
    {
      title: 'sasama',
      id: '0001',
    },
    {
      title: 'sasami',
      id: '0002',
    }
  ]
}


// クライアントサイド↓
onMounted(()=>{

  // submit element 取得
  const btn_genre_submit = document.getElementById("btn_course_submit");

  // submit element addEventListener 設定 
  btn_genre_submit.addEventListener('click', (e)=> {
		
    // click時デフォルト動作停止
    e.preventDefault();

    // select form element取得
    const input_select_course = document.querySelector('select[name=course]');
    
    // (5) フォームの入力値を送信
    const select_course_apiurl = 'http://34.210.165.213:8080/create_genre'

    fetch(select_course_apiurl,{
			method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      // mode: 'no-cors',
      // json用bodyに変換
			body: JSON.stringify({'name': input_select_course.value })

		})
		.then(() => {
      // console.log(input_select_genre.value)
      // フォームの内容削除
      input_select_course.value = ''
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