<template>
    <section id="hero" class="grid-lines relative flex min-h-[640px] flex-col overflow-hidden bg-hero text-white sm:min-h-[820px]">
        <!-- Nom géant en fond, glisse au défilement -->
        <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 top-[210px] text-center sm:top-[70px]" data-parallax-x>
            <span data-hero class="disp block whitespace-nowrap text-[clamp(72px,23vw,330px)] text-white/[.14]">Mahma</span>
        </div>

        <!-- Portrait détouré -->
        <div class="pointer-events-none absolute inset-x-0 bottom-0 flex justify-end sm:justify-center" data-parallax-y>
            <img
                :src="portrait"
                :alt="t('hero.portraitAlt')"
                width="1100"
                height="1059"
                data-hero-portrait
                class="block h-auto w-[min(360px,85%)] sm:w-[min(520px,92%)] lg:w-[min(720px,100%)]"
            >
        </div>

        <!-- Assombrit le bas du hero sur mobile pour garder le prénom lisible sur la photo -->
        <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/45 to-transparent sm:hidden" />

        <NavigationBar class="relative z-10" @open-menu="$emit('open-menu')" />

        <div class="relative z-10 mx-auto flex w-full max-w-page flex-1 flex-col justify-between gap-8 px-6 pb-8 pt-8 sm:gap-10 sm:pb-10 sm:pt-12">
            <!-- Nom en premier dans le code (lecteurs d'écran, référencement), affiché en bas grâce à `order` -->
            <div class="order-2 flex flex-wrap items-end justify-between gap-6">
                <div class="flex flex-col gap-1.5">
                    <span data-hero aria-hidden="true" class="hidden text-[13px] font-bold text-hero-ink sm:inline">©{{ year }} — {{ t('hero.role') }}</span>
                    <h1 data-hero class="disp text-[clamp(64px,13vw,190px)] text-white [text-shadow:0_2px_24px_rgba(0,0,0,.25)]">
                        {{ profile.firstName }}<span class="sr-only"> Mahma — {{ t('hero.role') }}</span>
                    </h1>
                </div>
                <a href="#contact" data-hero class="hidden w-[260px] items-center gap-3 bg-[#111] p-2.5 text-white hover:text-white sm:flex">
                    <img :src="photo" alt="" class="h-[52px] w-[52px] object-cover">
                    <span class="flex flex-1 flex-col text-xs leading-snug">
                        <span class="text-[#A6A6A1]">{{ t('hero.talk') }}</span>
                        <strong class="text-sm">{{ profile.shortName }}</strong>
                        <span class="text-[#A6A6A1]">Flutter · Vue · Next · Laravel</span>
                    </span>
                    <span class="inline-flex h-8 w-8 items-center justify-center bg-white text-[#111]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
                    </span>
                </a>
            </div>

            <div class="order-1 flex flex-wrap items-start justify-between gap-6">
                <div class="flex flex-col gap-2">
                    <span data-hero aria-hidden="true" class="text-[13px] font-bold text-hero-ink sm:hidden">©{{ year }} — {{ t('hero.role') }}</span>
                    <p data-hero class="m-0 max-w-[300px] text-[13px] font-bold uppercase leading-snug tracking-[.02em] text-hero-ink">
                        {{ t('hero.tagline') }}
                    </p>
                </div>
                <a
                    :href="`#${heroProject.id}`"
                    data-hero
                    class="hidden w-[170px] bg-white p-2 sm:block text-[#111] shadow-[0_10px_30px_rgba(0,0,0,.18)] hover:text-[#111]"
                    :aria-label="t('hero.viewProject', { name: tr(heroProject.name) })"
                    @click.prevent="$emit('open-project', heroProject.id)"
                >
                    <span class="flex h-[150px] items-center justify-center bg-[#1E1E1E] p-2">
                        <img :src="heroProject.image" alt="" class="max-h-full max-w-full object-contain">
                    </span>
                    <span class="flex justify-between px-0.5 pt-2 text-[11px]">
                        <span><span class="text-[#E04A1F]">●</span> {{ tr(heroProject.name) }}</span>
                        <span>/{{ tr(heroProject.cat) }}</span>
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
import { useI18n } from '../Composables/useI18n';

defineEmits(['open-menu', 'open-project']);

const { t, tr } = useI18n();
const year = new Date().getFullYear();
</script>
