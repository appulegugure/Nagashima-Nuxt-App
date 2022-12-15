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
  background-color: rgba(29, 91, 249, 0.4);
  background-image: radial-gradient(circle closest-corner at 35% 61%, rgba(0, 0, 0, 0.47), rgba(31, 31, 31, 0.89)),url(../assets/img/back.png);
  background-position: left top, right bottom;
  // padding: 10px;
  width: 100%; 
  min-height: 100vh;
  // height: auto !important; 

  header{
    position: relative;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
  }
  main{
    width: 100%;
    min-height: 100vh;
  }
  footer{
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}

</style>