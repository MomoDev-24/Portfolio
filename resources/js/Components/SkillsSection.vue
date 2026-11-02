<template>
    <section id="skills" class="border-t border-line">
        <div class="mx-auto flex max-w-page flex-col gap-14 px-6 py-[110px]">
            <div class="flex flex-wrap gap-x-20 gap-y-6">
                <span class="lbl">{{ t('skills.label') }}</span>
                <h2 class="disp text-[clamp(42px,6vw,84px)]">
                    <span data-reveal="0" class="block">{{ t('skills.title1') }}</span>
                    <span data-reveal="1" class="block">{{ t('skills.title2a') }} <span class="text-grey">{{ t('skills.title2b') }}</span></span>
                    <span data-reveal="2" class="block text-grey">{{ t('skills.title3') }}</span>
                </h2>
            </div>

            <div class="flex flex-col border-b border-line">
                <article
                    v-for="(skill, i) in skills"
                    :key="skill.image"
                    data-reveal="0"
                    class="group flex flex-wrap gap-x-10 gap-y-6 border-t border-line py-9"
                >
                    <span class="flex-[0_0_80px] text-[13px] font-semibold">
                        <span class="text-accent">●</span> {{ String(i + 1).padStart(3, '0') }}
                    </span>
                    <div class="flex flex-[1_1_380px] flex-col gap-3.5">
                        <h3
                            class="disp text-[clamp(28px,3.4vw,44px)] transition-colors duration-300 group-hover:text-accent"
                            :class="{ 'text-accent': i === 0 }"
                        >
                            {{ tr(skill.title) }}
                        </h3>
                        <p class="m-0 max-w-[520px] text-muted">{{ tr(skill.text) }}</p>
                        <div class="flex flex-wrap gap-1.5 text-xs">
                            <span v-for="(tag, j) in skill.tags" :key="j" class="bg-chip px-2.5 py-1.5">{{ tr(tag) }}</span>
                        </div>
                    </div>
                    <div class="card-zoom h-[190px] flex-[0_1_300px] overflow-hidden" :class="skill.bg">
                        <img :src="skill.image" :alt="tr(skill.alt)" class="block h-full w-full object-cover" loading="lazy">
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { skills } from '../data/portfolio';
import { useI18n } from '../Composables/useI18n';

const { t, tr } = useI18n();
</script>
