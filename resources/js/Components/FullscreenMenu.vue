<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0"
            leave-active-class="transition duration-200 ease-in"
            leave-to-class="opacity-0"
        >
            <div
                v-if="open"
                role="dialog"
                aria-modal="true"
                :aria-label="t('nav.menu')"
                class="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[#0D0D0D] text-[#F3F2EF]"
            >
                <div class="mx-auto flex w-full max-w-page items-center justify-between px-6 py-2">
                    <AppLogo class="h-12 w-auto" />
                    <button
                        ref="closeButton"
                        type="button"
                        :aria-label="t('nav.closeMenu')"
                        class="inline-flex h-12 w-12 items-center justify-center"
                        @click="$emit('close')"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
                    </button>
                </div>

                <div class="mx-auto flex w-full max-w-page flex-1 flex-wrap gap-12 px-6 pb-12 pt-8">
                    <nav :aria-label="t('nav.menu')" class="flex flex-[2_1_480px] flex-col">
                        <a
                            v-for="(link, i) in menuLinks"
                            :key="link.href"
                            :href="link.href"
                            class="menu-link flex items-center justify-between border-b border-[#262626] py-2.5 text-[#F3F2EF] hover:text-[#FF6A3D]"
                            :style="{ animationDelay: `${0.08 * (i + 1)}s` }"
                            @click.prevent="navigate(link.href)"
                        >
                            <span class="disp text-[clamp(44px,7vw,92px)]" :class="{ 'text-[#FF6A3D]': link.href === '#contact' }">{{ t(link.key) }}</span>
                            <span class="text-[32px] font-light" aria-hidden="true">+</span>
                        </a>
                    </nav>
                    <div class="flex flex-[1_1_260px] flex-col justify-end gap-7 text-[15px]">
                        <div><div class="text-[13px] text-[#9A9A95]">{{ t('nav.phone') }}</div><div class="font-semibold">{{ profile.phone }}</div></div>
                        <div><div class="text-[13px] text-[#9A9A95]">{{ t('nav.email') }}</div><a :href="`mailto:${profile.email}`" class="font-semibold">{{ profile.email }}</a></div>
                        <div><div class="text-[13px] text-[#9A9A95]">{{ t('nav.basedIn') }}</div><div class="font-semibold">{{ tr(profile.location) }} — {{ t('nav.remote') }}</div></div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import AppLogo from './AppLogo.vue';
import { menuLinks } from '../data/navigation';
import { profile } from '../data/portfolio';
import { useDialog } from '../Composables/useDialog';
import { useI18n } from '../Composables/useI18n';

const props = defineProps({ open: Boolean });
const emit = defineEmits(['close']);

const { t, tr } = useI18n();
const closeButton = ref(null);

useDialog(() => props.open, () => emit('close'));

// Le défilement de la page est bloqué tant que le menu est ouvert :
// on ferme d'abord, puis on rejoint la section.
const navigate = async (href) => {
    emit('close');
    await nextTick();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', href);
};

watch(() => props.open, async (open) => {
    if (open) {
        await nextTick();
        closeButton.value?.focus();
    }
});
</script>

<style scoped>
.menu-link {
    animation: link-in .6s cubic-bezier(.2, .7, .2, 1) both;
}

@keyframes link-in {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
}

@media (prefers-reduced-motion: reduce) {
    .menu-link {
        animation: none;
    }
}
</style>
