<template>
  <div>
    <h1>Edit</h1>
    <p>{{ $myPlugin() }}</p>
    <p>comodey:{{ comodey }}</p>
    <textarea id="default">Hello, World!</textarea>
    <div>
      <div id="editorjs"></div>
    </div>
  </div>
</template>
<script>
export default{
    data() {
        return {
            comodey: this.$myPlugin()
        };
    },
    mounted() {
        // const tomy = this.$tinyMong
        // console.log(tomy.area);
        const editor = this.$editor({
            holder: "editorjs",
            placeholder: "No content",
        });
    },
}
</script>