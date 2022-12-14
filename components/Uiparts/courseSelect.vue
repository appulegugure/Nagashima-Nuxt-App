<template>
  <div>
    <h1> コース設定</h1>
    <form method="post" action="">
      <label for="pet-select">Choose a pet:</label>

      <!-- コース名  -->
      <label for="course-title">コース名</label>
      <input type="text" name="title" id="course-title">

      <!-- コース説明 -->
      <label for="course-description">コース説明</label>
      <input type="text" name="description" id="course-description">

      <!-- コース > ジャンル名 -->
      <label for="course">ジャンル設定</label>
      <select name="course" id="course">
          <option value="">--Please choose an option--</option>
          <option v-for="sele in all_genre_data.data" :key="sele" :value="sele.ID">{{sele.name}}</option>
      </select>

      <!-- コースイメージ画像 -->
      <label for="">イメージ画像</label>
      <input type="file" name="" id="course_image" accept="image/*">

      <button type="submit" id="btn_course_submit" name="btn_course_submit">送信</button>
    </form>

    <p id="uploadImageArea"></p>
  </div>
</template>
<style>
.hidden{
  display: none;
}
</style>
<script setup>

const { data:all_genre_data, pending, error, refresh } = await useFetch('/api/formbackend/all_genre')

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

// クライアントサイド↓
onMounted(()=>{

  // submit element 取得
  const genre_image = document.getElementById("course_image");

  genre_image.addEventListener('change',async()=>{
    console.log('form change')
    const file = genre_image.files[0]
    const base64Text = await getBase64(file)
    document.querySelector('#uploadImageArea').innerHTML = `<img src="${base64Text}" width="100%" />`
  })

  const btn_genre_submit = document.getElementById("btn_course_submit");

  // submit element addEventListener 設定 
  btn_genre_submit.addEventListener('click', async(e)=> {
		
    // click時デフォルト動作停止
    e.preventDefault();

    const file = genre_image.files[0]
    const base64Text = await getBase64(file)

    // select form element取得
    const input_text_title = document.querySelector('input[name=title]')
    const input_text_description = document.querySelector('input[name=description]')
    const input_select_course = document.querySelector('select[name=course]');
    const input_base64text = base64Text
    
    // (5) フォームの入力値を送信
    const select_course_apiurl = 'http://34.210.165.213:8080/create_course'
    const test_apiurl = ''

    fetch(select_course_apiurl,{
			method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      // mode: 'no-cors',
      // json用bodyに変換
			body: JSON.stringify({
        'title': input_text_title.value,
        'descriotion': input_text_description.value,
        'course': input_select_course.value ,
        'image': input_base64text
      })

		})
		.then(() => {
      // console.log(input_select_genre.value)
      // フォームの内容削除
      input_select_course.value = '';
      input_text_title.value = '';
      input_text_description.value = '';
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