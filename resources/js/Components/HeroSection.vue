<template>
    <section id="hero" class="relative h-screen overflow-hidden">
        <div class="background-animation" ref="bgAnim"></div>
        <div class="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
            <div class="max-w-5xl">
                <!-- Salutation animée -->
                <div class="mb-6 animate-fade-in">
          <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
            👋 Salut, je suis {{ personalInfo.firstName }}
          </span>
                </div>

                <!-- Titre principal avec effet de frappe -->
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-delay">
                    <span class="block mb-2">{{ personalInfo.title.line1 }}</span>
                    <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
            {{ personalInfo.title.line2 }}
          </span>
                </h1>

                <!-- Sous-titre avec rotation des mots -->
                <div class="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 animate-fade-in-delay-2">
                    <span>{{ personalInfo.subtitle.prefix }}</span>
                    <span class="font-semibold text-blue-300 rotating-text" ref="rotatingText">
            {{ currentSkill }}
          </span>
                </div>

                <!-- Description -->
                <p class="text-lg md:text-xl mb-10 opacity-80 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-3">
                    {{ personalInfo.description }}
                </p>

                <!-- Statistiques rapides -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 animate-fade-in-delay-4">
                    <div
                        v-for="stat in stats"
                        :key="stat.label"
                        class="text-center"
                    >
                        <div class="text-2xl md:text-3xl font-bold text-blue-300 mb-1">
                            {{ stat.value }}
                        </div>
                        <div class="text-sm md:text-base opacity-80">
                            {{ stat.label }}
                        </div>
                    </div>
                </div>

                <!-- Boutons d'action -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-5">
                    <button
                        @click="handleDiscoverClick"
                        class="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
            <span class="flex items-center">
              Découvrir mon travail
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
                    </button>

                    <button
                        @click="handleContactClick"
                        class="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
                    >
                        Me contacter
                    </button>
                </div>

                <!-- Réseaux sociaux -->
                <div class="flex justify-center space-x-6 mt-12 animate-fade-in-delay-6">
                    <a
                        v-for="social in socialLinks"
                        :key="social.name"
                        :href="social.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20"
                        :title="social.name"
                    >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path :d="social.icon"></path>
                        </svg>
                    </a>
                </div>

                <!-- Indicateur de scroll -->
                <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                    </div>
                    <p class="text-xs mt-2 opacity-60">Scroll</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import gsap from 'gsap';

const emit = defineEmits(['scroll-to']);
const bgAnim = ref(null);
const rotatingText = ref(null);

// Informations personnelles
const personalInfo = ref({
    firstName: 'Moïse',
    title: {
        line1: 'Développeur Web et Mobile',
        line2: 'Créateur d\'Expériences'
    },
    subtitle: {
        prefix: 'Spécialisé en '
    },
    description: 'Je transforme vos idées en solutions numériques innovantes. Passionné par les technologies modernes et le design, je crée des applications web et mobiles qui marquent les esprits et génèrent des résultats.'
});

// Compétences qui tournent
const skills = ref([
    'Vue.js & Laravel',
    'Tailwind CSS',
    'Applications Mobile Flutter',
]);

const currentSkill = ref(skills.value[0]);
let skillIndex = 0;
let skillInterval;

// Statistiques
const stats = ref([
    { value: '10+', label: 'Projets réalisés' },
    { value: '3+', label: 'Années d\'expérience' },
    { value: '5+', label: 'Clients satisfaits' },
    { value: '99%', label: 'Taux de satisfaction' }
]);

// Liens sociaux
const socialLinks = ref([
    {
        name: 'GitHub',
        url: 'https://github.com',
        icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com',
        icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
    },
    {
        name: 'Email',
        url: 'mailto:contact@example.com',
        icon: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z'
    }
]);

// Gestion des actions
const handleDiscoverClick = () => {
    emit('scroll-to', 'portfolio');
};

const handleContactClick = () => {
    emit('scroll-to', 'contact');
};

// Animation de rotation des compétences
const startSkillRotation = () => {
    skillInterval = setInterval(() => {
        skillIndex = (skillIndex + 1) % skills.value.length;

        // Animation de sortie
        gsap.to(rotatingText.value, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                currentSkill.value = skills.value[skillIndex];
                // Animation d'entrée
                gsap.to(rotatingText.value, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3
                });
            }
        });
    }, 3000);
};

onMounted(() => {
    if(!bgAnim.value) return;

    // Créer seulement les cercles, sans animer le background
    for (let i = 0; i < 15; i++) {
        const circle = createCircle();
        floatCircle(circle);
    }

    // Démarrer l'animation des compétences
    startSkillRotation();

    // Animation d'entrée pour les statistiques
    gsap.fromTo('.animate-fade-in-delay-4 > div',
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 2
        }
    );
});

onUnmounted(() => {
    if (skillInterval) {
        clearInterval(skillInterval);
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
    const tl = gsap.timeline({ repeat: -1 });

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

    gsap.to(el, {
        opacity: 0.05 + Math.random() * 0.3,
        duration: 3 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

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

/* Animations d'apparition */
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

.animate-fade-in-delay-3 {
    animation: fade-in 1s ease-out 0.9s both;
}

.animate-fade-in-delay-4 {
    animation: fade-in 1s ease-out 1.2s both;
}

.animate-fade-in-delay-5 {
    animation: fade-in 1s ease-out 1.5s both;
}

.animate-fade-in-delay-6 {
    animation: fade-in 1s ease-out 1.8s both;
}

/* Animation du texte rotatif */
.rotating-text {
    display: inline-block;
    min-width: 200px;
    text-align: left;
}

/* Animation de l'indicateur de scroll */
@keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
        transform: translate3d(0,0,0);
    }
    40%, 43% {
        transform: translate3d(0,-10px,0);
    }
    70% {
        transform: translate3d(0,-5px,0);
    }
    90% {
        transform: translate3d(0,-2px,0);
    }
}

.animate-bounce {
    animation: bounce 2s infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .rotating-text {
        min-width: 150px;
    }
}

@media (max-width: 640px) {
    .rotating-text {
        min-width: 120px;
    }
}
</style>
