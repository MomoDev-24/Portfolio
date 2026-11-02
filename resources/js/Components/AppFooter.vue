<template>
    <footer class="bg-inv text-inv-text">
        <div class="mx-auto flex max-w-page flex-col gap-11 px-6 pt-[72px]">
            <div data-reveal="0" class="flex flex-wrap items-end justify-between gap-6 border-b border-inv-line pb-10">
                <div class="flex flex-col gap-2.5">
                    <span class="font-script text-[46px] font-bold leading-none">Momodev<span class="text-accent">.</span></span>
                    <p class="m-0 max-w-[400px] text-[15px] text-inv-muted">{{ t('footer.pitch') }}</p>
                </div>
                <a
                    href="#hero"
                    class="inline-flex min-h-12 items-center gap-2.5 border border-inv-line px-5 text-xs font-bold uppercase tracking-[.06em] text-inv-text"
                >
                    {{ t('footer.top') }}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
                </a>
            </div>

            <div data-reveal="1" class="flex flex-wrap gap-x-24 gap-y-8 text-sm">
                <div class="footer-col">
                    <span class="footer-title">{{ t('footer.nav') }}</span>
                    <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ t(link.key) }}</a>
                </div>
                <div class="footer-col">
                    <span class="footer-title">{{ t('footer.socials') }}</span>
                    <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer">{{ social.name }} ↗</a>
                </div>
                <div class="footer-col">
                    <span class="footer-title">{{ t('footer.contact') }}</span>
                    <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
                    <span>{{ profile.phone }}</span>
                    <span>{{ tr(profile.location) }}</span>
                </div>
            </div>

            <div class="flex flex-wrap justify-between gap-3 border-t border-inv-line pb-7 pt-5 text-xs text-inv-muted">
                <span>© {{ year }} {{ profile.shortName }} — Momodev. {{ t('footer.rights') }}</span>
                <span>{{ t('footer.made') }} {{ profile.firstName }}</span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { profile, socials } from '../data/portfolio';
import { navLinks } from '../data/navigation';
import { useI18n } from '../Composables/useI18n';

const { t, tr } = useI18n();
const year = new Date().getFullYear();
</script>

<style scoped>
.footer-col {
    @apply flex flex-col gap-2;
}

.footer-title {
    @apply text-[11px] font-bold uppercase tracking-[.08em] text-inv-muted;
}
</style>
