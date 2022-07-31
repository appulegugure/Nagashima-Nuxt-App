<script setup>
const data = {
  mogo:'hhh',
  paa:'bbbb'
}
const api_url = 'https://8azfli2f07.execute-api.us-east-1.amazonaws.com/v7/node-test-buket-ver1/ABE'

fetch(api_url, {
  method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  // credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'multipart/form-data'
      // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify(data),
})
.then((res) => console.log('res',res.status))
.catch((err) => console.log('err',err))
</script>
<template>
  <div>
    <h1>Index page</h1>
    <compotest></compotest>
  </div>
</template>