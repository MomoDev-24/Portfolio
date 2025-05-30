<template>
    <div class="min-h-screen bg-red-50">
        <navigation-bar/>
        <hero-section/>
        <about-section/>
        <skills-section/>
        <project-section/>
        <contact-section/>
        <app-footer/>
    </div>
</template>
<script setup >
import NavigationBar from "../Components/NavigationBar.vue";
import HeroSection from "../Components/HeroSection.vue";
import AboutSection from "../Components/AboutSection.vue";
import SkillsSection from "../Components/SkillsSection.vue";
import ProjectSection from "../Components/ProjectSection.vue";
import AppFooter from "../Components/AppFooter.vue";
import ContactSection from "../Components/ContactSection.vue";
</script>
<style scoped >
html {
    scroll-behavior: smooth;
}
</style>
