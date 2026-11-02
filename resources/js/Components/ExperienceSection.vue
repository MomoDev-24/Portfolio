<template>
    <section id="parcours" class="bg-inv text-inv-text">
        <div class="mx-auto flex max-w-page flex-wrap gap-x-20 gap-y-12 px-6 py-[110px]">
            <div class="flex flex-[1_1_300px] flex-col gap-5">
                <span class="lbl !bg-inv-line !text-inv-text">Parcours</span>
                <h2 class="disp text-[clamp(42px,5vw,72px)]">
                    <span data-reveal="0" class="block">Moïse®</span>
                    <span data-reveal="1" class="block text-inv-muted">expériences</span>
                </h2>
            </div>
            <div class="grid flex-[2_1_560px] grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-px bg-inv-line">
                <div
                    v-for="(exp, i) in experiences"
                    :key="exp.period"
                    :data-reveal="i % 2"
                    class="flex flex-col gap-2.5 bg-inv p-7"
                >
                    <span class="text-xs font-bold uppercase" :class="exp.current ? 'text-accent' : 'text-inv-muted'">{{ exp.period }}</span>
                    <h3 class="m-0 font-display text-xl font-bold uppercase">{{ exp.title }}</h3>
                    <span class="text-[13px] font-semibold">{{ exp.place }}</span>
                    <p class="m-0 text-sm text-inv-muted">{{ exp.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { experiences } from '../data/portfolio';
</script>
