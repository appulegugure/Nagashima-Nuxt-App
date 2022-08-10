<template>
  <div>
    <h1>りんたろう22歳誕生日まで</h1>
    <h2>{{count}}</h2>
    <h1>{{day}}:{{hour}}:{{min}}:{{second}}</h1>
  </div>
</template>
<script setup>
const count = ref('')
const day = ref('')
const hour = ref('')
const min = ref('')
const second = ref('')
let displayshow = false
const happybirthday = new Date('2023-08-11T00:00:00');
watchEffect(() => {day.value,hour.value,min.value,second.value})
setInterval(() => {
    let et = ((happybirthday.getTime() - new Date().getTime()))
    count.value = Math.abs(et)
    day.value =  (Math.abs(Math.trunc(et/(1000*60*60*24))) > 10)? Math.trunc(et/(1000*60*60*24)) : '0' + Math.trunc(et/(1000*60*60*24));
    hour.value = (Math.abs(Math.trunc(et/(1000*60*60))) > 10)? Math.trunc(et/(1000*60*60)%24) : '0' + Math.trunc(et/(1000*60*60)%24);
    min.value = (Math.abs(Math.trunc(et/(1000*60)%60)) > 10)? Math.trunc(et/(1000*60)%60) : '0' + Math.trunc(et/(1000*60)%60); 
    second.value = (Math.abs(Math.trunc(et/(1000)%60%60)) > 10)? Math.trunc(et/(1000)%60%60) : '0' + Math.trunc(et/(1000)%60%60);
  },100)
</script>