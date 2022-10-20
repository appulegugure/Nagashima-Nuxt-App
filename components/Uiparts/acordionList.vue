<template>
<div>
    <div class="h-1 w-full mx-auto border-b my-5"></div>
    <div class="transition hover:bg-indigo-500">
        <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i class="fas fa-plus"></i>
            <h3 class="text-black">List test</h3>  
        </div>
        <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <!-- <p class="leading-6 font-light pl-9 text-justify">
            Our asked 
            </p> -->
            <ul class="flex">
              <li>
                <button class="rounded-full bg-indigo-600 text-white font-medium font-lg px-4 py-2 my-2">Learn more</button>
              </li>
              <li>
                <button class="rounded-full bg-indigo-600 text-white font-medium font-lg px-4 py-2 my-2">Try test</button>
              </li>
            </ul>
        </div>
    </div>
</div>
</template>
<style>
    .accordion-content {
    transition: max-height 0.3s ease-out, padding 0.3s ease;
    }
</style>
<script setup>

  onMounted(()=>{
    const accordionHeader = document.querySelectorAll(".accordion-header");
    accordionHeader.forEach((header) => {
    header.addEventListener("click", function () {
        const accordionContent = header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
        accordionContent?.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
        header.querySelector(".fas").classList.remove("fa-plus");
        header.querySelector(".fas").classList.add("fa-minus");
        header.parentElement.classList.add("bg-indigo-350");
        } else {
        accordionContent.style.maxHeight = `0px`;
        header.querySelector(".fas").classList.add("fa-plus");
        header.querySelector(".fas").classList.remove("fa-minus");
        header.parentElement.classList.remove("bg-indigo-500");
        }
    });
    });
  })
</script>
