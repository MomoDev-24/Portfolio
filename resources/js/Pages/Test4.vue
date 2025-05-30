<template>
    <div class="min-h-screen">
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
            <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <h1 class="text-2xl font-bold text-white">Mon Site</h1>
                    <div class="hidden md:flex space-x-6">
                        <a href="#hero" @click="scrollTo('hero')" class="text-white hover:text-blue-200 transition-colors cursor-pointer">Accueil</a>
                        <a href="#about" @click="scrollTo('about')" class="text-white hover:text-blue-200 transition-colors cursor-pointer">À propos</a>
                        <a href="#services" @click="scrollTo('services')" class="text-white hover:text-blue-200 transition-colors cursor-pointer">Services</a>
                        <a href="#contact" @click="scrollTo('contact')" class="text-white hover:text-blue-200 transition-colors cursor-pointer">Contact</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Section Hero avec background animé -->
        <section id="hero" class="relative h-screen overflow-hidden">
            <div class="background-animation" ref="bgAnim"></div>
            <div class="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
                <div class="max-w-4xl">
                    <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        Bienvenue sur mon site
                    </h1>
                    <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
                        Découvrez un monde d'innovation et de créativité
                    </p>
                    <button @click="scrollTo('about')" class="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 animate-fade-in-delay-2">
                        Découvrir
                    </button>
                </div>
            </div>
        </section>

        <!-- Section À propos -->
        <section id="about" class="py-20 bg-gray-50">
            <div class="container mx-auto px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-4xl font-bold text-gray-800 mb-8">À propos de nous</h2>
                    <p class="text-lg text-gray-600 mb-12 leading-relaxed">
                        Nous sommes une équipe passionnée dédiée à créer des expériences numériques exceptionnelles.
                        Notre mission est de transformer vos idées en réalité grâce à des solutions innovantes et créatives.
                    </p>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Innovation</h3>
                            <p class="text-gray-600">Solutions créatives et technologies de pointe</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Qualité</h3>
                            <p class="text-gray-600">Excellence dans chaque détail de nos projets</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Collaboration</h3>
                            <p class="text-gray-600">Travail d'équipe et communication transparente</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Services -->
        <section id="services" class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-800 mb-4">Nos Services</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nous offrons une gamme complète de services pour répondre à tous vos besoins numériques
                    </p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="group hover:transform hover:scale-105 transition-all duration-300">
                        <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl text-white">
                            <svg class="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                            <h3 class="text-xl font-bold mb-2">Développement Web</h3>
                            <p class="opacity-90">Sites web modernes et applications performantes</p>
                        </div>
                    </div>
                    <div class="group hover:transform hover:scale-105 transition-all duration-300">
                        <div class="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-xl text-white">
                            <svg class="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                            <h3 class="text-xl font-bold mb-2">Applications Mobile</h3>
                            <p class="opacity-90">Apps natives et cross-platform</p>
                        </div>
                    </div>
                    <div class="group hover:transform hover:scale-105 transition-all duration-300">
                        <div class="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-xl text-white">
                            <svg class="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                            </svg>
                            <h3 class="text-xl font-bold mb-2">Design UI/UX</h3>
                            <p class="opacity-90">Interfaces intuitives et expériences utilisateur</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Contact -->
        <section id="contact" class="py-20 bg-gray-800 text-white">
            <div class="container mx-auto px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-4xl font-bold mb-8">Contactez-nous</h2>
                    <p class="text-lg mb-12 opacity-90">
                        Prêt à démarrer votre projet ? Parlons-en ensemble !
                    </p>
                    <div class="grid md:grid-cols-2 gap-12">
                        <div class="text-left">
                            <h3 class="text-2xl font-semibold mb-6">Informations de contact</h3>
                            <div class="space-y-4">
                                <div class="flex items-center">
                                    <svg class="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <span>contact@monsite.com</span>
                                </div>
                                <div class="flex items-center">
                                    <svg class="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <span>+33 1 23 45 67 89</span>
                                </div>
                                <div class="flex items-center">
                                    <svg class="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span>Paris, France</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form @submit.prevent="submitForm" class="space-y-4">
                                <input
                                    v-model="form.name"
                                    type="text"
                                    placeholder="Votre nom"
                                    class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white"
                                >
                                <input
                                    v-model="form.email"
                                    type="email"
                                    placeholder="Votre email"
                                    class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white"
                                >
                                <textarea
                                    v-model="form.message"
                                    placeholder="Votre message"
                                    rows="4"
                                    class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white"
                                ></textarea>
                                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition-colors">
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-8">
            <div class="container mx-auto px-6 text-center">
                <p>&copy; 2024 Mon Site. Tous droits réservés.</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import gsap from 'gsap';

const bgAnim = ref(null);

// Formulaire de contact
const form = reactive({
    name: '',
    email: '',
    message: ''
});

// Fonction de scroll fluide
const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// Soumission du formulaire
const submitForm = () => {
    console.log('Formulaire soumis:', form);
    // Ici vous pouvez ajouter la logique d'envoi
    alert('Message envoyé !');
    // Reset du formulaire
    form.name = '';
    form.email = '';
    form.message = '';
};

onMounted(() => {
    if(!bgAnim.value) return;

    // Créer seulement les cercles, sans animer le background
    for (let i = 0; i < 15; i++) {
        const circle = createCircle();
        floatCircle(circle);
    }
});

function createCircle() {
    const circle = document.createElement('div');
    circle.className = "circle";
    bgAnim.value.appendChild(circle);

    const size = Math.random() * 30 + 10;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    gsap.set(circle, {
        width: size,
        height: size,
        backgroundColor: 'white',
        borderRadius: '50%',
        opacity: 0.1 + Math.random() * 0.4,
        x: startX,
        y: startY,
        position: 'absolute'
    });

    return circle;
}

function floatCircle(el) {
    // Animation plus complexe pour disperser les cercles
    const tl = gsap.timeline({ repeat: -1 });

    // Mouvement aléatoire dans toutes les directions
    tl.to(el, {
        x: `+=${Math.random() * 400 - 200}`,
        y: `+=${Math.random() * 300 - 150}`,
        duration: 8 + Math.random() * 6,
        ease: 'sine.inOut'
    })
        .to(el, {
            x: `+=${Math.random() * 400 - 200}`,
            y: `+=${Math.random() * 300 - 150}`,
            duration: 8 + Math.random() * 6,
            ease: 'sine.inOut'
        })
        .to(el, {
            x: `+=${Math.random() * 400 - 200}`,
            y: `+=${Math.random() * 300 - 150}`,
            duration: 8 + Math.random() * 6,
            ease: 'sine.inOut'
        });

    // Animation d'opacité séparée
    gsap.to(el, {
        opacity: 0.05 + Math.random() * 0.3,
        duration: 3 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Rotation légère
    gsap.to(el, {
        rotation: 360,
        duration: 20 + Math.random() * 20,
        repeat: -1,
        ease: 'none'
    });
}
</script>

<style scoped>
.circle {
    position: absolute;
    pointer-events: none;
}

.background-animation {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
    animation: fade-in 1s ease-out 0.3s both;
}

.animate-fade-in-delay-2 {
    animation: fade-in 1s ease-out 0.6s both;
}

html {
    scroll-behavior: smooth;
}
</style>
