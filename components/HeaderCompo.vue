<template>
  <div class="header-wrap">
    <h2>HEADER</h2>
    <h2>login_State::{{loggedIn}}</h2>
    <h2>login_User::{{loggedInUser}}</h2>
    <h2>cookie::{{cookie}}</h2>
    <NuxtLink to="/mypage">My Page</NuxtLink> 
    <div v-if="loggedIn">
      <NuxtLink @click="logout" to="/">LogOut</NuxtLink>
    </div>
    <div v-else>
      <NuxtLink to="login">LogIn</nuxtLink>
    </div>
  </div>
</template>

<script setup>
  const { loggedIn,loggedInUser,logout,cookie } = useAuth()
</script>

<style lang="scss" scoped>
  h2{
    font-weight: 100;
  }
  .header-wrap{
    background: steelblue;
  }
</style>