<script setup>
const { signIn, signOut ,token, createUser} = useAuth()
const email = ''
const password = ''
const isLogin = false
</script>
<template> 
 <div class="auth-page container">
  <div class="auth-container row">
   <form @submit.prevent="onSubmit">
    <input type="email" placeholder="email address" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button @click="createUser(email,password)" >{{ isLogin ? "Login" : "Singup" }}</button>
    <!-- <a class="switch-link" type="submit" @click="isLogin = !isLogin">Switch to {{ isLogin? "Signup" : "Login" }}</a> -->
    <!-- <button @click="signIn(email,password)"></button> -->
    <button @click="signOut()">signOut</button>
   </form>
   <p>token:{{token}}</p>
   <NuxtLink to="/auth/page1">PAGE1</NuxtLink>
   <NuxtLink to="/auth/page2">PAGE2</NuxtLink>
  </div>
 </div>
</template>