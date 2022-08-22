<script setup>
const { signIn, signOut ,token, createUser} = useAuth()
const submitted = ref(false)
const submitHandler = async (data) => {
  await signIn(data.email,data.password).then(()=>{
    navigateTo('/')
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
    @submit="submitHandler"
    :actions="false"
  >
    <h1>Sign In!</h1>
    <p>

    </p>
    <hr />
    <FormKit
      type="text"
      name="email"
      label="Your email"
      prefix-icon="email"
      placeholder="jane@example.com"
      help="What email should we use?"
      validation="required|email"
    />
    <div class="double">
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required|length:6|matches:/[^a-zA-Z]/"
        :validation-messages="{
          matches: 'Please include at least one symbol',
        }"
        placeholder="Your password"
        help="Choose a password"
      />
    </div>

    <FormKit
      type="submit"
      label="Signin"
    />
  </FormKit>
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