<template>
    <!-- ↓v-for -->
    <div>
        <div v-for="item in s3list" :key="item">
            <NuxtLink :to="'/content/education/' + item" class="text-slate-900 group-hover:text-white text-sm font-semibold">
                <div class="group transition mx-2 my-1 border-l-2 border-indigo-30 hover:border-indigo-500 hover:bg-indigo-300">
                <!-- header -->
                    <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-0">
                        <i class="fas fa-plus"></i>
                        <!-- <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">{{ item }}</h3> -->
                    </div>
                    <p class="text-stone-700 pl-2 group-hover:text-white text-sm font-normal">{{item}}</p>

                <!-- <div class="accordion-content px-5 py-0 overflow-hidden max-h-0">
                    <ul class="flex">
                        <li>
                            <NuxtLink to="/" class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn</NuxtLink>
                    
                        </li>
                        <li>
                            <NuxtLink to="/" class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Test</NuxtLink>
                            
                        </li>
                    </ul>
            
                </div> -->

                </div>
            </NuxtLink>
        </div> 
    </div>
</template>
<style>
    .accordion-content {
    transition: max-height 0.3s ease-out, padding 0.3s ease;
    }
</style>
<script setup>
    /* プロップス参考 https://b1san-blog.com/post/vue/vue-3-composition-api/ */ 
    const props = defineProps({
        s3list: {
            type: Object,
            default: ''
        },
    });

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
