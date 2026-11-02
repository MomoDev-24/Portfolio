<template>
    <button
        type="button"
        :aria-label="t('lang.switch')"
        :lang="locale === 'fr' ? 'en' : 'fr'"
        class="inline-flex h-11 min-w-11 items-center justify-center rounded border px-2.5 text-xs font-bold tracking-[.06em] transition-colors"
        @click="toggleLocale"
    >
        {{ t('lang.other') }}
    </button>
</template>

<script setup>
import { useI18n } from '../Composables/useI18n';

const { locale, t, toggleLocale } = useI18n();
</script>
