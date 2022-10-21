<template>
    <!-- ↓v-for -->
    <div>
        <div class="transition hover:bg-indigo-50">
            <!-- header -->
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                <i class="fas fa-plus"></i>
                <h3>What is term?</h3>
            </div>
            <!-- Content -->
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                <ul class="flex">
                    <li>
                        <NuxtLink to="'/" class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn</NuxtLink>
                        <!-- <NuxtLink :to="'/content/education/' + item" ><span>{{item}}</span></NuxtLink> -->
                    </li>
                    <li>
                        <NuxtLink to="'/" class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Test</NuxtLink>
                        <!-- <NuxtLink :to="'/content/education/' + item" ><span>{{item}}</span></NuxtLink> -->
                    </li>
                </ul>
                <!-- <button class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button> -->
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
        accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
        header.querySelector(".fas").classList.remove("fa-plus");
        header.querySelector(".fas").classList.add("fa-minus");
        header.parentElement.classList.add("bg-indigo-50");
        } else {
        accordionContent.style.maxHeight = `0px`;
        header.querySelector(".fas").classList.add("fa-plus");
        header.querySelector(".fas").classList.remove("fa-minus");
        header.parentElement.classList.remove("bg-indigo-50");
        }
    });
    });
  })
</script>
