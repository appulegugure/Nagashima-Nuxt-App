<script setup>
const { signIn, signOut ,token, createUser} = useAuth()
const { registerName } = Dbauth()
definePageMeta({
  middleware: ["auth"]
})
const email = ''
const password = ''
const isLogin = true
const email2 = 'nymarl@gmail.com'
const password2 ='Cxce7645' 
</script>
<template> 
 <div class="auth-page container">
  <div class="auth-container row">
   <form @submit.prevent="onSubmit">
    <input type="email" placeholder="email address" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button @click="signIn(email,password)" >{{ isLogin ? "Login" : "Singup" }}</button>
    <!-- <a class="switch-link" type="submit" @click="isLogin = !isLogin">Switch to {{ isLogin? "Signup" : "Login" }}</a> -->
    <!-- <button @click="signIn(email,password)"></button> -->
    <button @click="signOut()">signOut</button>
   </form>
   <p>token:{{token}}</p>
   <NuxtLink to="/editpage">EDITPAGE-PAGE</NuxtLink>
  
  </div>
 </div>
</template>