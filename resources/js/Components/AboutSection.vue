<template>
    <section id="about">
        <div class="mx-auto flex max-w-page flex-col gap-14 px-6 py-[110px]">
            <div class="flex flex-col gap-5">
                <span class="lbl">À propos</span>
                <h2 class="disp text-[clamp(42px,6vw,84px)]">
                    <span data-reveal="0" class="block">Mon impact</span>
                    <span data-reveal="1" class="block">à travers <span class="text-grey">le code</span></span>
                </h2>
            </div>

            <div class="flex flex-wrap items-start gap-10">
                <div class="flex flex-[1_1_320px] justify-center">
                    <img
                        :src="photo"
                        alt="Moïse Mahma dans son bureau"
                        data-reveal="1"
                        class="block h-[360px] w-[300px] object-cover"
                        loading="lazy"
                    >
                </div>
                <div class="flex flex-[1_1_420px] flex-col gap-5">
                    <p data-reveal="0" class="m-0 text-sm font-bold uppercase leading-snug">
                        Salut, moi c'est {{ profile.fullName }}, développeur mobile Flutter basé à Abomey-Calavi.
                    </p>
                    <p data-reveal="1" class="m-0 text-muted">
                        Depuis 4 ans, je conçois, développe et maintiens des applications mobiles : billetterie, fintech, santé,
                        immobilier, e-commerce, covoiturage. J'intègre APIs REST, paiements, géolocalisation, notifications et
                        temps réel. Je complète avec le web (Vue.js, Nuxt, Next.js, Laravel) pour évoluer vers le full-stack,
                        sans oublier l'IoT, issu de ma formation en informatique industrielle.
                    </p>
                    <div class="flex flex-col gap-2.5">
                        <div
                            v-for="(stat, i) in stats"
                            :key="stat.label"
                            :data-reveal="i"
                            class="flex items-center gap-7 bg-surface px-6 py-[18px]"
                        >
                            <span class="disp min-w-[110px] text-[52px]">{{ stat.value }}</span>
                            <div>
                                <div class="text-xs font-bold uppercase"><span class="text-accent">✳</span> {{ stat.label }}</div>
                                <div class="text-sm text-muted">{{ stat.text }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import photo from '../Assets/photo.jpg';
import { profile, stats } from '../data/portfolio';
</script>
