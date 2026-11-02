<template>
    <section id="projects" class="border-t border-line">
        <div class="mx-auto flex max-w-page flex-col gap-10 px-6 py-16 md:gap-12 md:py-[110px]">
            <div class="flex flex-wrap items-end justify-between gap-6">
                <div class="flex flex-col gap-5">
                    <span class="lbl">{{ t('projects.label') }}</span>
                    <h2 class="disp text-[clamp(42px,6vw,84px)]">
                        <span data-reveal="0" class="block">{{ t('projects.title1') }}</span>
                        <span data-reveal="1" class="block text-grey">{{ t('projects.title2') }}</span>
                    </h2>
                </div>
                <p class="m-0 max-w-[340px] text-sm text-muted">{{ t('projects.intro') }}</p>
            </div>

            <div class="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-x-6 gap-y-7">
                <a
                    v-for="(project, i) in featuredProjects"
                    :id="project.id"
                    :key="project.id"
                    :href="`#${project.id}`"
                    :data-reveal="i % 3"
                    class="card-zoom flex scroll-mt-24 flex-col gap-3 bg-surface p-2.5 text-ink hover:text-ink lg:[&:nth-child(3n+2)]:mt-20"
                    @click.prevent="$emit('open', project.id)"
                >
                    <div class="h-[280px] overflow-hidden md:h-[340px]">
                        <div class="flex h-full items-center justify-center p-5" :class="project.bg">
                            <img
                                v-if="project.image"
                                :src="project.image"
                                :alt="tr(project.alt)"
                                class="block max-h-full max-w-full object-contain"
                                loading="lazy"
                            >
                            <span v-else class="text-[13px] text-muted">{{ tr(project.placeholder) }}</span>
                        </div>
                    </div>
                    <div class="flex justify-between px-1 pt-0.5 text-xs font-bold uppercase">
                        <span><span class="text-accent">●</span> {{ tr(project.name) }}</span>
                        <span class="text-muted">/{{ tr(project.cat) }}</span>
                    </div>
                    <p class="m-0 px-1 text-sm text-muted">{{ tr(project.summary) }}</p>
                    <div class="flex flex-wrap gap-1.5 px-1 pb-1 text-[11px]">
                        <span v-for="(tag, j) in project.cardTags" :key="j" class="bg-chip px-2 py-1">{{ tr(tag) }}</span>
                    </div>
                </a>
            </div>

            <div class="flex flex-col md:mt-6">
                <h3 class="mb-3 text-xs font-bold uppercase tracking-[.06em] text-muted">{{ t('projects.others') }}</h3>
                <a
                    v-for="project in otherProjects"
                    :id="project.id"
                    :key="project.id"
                    :href="`#${project.id}`"
                    data-reveal="0"
                    class="group flex scroll-mt-24 flex-wrap items-center gap-x-8 gap-y-1.5 border-t border-line py-5 md:gap-y-2 md:py-[22px] text-ink last:border-b hover:text-ink"
                    @click.prevent="$emit('open', project.id)"
                >
                    <span class="w-full font-display text-xl md:w-auto md:flex-[0_0_280px] md:text-[22px] font-extrabold uppercase transition-colors duration-300 group-hover:text-accent">
                        {{ tr(project.name) }}
                    </span>
                    <span class="flex-[1_1_360px] text-sm text-muted">{{ tr(project.summary) }}</span>
                    <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase">
                        /{{ tr(project.listLabel) }}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"><path d="M7 17L17 7M8 7h9v9" /></svg>
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { featuredProjects, otherProjects } from '../data/portfolio';
import { useI18n } from '../Composables/useI18n';

defineEmits(['open']);

const { t, tr } = useI18n();
</script>
