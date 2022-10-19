<script setup>
const submitted = ref(false)
const route = useRoute()
// const { data, pending, error, refresh } = await useFetch(`/api/awsapigateway/conftest/${route.params.contentKey}`,{
//   method: 'get',
// })
const { data, pending, error, refresh } = await useFetch(`/api/awsapigateway/conftest/scheam-test/test`,{
  method: 'get',
})


const apitest = async(data)=>{
  await useFetch(`/api/awsapigateway/conftest/${route.params.contentKey}`, {
      method: 'put',
      body: data
  }).then(()=>{
    submitted.value = true
  })  
}
</script>

<template>
<div>
  <FormKit
    type="form"
    id="registration-example"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Register"
    @submit="apitest"
    :actions="false"
    #default="{ value }"
  >
  <FormKitSchema :schema="data.testy" />
  <FormKit
    type="checkbox"
    label="解答確認済"
    help="全て解答を終えてから送信して下さい。"
    name="confirmed"
    validation="accepted"
    validation-visibility="dirty"
  />
  <FormKit
    type="submit"
    label="Register"
  />
    <!-- debug -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
  <div v-if="submitted">
    <h2>Submission successful!</h2>
    <p>If you want to start over, please reload the page</p>
  </div>
</div>
</template>

<style>
p {
  font-size: 0.9em;
  color: #646464;
  line-height: 1.5;
}
h1 {
  margin-top: 0;
}
h2 {
  color: green;
}
hr {
  display: block;
  height: 1px;
  margin: 1.5em 0;
  border: 0;
  background-color: #e4e4e4;
}
.formkit-form {
  width: 420px;
  padding: 1.5em;
  border: 1px solid #e4e4e4;
  border-radius: 1em;
  margin: 0 auto 1em auto;
}
.hide {
  background: rgb(109, 109, 109);
  display: none;
}
#registration-example pre {
  margin-bottom: 10px;
}
@media (min-width: 400px) {
  .double {
    display: flex;
    justify-content: space-between;
  }

  .double > .formkit-outer {
    width: calc(50% - 0.5em);
  }
}
</style>