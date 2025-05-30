<script setup>
const props = defineProps({
    src:{
        type: String,
        required : true
    },
    alt:{
        type: String,
        required : false
    }
})
</script>

<template>

    <div class="rounded-lg shadow-2xl shadow-neutral-800  p-3">

        <img src="@/Assets/img2.svg"   class="bg-red-700 rounded-t-lg h-32 w-full " :alt="props.alt"/>
        <div class="text-white font-normal text-2xl mb-1 mt-1 drop-shadow-lg shadow-amber-100">
            <slot name="title" />
        </div>
        <div class="text-white text-lg font-light">
            <slot name="content"/>
        </div>
        <div class="h-3"></div>
    </div>
</template>

<style scoped>

</style>
