<template>
  <div>
      <div id="editorjs"></div>
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
      async output(){
        return this.editrois.save().then((outputData) => {
          console.log('Article data: ', outputData)
          this.$emit("bodydata",outputData);
          return outputData
        }).catch((error) => {
          console.log('Saving failed: ', error)
        });
      },
    }
}
</script>