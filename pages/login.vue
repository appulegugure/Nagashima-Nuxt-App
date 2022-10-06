<script setup>
const login = () => {
  const { login } = useAuth();
  login().then(() => {
    const router = useRouter();
    router.push({ path: "/mypage" });
    console.log('route to')
  });
};

const logout = () => {
  const { logout } = useAuth();
  logout().then(() => {
    const router = useRouter();
    router.replace("/");
  });
};
</script>
<template>
  <div>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
  </div>
</template>