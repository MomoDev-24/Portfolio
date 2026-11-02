<template>
    <section id="contact">
        <div class="mx-auto flex max-w-page flex-col gap-12 px-6 pb-20 pt-[110px]">
            <div class="flex flex-wrap items-end justify-between gap-6">
                <h2 class="disp text-[clamp(56px,10vw,150px)]">
                    <span data-reveal="0" class="block">{{ t('contact.title1') }}</span>
                    <span data-reveal="1" class="block text-grey">{{ t('contact.title2') }}</span>
                </h2>
                <span class="text-[13px] font-semibold">{{ t('contact.reply') }}</span>
            </div>

            <div class="grid-lines flex flex-wrap items-center gap-10 bg-hero p-[clamp(20px,4vw,48px)]">
                <form
                    data-reveal="0"
                    class="flex max-w-[420px] flex-[1_1_340px] flex-col gap-3.5 bg-surface p-6 text-ink"
                    @submit.prevent="submitForm"
                >
                    <span class="font-display text-lg font-extrabold uppercase">{{ t('contact.formTitle') }}</span>
                    <label class="contact-label">
                        {{ t('contact.name') }}
                        <input v-model="form.name" type="text" required autocomplete="name" :placeholder="t('contact.namePh')" class="contact-field min-h-[46px]">
                    </label>
                    <label class="contact-label">
                        {{ t('contact.email') }}
                        <input v-model="form.email" type="email" required autocomplete="email" :placeholder="t('contact.emailPh')" class="contact-field min-h-[46px]">
                    </label>
                    <label class="contact-label">
                        {{ t('contact.message') }}
                        <textarea v-model="form.message" rows="4" required :placeholder="t('contact.messagePh')" class="contact-field resize-y py-3" />
                    </label>
                    <button
                        type="submit"
                        class="inline-flex min-h-[50px] items-center justify-center gap-2.5 bg-ink text-[13px] font-bold uppercase tracking-[.06em] text-bg"
                    >
                        {{ t('contact.send') }}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
                    </button>
                    <p v-if="sent" role="status" class="m-0 text-sm text-muted">
                        {{ t('contact.sent', { email: profile.email }) }}
                    </p>
                </form>

                <div class="flex flex-[1_1_340px] flex-col gap-5 text-white">
                    <p class="disp text-[clamp(36px,5vw,68px)]">
                        {{ t('contact.idea') }}
                        <span class="block text-hero-ink">{{ t('contact.build') }}</span>
                    </p>
                    <div class="flex flex-col gap-2 text-[15px] font-semibold">
                        <a :href="`mailto:${profile.email}`" class="text-white underline underline-offset-4 hover:text-white">{{ profile.email }}</a>
                        <a :href="`tel:${profile.phone.replace(/\s/g, '')}`" class="text-white hover:text-white">{{ profile.phone }}</a>
                        <span>{{ tr(profile.location) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { profile } from '../data/portfolio';
import { useI18n } from '../Composables/useI18n';

const { t, tr } = useI18n();
const form = reactive({ name: '', email: '', message: '' });
const sent = ref(false);

// Pas encore de backend d'envoi : on ouvre la messagerie du visiteur avec le message prérempli.
const submitForm = () => {
    const subject = encodeURIComponent(`${t('contact.subject')} — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    sent.value = true;
};
</script>

<style scoped>
.contact-label {
    @apply flex flex-col gap-1.5 text-xs font-semibold uppercase;
}

.contact-field {
    @apply border-0 bg-chip px-3 text-[15px] normal-case text-ink;
}
</style>
