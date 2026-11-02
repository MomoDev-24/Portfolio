<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0"
            leave-active-class="transition duration-200 ease-in"
            leave-to-class="opacity-0"
        >
            <div
                v-if="project"
                role="dialog"
                aria-modal="true"
                :aria-label="`Détail du projet ${project.name}`"
                class="fixed inset-0 z-[60] flex items-center justify-center p-4"
            >
                <button
                    type="button"
                    aria-label="Fermer le détail du projet"
                    class="absolute inset-0 cursor-pointer bg-[rgba(10,10,10,.72)]"
                    @click="$emit('close')"
                />

                <div
                    :key="project.id"
                    class="modal-panel relative max-h-[calc(100vh-32px)] w-full max-w-[1040px] overflow-y-auto bg-bg text-ink shadow-[0_30px_80px_rgba(0,0,0,.35)]"
                >
                    <div class="sticky top-0 z-[1] flex items-center justify-between gap-3 border-b border-line bg-bg py-2.5 pl-6 pr-4">
                        <span class="lbl">{{ project.cat }}</span>
                        <div class="flex items-center gap-1">
                            <button type="button" aria-label="Projet précédent" class="modal-btn" @click="go(-1)">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
                            </button>
                            <button type="button" aria-label="Projet suivant" class="modal-btn" @click="go(1)">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                            </button>
                            <button
                                ref="closeButton"
                                type="button"
                                aria-label="Fermer"
                                class="ml-2 inline-flex h-11 w-11 items-center justify-center bg-ink text-bg"
                                @click="$emit('close')"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-col gap-7 px-6 pb-9 pt-7">
                        <div class="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
                            <h2 class="disp text-[clamp(44px,7vw,96px)]">{{ project.name }}</h2>
                            <span class="text-[13px] font-bold text-muted">{{ pad(index + 1) }} / {{ pad(projects.length) }}</span>
                        </div>
                        <p class="m-0 max-w-[720px] text-lg leading-normal">{{ project.intro }}</p>

                        <div class="flex h-[clamp(240px,40vw,440px)] items-center justify-center p-6 text-center text-sm font-semibold" :class="project.bg">
                            <img v-if="project.image" :src="project.image" :alt="project.alt" class="block max-h-full max-w-full object-contain">
                            <span v-else class="text-muted">{{ project.placeholder }}</span>
                        </div>

                        <div v-if="project.shots.length" class="flex flex-col gap-3">
                            <h3 class="modal-title">Écrans de l'application</h3>
                            <div class="flex gap-4 overflow-x-auto pb-2">
                                <figure v-for="shot in project.shots" :key="shot.src" class="m-0 flex flex-[0_0_170px] flex-col gap-2">
                                    <img :src="shot.src" :alt="shot.label" class="block h-auto w-full" loading="lazy">
                                    <figcaption class="text-center text-xs text-muted">{{ shot.label }}</figcaption>
                                </figure>
                            </div>
                        </div>

                        <dl class="m-0 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px border border-line bg-line">
                            <div v-for="info in infos" :key="info.label" class="flex flex-col gap-1 bg-bg px-[18px] py-4">
                                <dt class="text-[11px] font-bold uppercase tracking-[.06em] text-muted">{{ info.label }}</dt>
                                <dd class="m-0 font-semibold">{{ info.value }}</dd>
                            </div>
                        </dl>

                        <div class="flex flex-wrap gap-x-14 gap-y-8">
                            <div class="flex flex-[2_1_420px] flex-col gap-2">
                                <h3 class="modal-title">Ce que j'ai réalisé</h3>
                                <ol class="m-0 list-none p-0">
                                    <li v-for="(bullet, i) in project.bullets" :key="bullet" class="flex gap-5 border-t border-line py-3.5">
                                        <span class="flex-[0_0_28px] text-[13px] font-extrabold text-accent">{{ pad(i + 1) }}</span>
                                        <span class="text-muted">{{ bullet }}</span>
                                    </li>
                                </ol>
                            </div>
                            <div class="flex flex-[1_1_240px] flex-col gap-3.5">
                                <h3 class="modal-title">Technologies</h3>
                                <div class="flex flex-wrap gap-1.5 text-[13px]">
                                    <span v-for="tag in project.tags" :key="tag" class="bg-chip px-2.5 py-1.5">{{ tag }}</span>
                                </div>
                                <a
                                    v-if="project.storeUrl"
                                    :href="project.storeUrl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="mt-2 inline-flex min-h-12 items-center justify-between gap-3 bg-ink px-[18px] text-[13px] font-bold uppercase tracking-[.05em] text-bg hover:text-bg"
                                >
                                    Voir sur Google Play
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { computed, ref, watch, nextTick } from 'vue';
import { projects } from '../data/portfolio';
import { useDialog } from '../Composables/useDialog';

const props = defineProps({
    projectId: { type: String, default: null },
});
const emit = defineEmits(['close', 'navigate']);

const closeButton = ref(null);
const index = computed(() => projects.findIndex((p) => p.id === props.projectId));
const project = computed(() => projects[index.value] ?? null);
const infos = computed(() => [
    { label: 'Mon rôle', value: project.value.role },
    { label: 'Type', value: project.value.type },
    { label: 'Statut', value: project.value.status },
]);

const pad = (n) => String(n).padStart(2, '0');
const go = (step) => {
    const next = (index.value + step + projects.length) % projects.length;
    emit('navigate', projects[next].id);
};

useDialog(() => !!project.value, () => emit('close'), (event) => {
    if (event.key === 'ArrowRight') go(1);
    if (event.key === 'ArrowLeft') go(-1);
});

// Place le focus dans la fenêtre à l'ouverture, pour le clavier et les lecteurs d'écran
watch(() => props.projectId, async (id, previous) => {
    if (id && !previous) {
        await nextTick();
        closeButton.value?.focus();
    }
});
</script>

<style scoped>
.modal-btn {
    @apply inline-flex h-11 w-11 items-center justify-center border border-line bg-surface text-ink;
}

.modal-title {
    @apply m-0 text-xs font-bold uppercase tracking-[.06em];
}

.modal-panel {
    animation: panel-in .5s cubic-bezier(.2, .7, .2, 1) both;
}

@keyframes panel-in {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
}

@media (prefers-reduced-motion: reduce) {
    .modal-panel {
        animation: none;
    }
}
</style>
