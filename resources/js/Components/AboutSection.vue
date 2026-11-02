<template>
    <section id="about">
        <div class="mx-auto flex max-w-page flex-col gap-14 px-6 py-[110px]">
            <div class="flex flex-wrap items-start justify-between gap-8">
                <div class="flex flex-col gap-5">
                    <span class="lbl">{{ t('about.label') }}</span>
                    <h2 class="disp text-[clamp(42px,6vw,84px)]">
                        <span data-reveal="0" class="block">{{ t('about.title1') }}</span>
                        <span data-reveal="1" class="block">{{ t('about.title2a') }} <span class="text-grey">{{ t('about.title2b') }}</span></span>
                    </h2>
                </div>
                <img
                    :src="work"
                    :alt="t('about.workAlt')"
                    data-reveal="2"
                    class="block h-[200px] w-[200px] object-cover"
                    loading="lazy"
                >
            </div>

            <div class="flex flex-wrap items-start gap-10">
                <div class="flex flex-[1_1_320px] justify-center">
                    <img
                        :src="photo"
                        :alt="t('about.photoAlt')"
                        data-reveal="1"
                        class="block h-[360px] w-[300px] object-cover"
                        loading="lazy"
                    >
                </div>
                <div class="flex flex-[1_1_420px] flex-col gap-5">
                    <p data-reveal="0" class="m-0 text-sm font-bold uppercase leading-snug">
                        {{ t('about.intro', { name: profile.fullName }) }}
                    </p>
                    <p data-reveal="1" class="m-0 text-muted">{{ t('about.text') }}</p>
                    <div class="flex flex-col gap-2.5">
                        <div
                            v-for="(stat, i) in stats"
                            :key="stat.value"
                            :data-reveal="i"
                            class="flex items-center gap-7 bg-surface px-6 py-[18px]"
                        >
                            <span class="disp min-w-[110px] text-[52px]">{{ stat.value }}</span>
                            <div>
                                <div class="text-xs font-bold uppercase"><span class="text-accent">✳</span> {{ tr(stat.label) }}</div>
                                <div class="text-sm text-muted">{{ tr(stat.text) }}</div>
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
import work from '../Assets/work.webp';
import { profile, stats } from '../data/portfolio';
import { useI18n } from '../Composables/useI18n';

const { t, tr } = useI18n();
</script>
