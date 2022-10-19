<template>
  <div :class="layoutName">
    <!-- <h1>Main Layout</h1> -->
    <header>
      <slot name="header" />
    </header>
    <main >
      <slot name="main" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup>
  const layoutName = 'main-layout'
</script>

<style lang="scss" scoped>
h1{
  text-align: center;
  font-weight: 900;
}
.main-layout{
  position: relative; 
  background: gray;
  // padding: 10px;
  width: 100%; 
  min-height: 100vh;
  // height: auto !important; 

  header{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }
  main{
    width: 100%;
  }
  footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}

</style>