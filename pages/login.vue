<script setup>
import { email, password } from '@formkit/inputs';

const formInputEmail = ref('')
const formInputPassword = ref('')
const { login, setEmail, setPassword } = useAuth();

const loginFunction = () => {
  setEmail(formInputEmail)
  setPassword(formInputPassword)
  login().then(() => {
    const router = useRouter();
    router.push({ path: "/mypage" });
    console.log('route to')
  });
};

</script>
<template>
  <div>
    <button @click="loginFunction">Login</button>
    <div>
      <label for="inputEmail">Email >>
        <input type="text" v-model="formInputEmail" id="inputEmail">
      </label>
      <label for="inputPassword">Password >>
        <input type="text" v-model="formInputPassword" id="inputPassword">
      </label>
    </div>
  </div>
</template>