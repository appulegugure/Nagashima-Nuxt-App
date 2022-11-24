<script setup>

const { loggedIn,loggedInUser,logout,cookie } = useAuth()

</script>
<template>
  <div>
    <div>INPUT dir</div>
    <FormKit
      type="file"
      label="Your files"
      help="This input starts with files already “attached”."
      multiple
    />
  </div>
</template>
