<template>
    <header class="border-b border-white/20">
        <nav :aria-label="t('nav.main')" class="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3 px-6 py-2">
            <a href="#hero" class="text-white hover:text-white" :aria-label="t('nav.backHome')">
                <AppLogo class="h-12 w-auto" />
            </a>
            <div class="flex flex-wrap items-center gap-1 text-sm font-medium">
                <a
                    v-for="link in links"
                    :key="link.href"
                    :href="link.href"
                    class="hidden px-3.5 py-3 text-white hover:text-white hover:underline md:inline-block"
                >
                    {{ t(link.key) }}
                </a>
                <LanguageToggle class="ml-2 border-white/35 text-white hover:bg-white/10" />
                <ThemeToggle class="border-white/35 text-white hover:bg-white/10" />
                <button
                    type="button"
                    :aria-label="t('nav.openMenu')"
                    class="inline-flex h-11 w-11 items-center justify-center text-white"
                    @click="$emit('open-menu')"
                >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
                        <path d="M3 9h18M3 15h18" />
                    </svg>
                </button>
            </div>
        </nav>
    </header>
</template>

<script setup>
import AppLogo from './AppLogo.vue';
import ThemeToggle from './ThemeToggle.vue';
import LanguageToggle from './LanguageToggle.vue';
import { navLinks as links } from '../data/navigation';
import { useI18n } from '../Composables/useI18n';

defineEmits(['open-menu']);

const { t } = useI18n();
</script>
