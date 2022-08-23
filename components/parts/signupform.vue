<script setup>
const { signIn, signOut ,token, createUser} = useAuth()
const submitted = ref(false)
const submitHandler = async (data) => {
  await createUser(data.email,data.password).then(()=>{
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
    incomplete-message="Don't complete form"
  >
    <h1>Sign Up!</h1>
    <p>

    </p>
    <hr />
    <FormKit
      type="text"
      name="name"
      label="Your name"
      placeholder="Jane Doe"
      help="What do people call you?"
      validation="required"
      :validation-messages="{
        required: 'Your name is required.',
      }"
    />
    <FormKit
      type="text"
      name="email"
      label="Your email"
      prefix-icon="email"
      placeholder="jane@example.com"
      help="What email should we use?"
      validation="required|email"
      :validation-messages="{
        required: 'Your email is required.',
        email: 'Please enter a valid email address.'
      }"
    />
    <div class="double">
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required|length:6|matches:/[^a-zA-Z]/"
        :validation-messages="{
          required: 'Your password is required.',
          matches: 'Please include at least one symbol',
          length: 'Password must be greater than or equal to 6 characters'
        }"
        placeholder="Your password"
        help="Choose a password"
      />
      <FormKit
        type="password"
        name="password_confirm"
        label="Confirm password"
        placeholder="Confirm password"
        validation="required|confirm"
        help="Confirm your password"
        :validation-messages="{
          required: 'Your confirm password is required.',
          confirm: 'Confirm password does not match.'
        }"
      />
    </div>

    <FormKit
      type="submit"
      label="Signup"
    />
  </FormKit>
  <div v-if="submitted">
    <h2>Submission successful!</h2>
    <p>Token:{{token}}</p>
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