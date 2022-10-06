<script setup>
const error = useError()
const router = useRouter();
const routhing = () => {router.push({ path: "/" });}
</script>

<template>
  <div>
    <ul>
      <li>{{ error.statusCode }}</li>
      <li>{{ error.message }}</li>
    </ul>
    <v-btn
      variant="outlined"
      color="#FFFFFF"
      @click="routhing"
    >
      Go Home
    </v-btn>
  </div>
</template>