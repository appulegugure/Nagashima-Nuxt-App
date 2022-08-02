<template>
  <div id="app">

    <div class="post-title">
      <label for="title">
        <p class="input-title">Title:</p>
        <input v-model="title" type="text" src="" alt="" id="title">
      </label>
    </div>

    <div class="post-categories">
      <label for="category">
        <p class="input-title">Category:</p>
        <input v-model="categories" type="text" src="" alt="" id="category">
      </label>
    </div>

    <div class="post-body">
      <label for="body">
        <p class="input-title">Body:</p>
        <input v-model="body" type="text" src="" alt="" id="body">
      </label>
    </div>

    <div class="post-img">
      <label for="post-img">
        <p class="input-title">Image:</p>
        <PartsInputimg @outputimg="img=$event"></PartsInputimg>
      </label>
    </div>

    <div class="post-body">
      <label for="content">
        <p class="input-title">Content:</p>
        <PartsEditorjs @bodydata="body=$event" ref="child"></PartsEditorjs>
      </label>
    </div>

    <button @click="postrin">POSTRIN</button>

    <button class="main-button" @click="chikdfire">チルドファイヤー</button>
    
  </div>
</template>
<script>
import { conditionalExpression } from '@babel/types';
import Inputimg from './inputimg.vue';

export default {
    name: "app",
    data() {
        return {
            picture: "",
            title: "",
            body: "",
            categories: "",
            img: "",
            body: ""
        };
    },
    methods: {
        chikdfire() {
            this.$refs.child.output();
        },
        postrin() {
            console.log(this.img);
            this.$refs.child.output();
            console.log("Bodyの中身", this.body);
            const sendData = {
                title: this.title,
                // blocks:'\"' + `${JSON.stringify(this.body)}`+'\"',
                blocks: `${JSON.stringify(this.body)}`,
                body: "atode",
                img: this.img,
                categories: this.categories
            };
            console.log("pyo", sendData.blocks);
            console.log("send", sendData);
            this.postData("http://52.88.36.114:8080/create", sendData)
                .then(data => {
                console.log("send sucsec", data);
                this.$router.push("success");
            }).catch(err => {
                console.log("Error", err);
                this.$router.push("failed");
            });
        },
        async postData(url = "", data = {}) {
            // 既定のオプションには * が付いています
            const response = await fetch(url, {
                method: "POST",
                mode: "no-cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致させる必要があります
            }).then(respon => {
                console.log("resres", respon.status);
            }).catch(err => {
                console.log("eerrr", err);
            });
            return response; // JSON のレスポンスをネイティブの JavaScript オブジェクトに解釈
        }
    },
    components: { Inputimg }
}
</script>
<style scoped>
  .input-title{
    padding: 5px;
    font-weight: 900;
    font-size: .5em;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  }
  .child-fire{
    
  }
</style>