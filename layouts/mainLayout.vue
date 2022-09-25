<template>
  <div :class="layoutName">
    <h1>Main Layout</h1>
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
  width: 100%; 
  // height: auto !important; 
  height: 100%;
  min-height: 100%;
}
header{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
}
main{

}
footer{
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>