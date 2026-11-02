<template>
    <div class="flex items-center overflow-hidden border-b border-line bg-surface">
        <span class="relative z-[1] shrink-0 border-r border-line bg-surface px-6 py-5 text-xs font-bold uppercase leading-tight">
            Ma stack<br>au quotidien
        </span>
        <div class="flex-1 overflow-hidden">
            <!-- La liste est doublée pour que la boucle soit continue -->
            <div class="marquee gap-14 py-5 font-display text-[22px] font-bold text-grey" aria-label="Technologies utilisées">
                <template v-for="pass in 2" :key="pass">
                    <template v-for="tech in stack" :key="`${pass}-${tech}`">
                        <span :aria-hidden="pass === 2">{{ tech }}</span>
                        <span aria-hidden="true">✳</span>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { stack } from '../data/portfolio';
</script>
