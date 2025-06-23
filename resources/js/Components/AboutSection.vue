<template>
    <section id="about" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <!-- Introduction personnelle -->
            <div class="max-w-6xl mx-auto text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-800 mb-8">À propos de moi</h2>
                <div class="flex flex-col lg:flex-row items-center gap-8 mb-12">
                    <!-- Photo de profil -->
                    <div class="flex-shrink-0">
                        <div class="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl lg:text-6xl font-bold shadow-xl">
                            {{ initials }}
                        </div>
                    </div>
                    <!-- Description -->
                    <div class="flex-1 text-center lg:text-left">
                        <h3 class="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">{{ personalInfo.name }}</h3>
                        <p class="text-base lg:text-lg text-gray-600 mb-4">{{ personalInfo.title }}</p>
                        <p class="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">{{ personalInfo.description }}</p>
                        <div class="flex flex-wrap justify-center lg:justify-start gap-2">
              <span
                  v-for="skill in personalInfo.skills"
                  :key="skill"
                  class="px-2 py-1 lg:px-3 lg:py-1 bg-blue-100 text-blue-800 rounded-full text-xs lg:text-sm font-medium"
              >
                {{ skill }}
              </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Timeline horizontale avec scroll -->
            <div class="max-w-7xl mx-auto mb-20">
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-8 lg:mb-12">Mon Parcours</h3>

                <!-- Version Desktop - Timeline horizontale scrollable -->
                <div class="hidden lg:block relative overflow-hidden">
                    <div class="timeline-scroll-container">
                        <!-- Ligne horizontale -->
                        <div class="absolute top-1/2 left-0 right-0 h-1 bg-blue-500 transform -translate-y-1/2"></div>

                        <!-- Container des étapes -->
                        <div class="flex items-center relative" :style="{ width: `${timeline.length * 300}px` }">
                            <div
                                v-for="(item, index) in timeline"
                                :key="index"
                                class="flex flex-col items-center relative px-4"
                                style="width: 300px;"
                            >
                                <!-- Point sur la ligne -->
                                <div class="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 mb-4"></div>

                                <!-- Année -->
                                <div class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 whitespace-nowrap">
                                    {{ item.year }}
                                </div>

                                <!-- Carte de contenu -->
                                <div
                                    :class="[
                    'bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-64 timeline-card',
                    index % 2 === 0 ? 'transform translate-y-0' : 'transform -translate-y-8'
                  ]"
                                >
                                    <div class="flex items-center mb-3">
                                        <div :class="`w-10 h-10 ${item.color} rounded-full flex items-center justify-center mr-3 flex-shrink-0`">
                                            <component :is="item.icon"/>
                                        </div>
                                        <div class="min-w-0">
                                            <h4 class="text-sm font-semibold text-gray-800 leading-tight">{{ item.title }}</h4>
                                            <p class="text-xs text-gray-500">{{ item.period }}</p>
                                        </div>
                                    </div>
                                    <p class="text-xs text-gray-600 mb-3 leading-relaxed">{{ item.description }}</p>

                                    <!-- Réalisations -->
                                    <div v-if="item.achievements" class="mb-3">
                                        <p class="text-xs font-medium text-gray-700 mb-1">Réalisations :</p>
                                        <ul class="text-xs text-gray-600 space-y-1">
                                            <li v-for="achievement in item.achievements.slice(0, 2)" :key="achievement" class="flex items-start">
                                                <span class="text-blue-500 mr-1">•</span>
                                                <span>{{ achievement }}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <!-- Technologies -->
                                    <div v-if="item.technologies" class="flex flex-wrap gap-1">
                    <span
                        v-for="tech in item.technologies.slice(0, 3)"
                        :key="tech"
                        class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {{ tech }}
                    </span>
                                        <span v-if="item.technologies.length > 3" class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{{ item.technologies.length - 3 }}
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contrôles de navigation -->
                    <div class="flex justify-between mt-8">
                        <button
                            @click="scrollTimeline('left')"
                            class="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <button
                            @click="scrollTimeline('right')"
                            class="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Version Mobile - Timeline verticale -->
                <div class="lg:hidden">
                    <div class="relative">
                        <!-- Ligne verticale -->
                        <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-500"></div>

                        <!-- Éléments de la timeline -->
                        <div class="space-y-8">
                            <div
                                v-for="(item, index) in timeline"
                                :key="index"
                                class="relative flex items-start timeline-item"
                                ref="timelineItems"
                            >
                                <!-- Point sur la ligne -->
                                <div class="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg z-10 mt-2 mr-4 flex-shrink-0"></div>

                                <!-- Contenu -->
                                <div class="flex-1 bg-white rounded-lg shadow-lg p-4">
                                    <!-- En-tête -->
                                    <div class="flex items-center justify-between mb-3">
                                        <div class="flex items-center">
                                            <div :class="`w-8 h-8 ${item.color} rounded-full flex items-center justify-center mr-3`">
                                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 class="text-base font-semibold text-gray-800">{{ item.title }}</h4>
                                                <p class="text-sm text-gray-500">{{ item.period }}</p>
                                            </div>
                                        </div>
                                        <div class="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                            {{ item.year }}
                                        </div>
                                    </div>

                                    <!-- Description -->
                                    <p class="text-sm text-gray-600 mb-4 leading-relaxed">{{ item.description }}</p>

                                    <!-- Réalisations -->
                                    <div v-if="item.achievements" class="mb-4">
                                        <p class="text-sm font-medium text-gray-700 mb-2">Réalisations :</p>
                                        <ul class="text-sm text-gray-600 space-y-1">
                                            <li v-for="achievement in item.achievements" :key="achievement" class="flex items-start">
                                                <span class="text-blue-500 mr-2 mt-1">•</span>
                                                <span>{{ achievement }}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <!-- Technologies -->
                                    <div v-if="item.technologies" class="flex flex-wrap gap-2">
                    <span
                        v-for="tech in item.technologies"
                        :key="tech"
                        class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {{ tech }}
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import GraduationCapIcon from "./icons/GraduationCapIcon.vue";
import BadgeCheck from "./icons/BadgeCheck.vue";
import CodeXml from "./icons/CodeXml.vue";
import Award from "./icons/Award.vue";

// Informations personnelles
const personalInfo = ref({
    name: 'Moïse MAHMA',
    title: 'Développeur web et mobile',
    description: 'Passionné par la création d\'expériences numériques innovantes, je combine créativité et expertise technique pour donner vie à des projets web exceptionnels. Mon approche centrée sur l\'utilisateur et ma curiosité constante me poussent à explorer les dernières technologies.',
    skills: ['Flutter', 'Laravel', 'Vue.js', 'Node.js', 'Python', 'Dart', 'PHP', 'MongoDB', 'PostgreSQL']
});

// Calcul des initiales
const initials = computed(() => {
    return personalInfo.value.name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();
});

// Timeline du parcours
const timeline = ref([
    {
        year: '2019',
        title: 'Début du parcours académique',
        period: '2018-2019',
        description: 'Obtention de mon Baccalauréat scientifique au Collège CHAMINADE de Natitingou',
        achievements: [
            'Formation scientifique solide',
            'Introduction aux bases en informatique'
        ],
        technologies: [],
        color: 'bg-gray-400',
        icon: Award
    },
    {
        year: '2022',
        title: 'Licence en Informatique Industrielle',
        period: '2019-2022',
        description: 'Formation technique à l\'INSTI de Lokossa avec une orientation vers les systèmes embarqués et le développement logiciel',
        achievements: [
            'Projets académiques',
            'Stage chez Rab Tech',
            'Projet de fin d\'études mobile'
        ],
        technologies: ['Flutter', 'Arduino', 'PHP', 'Java'],
        color: 'bg-red-500',
        icon: GraduationCapIcon
    },
    {
        year: '2023',
        title: 'Développeur mobile confirmé',
        period: '2022-2023',
        description: 'Consolidation de mon expertise Flutter à travers des projets personnels et professionnels. Forte autonomie sur le mobile.',
        achievements: [
            'Création d\'applications Flutter',
            'Déploiement de projets réels',
            'Optimisation d\'expériences utilisateurs'
        ],
        technologies: ['Flutter', 'Dart'],
        color: 'bg-blue-500',
        icon: BadgeCheck
    },
    {
        year: '2024',
        title: 'Explorateur du web fullstack',
        period: '2023-2024',
        description: 'Solide côté mobile, je commence à élargir mon champ de compétences vers le développement web moderne, avec Vue.js et Laravel.',
        achievements: [
            'Création d\'interfaces Vue.js',
            'Back-end avec Laravel & Node.js',
            'Approfondissement de Tailwind et Inertia.js'
        ],
        technologies: ['Vue.js', 'Laravel', 'Node.js', 'Tailwind CSS', 'Inertia.js'],
        color: 'bg-green-500',
        icon: CodeXml
    },
    {
        year: '2025',
        title: 'Développeur mobile expert & fullstack en progression',
        period: '2024-2025',
        description: 'Je maîtrise le développement mobile Flutter et je construis désormais des solutions complètes avec back-end et front-end web.',
        achievements: [
            'Création de plusieurs applications assisté par l\'ia dans divers domaines '
            // 'Création d’Aivoka (assistant juridique)',
            // 'Task Priority (gestionnaire de tâches)',
            // 'Application pour contrôle des véhicules non conformes',
            // 'Apps métiers pour médecins et agriculteurs'
        ],
        technologies: ['Flutter', 'Vue.js', 'Laravel', 'Pinia', 'Node.js'],
        color: 'bg-yellow-500',
        icon: CodeXml
    }



]);

// Valeurs personnelles
const values = ref([
    {
        title: 'Innovation',
        description: 'Toujours à la recherche de nouvelles solutions créatives et de technologies émergentes pour repousser les limites du possible.',
        bgColor: 'bg-blue-500',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
        title: 'Qualité',
        description: 'Engagement envers l\'excellence dans chaque ligne de code, chaque design et chaque interaction utilisateur.',
        bgColor: 'bg-green-500',
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
        title: 'Apprentissage',
        description: 'Curiosité constante et passion pour l\'apprentissage continu dans un domaine en perpétuelle évolution.',
        bgColor: 'bg-purple-500',
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    }
]);

// Références pour les animations
const timelineItems = ref([]);
const valueCards = ref([]);

// Fonction pour faire défiler la timeline horizontale
const scrollTimeline = (direction) => {
    const container = document.querySelector('.timeline-scroll-container');
    const scrollAmount = 300; // Largeur d'une carte

    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
};

// Animation au scroll avec Intersection Observer
onMounted(() => {
    // Configuration de l'Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Observer pour les éléments de timeline mobile
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                timelineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer pour les cartes de valeurs
    const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.dataset.index);
                setTimeout(() => {
                    entry.target.classList.add('animate-bounce-in');
                }, index * 150); // Délai progressif
                valueObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Appliquer les observers
    if (timelineItems.value) {
        timelineItems.value.forEach(item => {
            if (item) timelineObserver.observe(item);
        });
    }

    if (valueCards.value) {
        valueCards.value.forEach(card => {
            if (card) valueObserver.observe(card);
        });
    }
});
</script>

<style scoped>
/* Timeline scrollable */
.timeline-scroll-container {
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    padding: 40px 0;
}

.timeline-scroll-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}

.animate-fade-in {
    animation: fadeInUp 0.6s ease-out forwards;
}

.animate-bounce-in {
    animation: bounceIn 0.6s ease-out forwards;
}

/* Hover effects pour les cartes */
.timeline-card {
    transition: all 0.3s ease;
}

.timeline-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.value-card {
    transition: all 0.3s ease;
    opacity: 0; /* Commencer invisible pour l'animation */
}

.value-card:hover {
    transform: translateY(-5px);
}
</style>
