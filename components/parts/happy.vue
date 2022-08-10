<template>
  <div>
    <h1>りんたろう誕生日まで</h1>
    <h2>{{count}}</h2>
    <h1>{{day}}:{{hour}}:{{min}}:{{second}}</h1>
    <div v-if="count <= 0">happy birth day!!</div>
  </div>
</template>
<script setup>
const count = ref('')
const day = ref('')
const hour = ref('')
const min = ref('')
const second = ref('')
let displayshow = false
const happybirthday = new Date('2022-08-11T00:00:00');
watchEffect(() => {day.value,hour.value,min.value,second.value})
setInterval(() => {
    let et = ((happybirthday.getTime() - new Date().getTime()))
    count.value = et
    day.value =  (Math.trunc(et/(1000*60*60*24)) > 10)? Math.trunc(et/(1000*60*60*24)) : '0' + Math.trunc(et/(1000*60*60*24));
    hour.value = (Math.trunc(et/(1000*60*60)) > 10)? Math.trunc(et/(1000*60*60)) : '0' + Math.trunc(et/(1000*60*60));
    min.value = (Math.trunc(et/(1000*60)%60) > 10)? Math.trunc(et/(1000*60)%60) : '0' + Math.trunc(et/(1000*60)%60); 
    second.value = (Math.trunc(et/(1000)%60%60) > 10)? Math.trunc(et/(1000)%60%60) : '0' + Math.trunc(et/(1000)%60%60);
  },100)
</script>