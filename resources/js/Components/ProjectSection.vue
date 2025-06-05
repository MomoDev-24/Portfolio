<template>
    <section id="projects" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <!-- En-tête de section -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                    Mes Réalisations
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Découvrez une sélection de projets sur lesquels j'ai travaillé, illustrant mon expertise et ma créativité
                </p>
            </div>

            <!-- Filtres de catégories -->
            <div class="flex flex-wrap justify-center gap-3 mb-12">
                <button
                    v-for="category in categories"
                    :key="category.id"
                    @click="setActiveCategory(category.id)"
                    :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
            activeCategory === category.id
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          ]"
                >
                    {{ category.name }}
                </button>
            </div>

            <!-- Grille de projets -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="project in filteredProjects"
                    :key="project.id"
                    class="project-card opacity-0"
                    ref="projectCards"
                    :data-category="project.category"
                >
                    <div
                        class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                        @click="openProjectDetails(project)"
                    >
                        <!-- Image du projet avec overlay au hover -->
                        <div class="relative overflow-hidden project-image-container">
                            <img
                                :src="project.image"
                                :alt="project.title"
                                class="w-full h-64 object-cover object-center transition-transform duration-700"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 flex items-end p-6">
                                <button class="px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-medium transform translate-y-4 opacity-0 transition-all duration-300">
                                    Voir le projet
                                </button>
                            </div>
                        </div>

                        <!-- Informations du projet -->
                        <div class="p-6 flex-1 flex flex-col">
                            <div class="flex items-center justify-between mb-3">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {{ getCategoryName(project.category) }}
                </span>
                                <span class="text-sm text-gray-500">{{ project.year }}</span>
                            </div>
                            <h3 class="text-xl font-bold mb-2 text-gray-800">{{ project.title }}</h3>
                            <p class="text-gray-600 mb-4 flex-1">{{ project.shortDescription }}</p>

                            <!-- Technologies utilisées -->
                            <div class="flex flex-wrap gap-2 mb-4">
                <span
                    v-for="tech in project.technologies"
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

            <!-- Message si aucun projet ne correspond au filtre -->
            <div v-if="filteredProjects.length === 0" class="text-center py-12">
                <p class="text-gray-500 text-lg">Aucun projet ne correspond à cette catégorie pour le moment.</p>
            </div>

            <!-- Modal de détails du projet -->
            <div
                v-if="selectedProject"
                class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 project-modal"
                @click.self="closeProjectDetails"
            >
                <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <!-- Header avec bouton de fermeture -->
                    <div class="flex justify-between items-center p-6 border-b">
                        <h3 class="text-2xl font-bold text-gray-800">{{ selectedProject.title }}</h3>
                        <button
                            @click="closeProjectDetails"
                            class="text-gray-500 hover:text-gray-700"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Contenu du projet -->
                    <div class="p-6">
                        <!-- Galerie d'images -->
                        <div class="mb-8">
                            <div class="relative h-80 mb-4">
                                <img
                                    :src="selectedProject.image"
                                    :alt="selectedProject.title"
                                    class="w-full h-full object-cover object-center rounded-lg"
                                />
                            </div>
                            <div class="grid grid-cols-4 gap-2">
                                <div
                                    v-for="(image, index) in selectedProject.gallery || []"
                                    :key="index"
                                    class="h-20 cursor-pointer rounded-md overflow-hidden"
                                >
                                    <img
                                        :src="image"
                                        :alt="`${selectedProject.title} - image ${index + 1}`"
                                        class="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        <!-- Informations détaillées -->
                        <div class="grid md:grid-cols-3 gap-8">
                            <div class="md:col-span-2">
                                <h4 class="text-xl font-semibold mb-4 text-gray-800">À propos du projet</h4>
                                <div class="prose text-gray-600">
                                    <p>{{ selectedProject.description }}</p>
                                </div>

                                <!-- Défis et solutions -->
                                <div class="mt-6">
                                    <h5 class="text-lg font-semibold mb-2 text-gray-800">Défis et solutions</h5>
                                    <ul class="space-y-2 text-gray-600">
                                        <li v-for="(challenge, index) in selectedProject.challenges" :key="index" class="flex items-start">
                                            <span class="text-blue-500 mr-2">•</span>
                                            <span>{{ challenge }}</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Résultats -->
                                <div class="mt-6">
                                    <h5 class="text-lg font-semibold mb-2 text-gray-800">Résultats</h5>
                                    <p class="text-gray-600">{{ selectedProject.results }}</p>
                                </div>
                            </div>

                            <!-- Sidebar avec détails techniques -->
                            <div class="bg-gray-50 p-6 rounded-lg">
                                <h4 class="text-lg font-semibold mb-4 text-gray-800">Détails du projet</h4>

                                <div class="space-y-4">
                                    <div>
                                        <h5 class="text-sm font-medium text-gray-500 mb-1">Client</h5>
                                        <p class="text-gray-800">{{ selectedProject.client }}</p>
                                    </div>

                                    <div>
                                        <h5 class="text-sm font-medium text-gray-500 mb-1">Année</h5>
                                        <p class="text-gray-800">{{ selectedProject.year }}</p>
                                    </div>

                                    <div>
                                        <h5 class="text-sm font-medium text-gray-500 mb-1">Catégorie</h5>
                                        <p class="text-gray-800">{{ getCategoryName(selectedProject.category) }}</p>
                                    </div>

                                    <div>
                                        <h5 class="text-sm font-medium text-gray-500 mb-1">Technologies</h5>
                                        <div class="flex flex-wrap gap-2 mt-2">
                      <span
                          v-for="tech in selectedProject.technologies"
                          :key="tech"
                          class="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs"
                      >
                        {{ tech }}
                      </span>
                                        </div>
                                    </div>

                                    <div v-if="selectedProject.link">
                                        <h5 class="text-sm font-medium text-gray-500 mb-1">Lien</h5>
                                        <a
                                            :href="selectedProject.link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="text-blue-600 hover:underline"
                                        >
                                            Visiter le site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Footer avec boutons d'action -->
                    <div class="p-6 border-t flex justify-between items-center">
                        <button
                            @click="closeProjectDetails"
                            class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                        >
                            Fermer
                        </button>
                        <a
                            v-if="selectedProject.link"
                            :href="selectedProject.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Voir le projet en ligne
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import placeholder from "../Assets/img2.svg";
// const placeholder = "../"

// Catégories de projets
const categories = ref([
    { id: 'all', name: 'Tous les projets' },
    { id: 'web', name: 'Sites Web' },
    { id: 'mobile', name: 'Applications Mobile' },
    { id: 'design', name: 'Design UI/UX' },
    { id: 'ecommerce', name: 'E-commerce' }
]);


// Catégorie active
const activeCategory = ref('all');

// Référence aux cartes de projet pour les animations
const projectCards = ref([]);

// Projet sélectionné pour la modal
const selectedProject = ref(null);

// Liste des projets
const projects = ref([
    {
        id: 1,
        title: 'Site Vitrine Entreprise Tech',
        shortDescription: 'Refonte complète du site vitrine d\'une entreprise de technologie avec design moderne et responsive.',
        description: 'Ce projet consistait à repenser entièrement l\'identité web d\'une entreprise spécialisée dans les solutions cloud. L\'objectif était de créer un site moderne, rapide et parfaitement adapté à tous les appareils, tout en mettant en avant les services et l\'expertise de l\'entreprise.',
        image: `${placeholder}?height=400&width=600`,
        gallery: [
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`
        ],
        category: 'web',
        technologies: ['Vue.js', 'Tailwind CSS', 'GSAP', 'Netlify'],
        year: '2023',
        client: 'TechCloud Solutions',
        link: 'https://example.com',
        challenges: [
            'Améliorer la vitesse de chargement du site de 40%',
            'Créer une expérience utilisateur cohérente sur tous les appareils',
            'Intégrer un système de blog performant et facile à gérer'
        ],
        results: 'Le nouveau site a permis d\'augmenter le taux de conversion de 25% et d\'améliorer significativement l\'engagement des utilisateurs. Le temps passé sur le site a augmenté de 45% et le taux de rebond a diminué de 30%.'
    },
    {
        id: 2,
        title: 'Application Mobile de Fitness',
        shortDescription: 'Application mobile permettant de suivre ses activités sportives et de créer des programmes d\'entraînement personnalisés.',
        description: 'Développement d\'une application mobile complète dédiée au fitness et au bien-être. L\'application permet aux utilisateurs de suivre leurs activités physiques, de créer des programmes d\'entraînement personnalisés et de suivre leur progression au fil du temps.',
        image: `${placeholder}?height=400&width=600`,
        gallery: [
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`
        ],
        category: 'mobile',
        technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
        year: '2023',
        client: 'FitLife',
        link: 'https://example.com',
        challenges: [
            'Synchronisation des données en temps réel entre différents appareils',
            'Optimisation des performances pour une expérience fluide',
            'Intégration avec des appareils connectés (montres, bracelets)'
        ],
        results: 'L\'application a été téléchargée plus de 50 000 fois dans les trois premiers mois suivant son lancement, avec un taux de rétention de 65% après 30 jours.'
    },
    {
        id: 3,
        title: 'Refonte UI/UX Plateforme SaaS',
        shortDescription: 'Refonte complète de l\'interface utilisateur d\'une plateforme SaaS de gestion de projet.',
        description: 'Ce projet impliquait la refonte complète de l\'interface utilisateur et de l\'expérience utilisateur d\'une plateforme SaaS de gestion de projet. L\'objectif était de moderniser l\'apparence, d\'améliorer l\'ergonomie et de simplifier les flux de travail pour les utilisateurs.',
        image: `${placeholder}?height=400&width=600`,
        gallery: [
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`
        ],
        category: 'design',
        technologies: ['Figma', 'Adobe XD', 'Prototypage', 'User Testing'],
        year: '2022',
        client: 'ProjectFlow',
        link: 'https://example.com',
        challenges: [
            'Simplifier une interface complexe sans sacrifier les fonctionnalités',
            'Créer un système de design cohérent et évolutif',
            'Améliorer l\'accessibilité pour tous les utilisateurs'
        ],
        results: 'La nouvelle interface a permis de réduire de 40% le temps nécessaire pour accomplir les tâches courantes et a augmenté la satisfaction des utilisateurs de 35% selon les enquêtes post-refonte.'
    },
    {
        id: 4,
        title: 'Boutique en ligne Artisanat',
        shortDescription: 'Création d\'une boutique en ligne pour un collectif d\'artisans avec système de paiement sécurisé.',
        description: 'Développement d\'une plateforme e-commerce complète pour un collectif d\'artisans locaux. Le site permet aux artisans de présenter et vendre leurs créations, avec un système de paiement sécurisé et une gestion des stocks en temps réel.',
        image: `${placeholder}?height=400&width=600`,
        gallery: [
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`
        ],
        category: 'ecommerce',
        technologies: ['Shopify', 'Liquid', 'JavaScript', 'Stripe'],
        year: '2022',
        client: 'Artisans Collectif',
        link: 'https://example.com',
        challenges: [
            'Créer une expérience d\'achat fluide et intuitive',
            'Mettre en place un système de gestion multi-vendeurs',
            'Optimiser les images pour un chargement rapide sans sacrifier la qualité'
        ],
        results: 'Le site a généré plus de 100 000€ de ventes dans les six premiers mois, avec un taux de conversion de 3.5%, bien au-dessus de la moyenne du secteur.'
    },
    {
        id: 5,
        title: 'Dashboard Analytics',
        shortDescription: 'Dashboard interactif pour visualiser et analyser les données de performance d\'une entreprise.',
        description: 'Conception et développement d\'un tableau de bord analytique interactif permettant aux dirigeants d\'entreprise de visualiser et d\'analyser les données de performance en temps réel. Le dashboard inclut des graphiques personnalisables, des filtres avancés et des alertes automatisées.',
        image: `${placeholder}?height=400&width=600`,
        gallery: [
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`
        ],
        category: 'web',
        technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
        year: '2021',
        client: 'DataViz Corp',
        link: 'https://example.com',
        challenges: [
            'Traiter et visualiser de grandes quantités de données en temps réel',
            'Créer des visualisations intuitives pour des données complexes',
            'Assurer la sécurité des données sensibles de l\'entreprise'
        ],
        results: 'Le dashboard a permis à l\'entreprise d\'identifier des opportunités d\'optimisation qui ont conduit à une réduction des coûts de 15% et une augmentation de la productivité de 20%.'
    },
    {
        id: 6,
        title: 'Application de Livraison',
        shortDescription: 'Application mobile permettant de commander et suivre la livraison de repas en temps réel.',
        description: 'Développement d\'une application mobile complète pour la commande et la livraison de repas. L\'application permet aux utilisateurs de parcourir les restaurants à proximité, de passer commande et de suivre leur livraison en temps réel sur une carte.',
        image: `${placeholder}?height=400&width=600`,
        gallery: [
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`,
            `${placeholder}?height=200&width=300`
        ],
        category: 'mobile',
        technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
        year: '2021',
        client: 'QuickBite',
        link: 'https://example.com',
        challenges: [
            'Intégration de la géolocalisation en temps réel',
            'Gestion des pics de trafic pendant les heures de pointe',
            'Création d\'une interface intuitive pour trois types d\'utilisateurs différents (clients, livreurs, restaurants)'
        ],
        results: 'L\'application a atteint 100 000 utilisateurs actifs mensuels en moins d\'un an et traite maintenant plus de 5 000 commandes par jour.'
    }
]);

// Projets filtrés selon la catégorie active
const filteredProjects = computed(() => {
    if (activeCategory.value === 'all') {
        return projects.value;
    }
    return projects.value.filter(project => project.category === activeCategory.value);
});

// Fonction pour définir la catégorie active
const setActiveCategory = (categoryId) => {
    activeCategory.value = categoryId;
};

// Fonction pour obtenir le nom d'une catégorie à partir de son ID
const getCategoryName = (categoryId) => {
    const category = categories.value.find(cat => cat.id === categoryId);
    return category ? category.name : '';
};

// Fonction pour ouvrir les détails d'un projet
const openProjectDetails = (project) => {
    selectedProject.value = project;
    document.body.style.overflow = 'hidden'; // Empêcher le défilement du body
};

// Fonction pour fermer les détails d'un projet
const closeProjectDetails = () => {
    selectedProject.value = null;
    document.body.style.overflow = ''; // Réactiver le défilement du body
};

// Animation des cartes de projet au scroll
onMounted(() => {
    // Configuration de l'Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Observer pour les cartes de projet
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-fade-in');
                }, Math.random() * 300); // Délai aléatoire pour un effet plus naturel
                projectObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Appliquer l'observer après un court délai pour s'assurer que le DOM est prêt
    setTimeout(() => {
        if (projectCards.value) {
            projectCards.value.forEach(card => {
                if (card) projectObserver.observe(card);
            });
        }
    }, 100);
});

// Réinitialiser les animations lorsque la catégorie change
watch(activeCategory, () => {
    // Petit délai pour laisser le temps au DOM de se mettre à jour
    setTimeout(() => {
        if (projectCards.value) {
            projectCards.value.forEach((card, index) => {
                if (card) {
                    card.classList.remove('animate-fade-in');
                    card.style.opacity = '0';

                    setTimeout(() => {
                        card.classList.add('animate-fade-in');
                    }, 50 + index * 100); // Délai progressif
                }
            });
        }
    }, 50);
});
</script>

<style scoped>
/* Animation d'apparition des projets */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
}

/* Effet hover sur les cartes de projet */
.project-image-container:hover img {
    transform: scale(1.05);
}

.project-image-container:hover .absolute {
    opacity: 1;
}

.project-image-container:hover button {
    transform: translateY(0);
    opacity: 1;
}

/* Animation pour la modal */
@keyframes modalFadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.project-modal {
    animation: modalFadeIn 0.3s ease-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .project-image-container {
        height: 200px;
    }
}
</style>
