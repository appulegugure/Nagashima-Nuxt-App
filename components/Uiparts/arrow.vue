<template>
  <div id="arrow">
    <Icon class="p-1" name="ep:arrow-down-bold" :size="size"/>
  </div>
</template>

<style  scoped>
  .arrow-animation-open {
    transform:rotate(90deg); 
    transition: all .3s ease-out
  }
  .arrow-animation-close {
    transform:rotate(0deg); 
    transition: all .3s ease-out
  }
</style>

<script setup>
    const props = defineProps({
        size: {
            type: String,
            default: ''
        },
    });

    const emit = defineEmits(
      ['menuopen','menuclose']
    );

    onMounted(()=>{
        const arrowelem = document.getElementById('arrow')

        var motionflag = 0   
        arrowelem.addEventListener('click', function () {

            if(motionflag === 0){

              arrowelem.classList.add("arrow-animation-open");
              arrowelem.classList.remove("arrow-animation-close")
              motionflag = 1
              emit('menuopen')

            }else if (motionflag === 1){

              arrowelem.classList.add("arrow-animation-close");
              arrowelem.classList.remove("arrow-animation-open");
              motionflag = 0
              emit('menuclose')

            }
        });
    })
</script>