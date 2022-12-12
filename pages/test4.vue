<template>
  <div>
    <h1>logintest</h1>
    <p>
      {{sssdataio}}
    </p>
    <h1>Token</h1>
    <p>{{mypageToken}}</p>
  </div>
</template>
<script setup>
const inputToken = ref('')

const { setToken, getToken } = useAuth()

const sssdataio = await $fetch(`/api/testfolder/logintest`)

console.log('FETCHDATA', sssdataio.data.token)

setToken(inputToken)

const mypageToken = getToken()

</script> 