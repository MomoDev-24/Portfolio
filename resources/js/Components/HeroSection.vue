<template>
    <section id="hero" class="grid-lines relative flex min-h-[820px] flex-col overflow-hidden bg-hero text-white">
        <!-- Nom géant en fond, glisse au défilement -->
        <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 top-[70px] text-center" data-parallax-x>
            <span data-hero class="disp block whitespace-nowrap text-[clamp(120px,21vw,330px)] text-white/[.14]">Mahma</span>
        </div>

        <!-- Portrait détouré -->
        <div class="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center" data-parallax-y>
            <img
                :src="portrait"
                alt="Portrait de Moïse Mahma"
                width="1100"
                height="1059"
                data-hero-portrait
                class="block h-auto w-[min(520px,92%)] lg:w-[min(720px,100%)]"
            >
        </div>

        <NavigationBar class="relative z-10" @open-menu="$emit('open-menu')" />

        <div class="relative z-10 mx-auto flex w-full max-w-page flex-1 flex-col justify-between gap-10 px-6 pb-10 pt-12">
            <div class="flex flex-wrap items-start justify-between gap-6">
                <p data-hero class="m-0 max-w-[300px] text-[13px] font-bold uppercase leading-snug tracking-[.02em] text-hero-ink">
                    Je conçois des applications mobiles et web simples, rapides et utiles — de l'idée à la mise en ligne.
                </p>
                <a
                    :href="`#${heroProject.id}`"
                    data-hero
                    class="block w-[170px] bg-white p-2 text-[#111] shadow-[0_10px_30px_rgba(0,0,0,.18)] hover:text-[#111]"
                    :aria-label="`Voir le projet ${heroProject.name}`"
                    @click.prevent="$emit('open-project', heroProject.id)"
                >
                    <span class="flex h-[150px] items-center justify-center bg-[#1E1E1E] p-2">
                        <img :src="heroProject.image" alt="" class="max-h-full max-w-full object-contain">
                    </span>
                    <span class="flex justify-between px-0.5 pt-2 text-[11px]">
                        <span><span class="text-[#E04A1F]">●</span> {{ heroProject.name }}</span>
                        <span>/{{ heroProject.cat }}</span>
                    </span>
                </a>
            </div>

            <div class="flex flex-wrap items-end justify-between gap-6">
                <div class="flex flex-col gap-1.5">
                    <span data-hero class="text-[13px] font-bold text-hero-ink">©{{ year }} — Développeur mobile Flutter &amp; web</span>
                    <h1 data-hero class="disp text-[clamp(76px,13vw,190px)] text-white">{{ profile.firstName }}</h1>
                </div>
                <a href="#contact" data-hero class="flex w-[260px] items-center gap-3 bg-[#111] p-2.5 text-white hover:text-white">
                    <img :src="photo" alt="" class="h-[52px] w-[52px] object-cover">
                    <span class="flex flex-1 flex-col text-xs leading-snug">
                        <span class="text-[#A6A6A1]">Discutons</span>
                        <strong class="text-sm">{{ profile.shortName }}</strong>
                        <span class="text-[#A6A6A1]">Flutter · Vue · Next · Laravel</span>
                    </span>
                    <span class="inline-flex h-8 w-8 items-center justify-center bg-white text-[#111]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import NavigationBar from './NavigationBar.vue';
import portrait from '../Assets/portrait.webp';
import photo from '../Assets/photo.jpg';
import { profile, heroProject } from '../data/portfolio';

defineEmits(['open-menu', 'open-project']);

const year = new Date().getFullYear();
</script>
