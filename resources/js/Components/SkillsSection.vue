<template>
    <section id="skills" class="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
        <!-- Particules d'arrière-plan -->
        <div class="absolute inset-0 overflow-hidden">
            <div
                v-for="n in 50"
                :key="n"
                class="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 2 + 's',
          animationDuration: (2 + Math.random() * 3) + 's'
        }"
            ></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <!-- En-tête avec animation -->
            <div class="text-center mb-16" ref="headerRef">
                <div class="inline-block">
                    <h2 class="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Mes Super-Pouvoirs
                    </h2>
                    <div class="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" ref="underlineRef"></div>
                </div>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto mt-6" ref="subtitleRef">
                    Découvrez les technologies et compétences que j'utilise pour créer des expériences numériques extraordinaires ✨
                </p>
            </div>

            <!-- Grille de services interactive -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div
                    v-for="(service, index) in services"
                    :key="service.title"
                    class="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer"
                    @mouseenter="playHoverAnimation"
                    @click="handleServiceClick(service)"
                >
                    <!-- Effet de brillance au hover -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>

                    <!-- Icône animée -->
                    <div class="relative mb-6">
                        <div :class="`w-20 h-20 ${service.gradient} rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-12 transition-transform duration-500 shadow-lg group-hover:shadow-2xl`">
                            <svg class="w-10 h-10 text-white transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
                            </svg>
                        </div>
                        <!-- Badge de niveau -->
                        <div :class="`absolute -top-2 -right-2 px-2 py-1 ${service.levelColor} text-xs font-bold rounded-full text-white shadow-lg`">
                            {{ service.level }}
                        </div>
                    </div>

                    <!-- Contenu -->
                    <div class="text-center">
                        <h3 class="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                            {{ service.title }}
                        </h3>
                        <p class="text-gray-300 mb-6 leading-relaxed">
                            {{ service.description }}
                        </p>

                        <!-- Technologies avec animation -->
                        <div class="space-y-3 mb-6">
                            <h4 class="text-sm font-semibold text-blue-300 uppercase tracking-wider">Technologies</h4>
                            <div class="flex flex-wrap gap-2 justify-center">
                <span
                    v-for="(tech, techIndex) in service.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  {{ tech }}
                </span>
                            </div>
                        </div>

                        <!-- Barre de progression des compétences -->
                        <div class="space-y-2">
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-400">Niveau de maîtrise</span>
                                <span class="text-sm font-bold text-blue-300">{{ service.skillLevel }}%</span>
                            </div>
                            <div class="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                <div
                                    :class="`h-full bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-1000 ease-out`"
                                    :style="{ width: service.skillLevel + '%' }"
                                ></div>
                            </div>
                        </div>

                        <!-- Projets réalisés -->
                        <div class="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-400">
                            <div class="flex items-center">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                {{ service.projects }} projets
                            </div>
                            <div class="flex items-center">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                                </svg>
                                {{ service.clients }} clients
                            </div>
                        </div>
                    </div>

                    <!-- Effet de particules au hover -->
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div
                            v-for="n in 8"
                            :key="n"
                            class="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
                            :style="{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 1 + 's'
              }"
                        ></div>
                    </div>
                </div>
            </div>

            <!-- Call to action fun -->
            <div class="text-center mt-16" ref="ctaRef">
                <div class="inline-block p-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl border border-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
                    <h3 class="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                        Prêt à créer quelque chose d'incroyable ? 🚀
                    </h3>
                    <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Combinons nos forces pour donner vie à votre vision et créer une expérience utilisateur mémorable !
                    </p>
                    <button
                        @click="scrollToContact"
                        class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
                    >
                        <span class="relative z-10">Discutons de votre projet</span>
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const headerRef = ref(null);
const underlineRef = ref(null);
const subtitleRef = ref(null);
const ctaRef = ref(null);

// Services avec plus de fun et d'interactivité
const services = ref([
    {
        title: 'Développement Frontend',
        description: 'Je crée des interfaces utilisateur modernes et réactives qui captivent et engagent vos utilisateurs avec des animations fluides et des interactions intuitives.',
        gradient: 'bg-gradient-to-br from-blue-500 to-cyan-400',
        levelColor: 'bg-blue-500',
        level: 'Expert',
        skillLevel: 95,
        projects: 45,
        clients: 28,
        technologies: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
        title: 'Backend & APIs',
        description: 'Architecture robuste et APIs performantes pour alimenter vos applications avec des solutions scalables et sécurisées.',
        gradient: 'bg-gradient-to-br from-green-500 to-emerald-400',
        levelColor: 'bg-green-500',
        level: 'Expert',
        skillLevel: 88,
        projects: 32,
        clients: 22,
        technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
        icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2m8-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2'
    },
    {
        title: 'Design UI/UX',
        description: 'Conception d\'expériences utilisateur mémorables avec un focus sur l\'accessibilité et la conversion.',
        gradient: 'bg-gradient-to-br from-purple-500 to-pink-400',
        levelColor: 'bg-purple-500',
        level: 'Avancé',
        skillLevel: 82,
        projects: 38,
        clients: 31,
        technologies: ['Figma', 'Sketch', 'Adobe XD', 'Principle', 'Framer'],
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
    },
    {
        title: 'Applications Mobile',
        description: 'Développement d\'applications mobiles natives et cross-platform pour iOS et Android avec des performances optimales.',
        gradient: 'bg-gradient-to-br from-orange-500 to-red-400',
        levelColor: 'bg-orange-500',
        level: 'Avancé',
        skillLevel: 78,
        projects: 18,
        clients: 15,
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
        icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
    },
    {
        title: 'DevOps & Cloud',
        description: 'Déploiement et gestion d\'infrastructure cloud pour des applications scalables et performantes.',
        gradient: 'bg-gradient-to-br from-indigo-500 to-blue-400',
        levelColor: 'bg-indigo-500',
        level: 'Avancé',
        skillLevel: 75,
        projects: 25,
        clients: 18,
        technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
        icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
    },
    {
        title: 'E-commerce',
        description: 'Solutions e-commerce complètes avec paiement sécurisé, gestion d\'inventaire et analytics avancées.',
        gradient: 'bg-gradient-to-br from-yellow-500 to-orange-400',
        levelColor: 'bg-yellow-500',
        level: 'Expert',
        skillLevel: 90,
        projects: 22,
        clients: 19,
        technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Magento'],
        icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01'
    }
]);

const playHoverAnimation = () => {
    // Animation simple au hover
    console.log('Hover effect');
};

const handleServiceClick = (service) => {
    console.log(`Clic sur ${service.title}`);
};

const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>
/* Animations personnalisées */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

@keyframes glow {
    0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
    50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6); }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.animate-glow {
    animation: glow 2s ease-in-out infinite;
}

/* Effet de survol personnalisé */
.group:hover .animate-pulse {
    animation-duration: 0.5s;
}
</style>
