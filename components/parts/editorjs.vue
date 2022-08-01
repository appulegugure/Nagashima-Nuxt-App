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
            editrois:'',
            comodey: this.$myPlugin()
        };
    },
    mounted() {
        // const tomy = this.$tinyMong
        // console.log(tomy.area);
        this.editrois = this.$editor({
            holder: "editorjs",
            placeholder: "No content",
        });
    },
    methods:{
      output(){
        this.editrois.save().then((outputData) => {
          console.log('Article data: ', outputData)
          this.$emit("bodydata",outputData);
        }).catch((error) => {
          console.log('Saving failed: ', error)
        });
      },
    }
}
</script>