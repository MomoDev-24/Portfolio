<template>
    <div class="min-h-screen bg-bg text-ink">
        <HeroSection @open-menu="menuOpen = true" @open-project="openProject" />
        <StackMarquee />
        <main>
            <AboutSection />
            <SkillsSection />
            <ProjectSection @open="openProject" />
            <ExperienceSection />
            <ContactSection />
        </main>
        <AppFooter />

        <!-- Bouton de menu flottant, visible une fois le hero dépassé -->
        <Transition
            enter-active-class="transition duration-300"
            enter-from-class="translate-y-[-12px] opacity-0"
            leave-active-class="transition duration-200"
            leave-to-class="translate-y-[-12px] opacity-0"
        >
            <button
                v-show="scrolled"
                type="button"
                aria-label="Ouvrir le menu"
                class="fixed right-4 top-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-bg shadow-lg"
                @click="menuOpen = true"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 9h18M3 15h18" /></svg>
            </button>
        </Transition>

        <FullscreenMenu :open="menuOpen" @close="menuOpen = false" />
        <ProjectModal :project-id="projectId" @close="projectId = null" @navigate="openProject" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeroSection from '../Components/HeroSection.vue';
import StackMarquee from '../Components/StackMarquee.vue';
import AboutSection from '../Components/AboutSection.vue';
import SkillsSection from '../Components/SkillsSection.vue';
import ProjectSection from '../Components/ProjectSection.vue';
import ExperienceSection from '../Components/ExperienceSection.vue';
import ContactSection from '../Components/ContactSection.vue';
import AppFooter from '../Components/AppFooter.vue';
import FullscreenMenu from '../Components/FullscreenMenu.vue';
import ProjectModal from '../Components/ProjectModal.vue';
import { useScrollAnimations } from '../Composables/useScrollAnimations';

const menuOpen = ref(false);
const projectId = ref(null);
const scrolled = ref(false);

const openProject = (id) => {
    projectId.value = id;
};

const onScroll = () => {
    scrolled.value = window.scrollY > 600;
};

onMounted(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

useScrollAnimations();
</script>
