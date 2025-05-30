<template>
    <nav class="fixed top-0  left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div class="container mx-auto px-6 py-0.5">
            <div class="flex items-center justify-between">
                <app-logo/>
                <div class="hidden md:flex space-x-6 text-xl">
                    <a href="#hero" @click="scrollTo('hero')" class="text-white hover:text-blue-200 transition-colors cursor-pointer">
                        Accueil
                    </a>
                    <a href="#about" @click="scrollTo('about')" class="text-white hover:text-blue-200 transition-colors cursor-pointer">
                        À propos
                    </a>
                    <a href="#skills" @click="scrollTo('services')" class="text-white hover:text-blue-200 transition-colors cursor-pointer">
                        Compétences
                    </a>
                    <a href="#contact" @click="scrollTo('contact')" class="text-white hover:text-blue-200 transition-colors cursor-pointer">
                        Contact
                    </a>
                </div>
                <button class="md:hidden text-white" @click="toggleMobileMenu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <!-- Menu mobile -->
            <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
                <div class="flex flex-col space-y-2">
                    <a href="#hero" @click="scrollToAndClose('hero')" class="text-white hover:text-blue-200 transition-colors py-2">
                        Accueil
                    </a>
                    <a href="#about" @click="scrollToAndClose('about')" class="text-white hover:text-blue-200 transition-colors py-2">
                        À propos
                    </a>
                    <a href="#services" @click="scrollToAndClose('services')" class="text-white hover:text-blue-200 transition-colors py-2">
                        Services
                    </a>
                    <a href="#contact" @click="scrollToAndClose('contact')" class="text-white hover:text-blue-200 transition-colors py-2">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import AppLogo from "./AppLogo.vue";

const mobileMenuOpen = ref(false)

const scrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollToAndClose = (elementId) => {
    scrollTo(elementId)
    mobileMenuOpen.value = false
}
</script>
