<script setup>
const tagClasses = "text-pink-800"
</script>

<template>
    <div class="rounded-lg   border border-white p-3       transition duration-500 transform hover:-translate-y-5"  >
        <div class="text-blue-600 font-normal text-2xl mb-1  ">
            <slot name="title" />
        </div>
        <div class=" font-normal mb-1 ">
            <div class="flex flex-row ">
                <div class="flex flex-col items-center mr-2 ">
                    <div :class="tagClasses"><></div>
                    <div class="bg-pink-800 w-0.5  flex-1 " style="width: 1px"></div>
                    <div :class="tagClasses"><></div>
                </div>
                <slot name="desc"/>
            </div>
        </div>
        <div class=" text-sm list-none content-around " >
            <slot name="list"/>
        </div>
    </div>
</template>

<style scoped>


.expertise-card:hover {
    transform: translateY(-5px);
}
</style>
