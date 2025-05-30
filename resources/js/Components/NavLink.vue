<script setup>
import {computed, onMounted} from 'vue';
import {Link, usePage} from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: false,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'inline-flex items-center px-1 pt-1  border-indigo-400 text-lg text-blue-700    font-medium leading-5 text-white-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-lg font-medium   leading-5 text-white-500 hover:text-blue-700 hover:font-bold focus:outline-none focus:text-gray-700 focus:font-bold transition duration-150 ease-in-out',
);

</script>

<template>
    <Link :href="href"
          :class="classes" >
        <div class="flex flex-row" v-if="props.active">
            <div class="text-amber-400"><</div>
             <slot/>
            <div class="text-amber-400">/></div>
        </div>
        <div v-else>
            <slot/>
        </div>
    </Link>
</template>
