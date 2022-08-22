<script setup>
const { signIn, signOut ,token, createUser ,creemail} = useAuth()
</script>
<template>
  <div>
    <PartsNotice></PartsNotice>
    <h1>Index Layout</h1>
    <div>
      <p>User:<br>{{creemail}}</p>
      <p>Token:<br>{{token}}</p>
    </div>
    <div>
      <p @click="signOut">Sigun Out</p>
    </div>
    <slot></slot>
  </div>
</template>