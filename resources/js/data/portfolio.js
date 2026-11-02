// Contenu du portfolio : modifier ce fichier suffit pour ajouter un projet,
// changer un statut ou remplacer des captures.

const projectImages = import.meta.glob('../Assets/projects/*.webp', { eager: true, import: 'default' });
const skillImages = import.meta.glob('../Assets/skills/*.webp', { eager: true, import: 'default' });

const projectImg = (name) => projectImages[`../Assets/projects/${name}.webp`];
const skillImg = (name) => skillImages[`../Assets/skills/${name}.webp`];

export const profile = {
    firstName: 'Moïse',
    fullName: 'Moïse Philippe Mahma',
    shortName: 'Moïse Mahma',
    email: 'momodev64@gmail.com',
    phone: '+229 01 50 82 43 48',
    location: 'Abomey-Calavi, Bénin',
};

// À compléter avec les vraies adresses de profil
export const socials = [
    { name: 'GitHub', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'WhatsApp', url: 'https://wa.me/2290150824348' },
];

export const stack = ['Flutter', 'Dart', 'Firebase', 'Vue.js', 'Nuxt.js', 'Next.js', 'TypeScript', 'Laravel', 'Node.js', 'Tailwind', 'Arduino'];

export const stats = [
    { value: '4+', label: "Années d'expérience", text: 'En développement mobile Flutter, en entreprise.' },
    { value: '10', label: 'Réalisations', text: 'Fintech, santé, billetterie, immobilier, e-commerce, IoT…' },
    { value: '3', label: 'Entreprises', text: 'Twof Technologies, Digit Consults, Rab Tech.' },
];

export const skills = [
    {
        title: 'Applications mobiles',
        text: "Ma spécialité depuis 4 ans. Applications Android et iOS avec Flutter : paiements, géolocalisation, notifications, biométrie et temps réel, jusqu'à la publication sur Google Play.",
        tags: ['Flutter', 'Dart', 'Bloc', 'GetX', 'Firebase', 'Google Maps', 'Google Play'],
        image: skillImg('skill-mobile'),
        alt: 'Écrans de plusieurs applications mobiles développées par Moïse',
        bg: 'bg-ph1',
    },
    {
        title: 'Frontend web',
        text: "Interfaces web modernes, rapides et responsives avec l'écosystème Vue et React.",
        tags: ['Vue.js', 'Nuxt.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        image: skillImg('skill-frontend'),
        alt: 'Aperçu du portfolio Momodev dans un navigateur',
        bg: 'bg-ph3',
    },
    {
        title: 'Backend & API',
        text: 'API REST et back-offices pour alimenter applications mobiles et sites web.',
        tags: ['Laravel', 'PHP', 'Node.js', 'Express.js', 'REST API'],
        image: skillImg('skill-backend'),
        alt: 'Routes API Laravel et réponse JSON',
        bg: 'bg-[#161616]',
    },
    {
        title: 'Électronique & IoT',
        text: "Ma formation d'origine en informatique industrielle : microcontrôleurs, capteurs et objets connectés, supervisés en temps réel depuis une application mobile.",
        tags: ['Arduino', 'Capteurs', 'Transmission sans fil', 'Systèmes embarqués', 'Supervision mobile'],
        image: skillImg('skill-iot'),
        alt: 'Schéma du système aquaponique : capteurs, Arduino, liaison sans fil et application de supervision',
        bg: 'bg-hero',
    },
];

export const experiences = [
    { period: "Juil. 2025 — aujourd'hui", title: 'Développeur mobile', place: 'Twof Technologies · Abomey-Calavi', text: 'Apps Flutter multiplateformes : APIs, paiements, cartes, biométrie, temps réel, builds et distribution Android.', current: true },
    { period: 'Mars 2023 — juin 2024', title: 'Développeur mobile', place: 'Digit Consults · Cotonou', text: "Conception d'apps, optimisation des performances, collaboration avec les équipes UX/UI et API, méthode agile." },
    { period: 'Mars — juin 2022', title: 'Stagiaire développeur', place: 'Rab Tech · Cotonou', text: "Développement d'une application mobile." },
    { period: '2019 — 2022', title: 'Licence Informatique Industrielle', place: 'INSTI Lokossa', text: 'Systèmes embarqués et logiciel. Soutenance : système aquaponique intelligent. Bac scientifique en 2019, Collège Chaminade, Natitingou.' },
];

const shots = (prefix, list) => list.map(([file, label]) => ({ src: projectImg(`${prefix}-${file}`), label }));

// featured: true = carte avec visuel dans la grille ; sinon ligne dans « Autres projets ».
// storeUrl : lien Google Play (le bouton n'apparaît que s'il est renseigné).
export const projects = [
    {
        id: 'ticketnid', name: 'TicketNID', cat: 'Billetterie', featured: true,
        type: 'Application mobile Flutter', role: "Développement complet de l'app mobile", status: '[Statut à préciser]',
        summary: "Billetterie événementielle : achat, espace organisateur, scan QR des tickets à l'entrée et vérification d'identité.",
        intro: 'Plateforme de billetterie événementielle réunissant acheteurs, organisateurs et validateurs dans une seule application.',
        bullets: [
            "Développement complet de l'application mobile pour les acheteurs, organisateurs et validateurs d'événements.",
            'Parcours organisateur : création de pages, gestion des événements, suivi des ventes, historiques et demandes de retrait.',
            "Espace validateur avec scanner QR Code pour contrôler les tickets à l'entrée.",
            "Vérification d'identité pour sécuriser les opérations sensibles, notamment les retraits.",
            'Deep links et intégration de Mobile Scanner et Flutter Quill.',
        ],
        cardTags: ['Flutter', 'QR Code', 'Deep links'],
        tags: ['Flutter', 'Dart', 'QR Code', 'Mobile Scanner', 'Flutter Quill', 'Deep links'],
        bg: 'bg-ph3', image: projectImg('ticketnid'),
        alt: "Écrans de TicketNID : détail d'un événement, accueil et paiement mobile",
        shots: shots('ticketnid', [['11', 'Accueil'], ['7', 'Événements'], ['9', 'Détail et tickets'], ['12', 'Paiement mobile'], ['10', 'Espace validateur']]),
    },
    {
        id: 'isbaq', name: 'ISBAQ', cat: 'Fintech', featured: true,
        type: 'Application mobile Flutter', role: "Développement complet de l'app mobile", status: '[Statut à préciser]',
        summary: 'Services financiers : authentification, KYC, gestion des cartes, PIN, biométrie, récompenses et statistiques.',
        intro: 'Application de services financiers : comptes, cartes, sécurité et récompenses, connectée aux APIs métier.',
        bullets: [
            "Développement complet de l'application et intégration des fonctionnalités métier via les APIs backend.",
            'Authentification, KYC, gestion des cartes, PIN, biométrie, récompenses et statistiques.',
            'Notifications, support utilisateur et gestion des différents états des opérations.',
            'Cache et persistance locale pour une expérience fluide, même avec une connexion instable.',
        ],
        cardTags: ['Flutter', 'Biométrie', 'KYC'],
        tags: ['Flutter', 'KYC', 'Biométrie', 'Notifications', 'Cache local', 'API REST'],
        bg: 'bg-ph2', image: null, placeholder: '[Captures ISBAQ]', shots: [],
    },
    {
        id: 'lokaplux', name: 'Lokaplux', cat: 'Immobilier', featured: true,
        type: 'Application mobile Flutter', role: "Développement complet de l'app mobile", status: '[Statut à préciser]',
        summary: 'Visites, demandes de location, contrats, échéances et paiements, sur une architecture modulaire feature-first.',
        intro: 'Application immobilière pour consulter des biens, réserver des visites, gérer sa location et commander des services pour son logement.',
        bullets: [
            'Consultation de biens, réservation de visites et demandes de location.',
            'Contrats, échéances et paiements, avec les espaces de gestion locative associés.',
            'Avis, cache local, deep links et parcours de réservation.',
            'Catalogue de services (ameublement, déménagement, maintenance, nettoyage…) avec demandes validées par le propriétaire.',
            'Architecture modulaire feature-first basée sur GetX, Dio et GetStorage.',
        ],
        cardTags: ['Flutter', 'GetX', 'Dio'],
        tags: ['Flutter', 'GetX', 'Dio', 'GetStorage', 'Feature-first', 'Deep links'],
        bg: 'bg-ph3', image: projectImg('lokaplux'),
        alt: "Écrans de Lokaplux : connexion, fiche d'un appartement et catalogue de services",
        shots: shots('lokaplux', [['18', 'Connexion'], ['19', 'Fiche du bien'], ['20', 'Avis'], ['17', 'Services'], ['21', 'Maintenance']]),
    },
    {
        id: 'woononvi', name: 'Woononvi', cat: 'Covoiturage', featured: true,
        type: 'Application mobile Flutter', role: 'Développement complet et publication', status: 'Publiée sur Google Play', storeUrl: '',
        summary: 'Publier, rechercher et réserver des trajets avec suivi en temps réel. Publiée et maintenue sur Google Play.',
        intro: 'Application de covoiturage pour publier, rechercher et réserver des trajets, avec suivi en temps réel.',
        bullets: [
            "Développement complet de l'application : publication, recherche et réservation de trajets.",
            'Géolocalisation, Google Maps et suivi des trajets en temps réel.',
            'Profils, réservations, notifications et gestion des trajets.',
            'Préparation, publication et maintenance sur Google Play, avec plusieurs mises à jour déployées.',
        ],
        cardTags: ['Flutter', 'Google Maps', 'Temps réel'],
        tags: ['Flutter', 'Google Maps', 'Géolocalisation', 'Temps réel', 'Notifications', 'Google Play'],
        bg: 'bg-ph1', image: projectImg('woononvi'),
        alt: "Écrans de Woononvi : choix de l'emplacement, accueil et détail d'un trajet",
        shots: shots('woononvi', [['15', 'Accueil'], ['14', "Choix de l'emplacement"], ['16b', 'Détail du trajet']]),
    },
    {
        id: 'atokpa', name: 'Atokpa', cat: 'E-commerce', featured: true,
        type: 'Application mobile Flutter', role: "Développement de l'app mobile", status: 'Test fermé sur Google Play', storeUrl: '',
        summary: 'Catalogue, panier, commandes et paiement KKiaPay. En test fermé sur Google Play.',
        intro: 'Application e-commerce : catalogue, panier, commandes et paiement mobile, avec choix du point de livraison sur carte.',
        bullets: [
            "Consultation des produits, panier et parcours d'achat complet.",
            'Intégration du paiement KKiaPay et des APIs de la plateforme.',
            'Interfaces du compte utilisateur et suivi des commandes.',
            'Adresses de livraison avec sélection du point sur Google Maps.',
        ],
        cardTags: ['Flutter', 'KKiaPay', 'API REST'],
        tags: ['Flutter', 'KKiaPay', 'API REST', 'Google Maps', 'Panier'],
        bg: 'bg-ph2', image: projectImg('atokpa'),
        alt: "Écrans d'Atokpa : connexion, accueil boutique et ajout d'adresse de livraison",
        shots: shots('atokpa', [['4', 'Connexion'], ['2', 'Accueil boutique'], ['3', 'Fiche produit'], ['6', 'Adresse de livraison'], ['5', 'Point sur la carte']]),
    },
    {
        id: 'vignon', name: 'Vignon', cat: 'Santé', featured: true,
        type: 'Application mobile', role: "Développement de l'app mobile", status: 'Publiée sur Google Play', storeUrl: '',
        summary: 'Suivi de grossesse semaine par semaine : contacts prénatals, calendrier, rappels et articles par trimestre.',
        intro: "Application de suivi de grossesse : l'évolution du bébé semaine par semaine, le calendrier des contacts prénatals, des rappels et des articles adaptés à chaque trimestre.",
        bullets: [
            "Accueil semaine par semaine avec la taille et le poids estimés du bébé, jusqu'au terme.",
            'Suivi prénatal en frise chronologique et en calendrier : contacts recommandés, statut (en retard, fait) et prise de rendez-vous.',
            'Rappels personnalisés (prise de sang, traitements…) avec notification au moment choisi : 30 minutes avant, la veille, une semaine avant…',
            'Articles classés par trimestre, avec recherche et favoris.',
            "Mode invité, profil de grossesse (date d'accouchement, fiche médicale, premier enfant) et gestion de plusieurs grossesses.",
            'Navigation vers les spécialistes et la messagerie, dans une interface en thème sombre.',
        ],
        cardTags: ['Mobile', 'Rappels', 'Calendrier'],
        tags: ['Mobile', 'Notifications', 'Calendrier', 'Mode invité', 'Thème sombre'],
        bg: 'bg-ph1', image: projectImg('vignon'),
        alt: 'Écrans de Vignon : suivi prénatal, accueil semaine par semaine et articles',
        shots: shots('vignon', [['26', 'Accueil'], ['22', 'Suivi prénatal'], ['23', 'Calendrier'], ['27', 'Nouveau rappel'], ['24', 'Articles'], ['25', 'Profil de grossesse']]),
    },
    {
        id: 'izitailor', name: 'IziTailor', cat: 'Couture', listLabel: 'Mobile · Couture',
        type: 'Application mobile Flutter', role: 'Conception et développement des interfaces', status: '[Statut à préciser]',
        summary: 'Plateforme pour couturiers, conçue from scratch : mensurations, modèles, catalogue, clients et mise en avant.',
        intro: 'Plateforme de mise en relation dans la couture, pensée pour les professionnels et leur activité au quotidien.',
        bullets: [
            'Conception et développement from scratch des interfaces mobiles pour les couturiers.',
            'Inscription, gestion des mensurations, des modèles et du catalogue.',
            'Gestion des clients et souscription à des services de mise en avant.',
            "Interfaces de paiement et de suivi de l'activité du professionnel.",
        ],
        tags: ['Flutter', 'UI design', 'Paiements', 'Catalogue'],
        bg: 'bg-ph2', image: null, placeholder: '[Captures IziTailor]', shots: [],
    },
    {
        id: 'aquaponie', name: 'Système aquaponique', cat: 'IoT · Arduino', listLabel: 'IoT · Arduino',
        type: 'Système IoT + application mobile', role: 'Conception et développement', status: 'Projet de soutenance, 2022',
        summary: 'Projet de soutenance : capteurs environnementaux, transmission sans fil et application mobile de supervision temps réel avec alertes.',
        intro: 'Système intelligent de production aquaponique, combinant aquaculture et culture hydroponique, supervisé à distance.',
        bullets: [
            "Monitoring et automatisation d'un système aquaponique.",
            'Intégration de capteurs environnementaux.',
            'Transmission sans fil des mesures.',
            "Application mobile de supervision en temps réel avec système d'alertes.",
        ],
        tags: ['Arduino', 'Capteurs', 'Transmission sans fil', 'Systèmes embarqués', 'Application mobile'],
        bg: 'bg-hero', image: skillImg('skill-iot'),
        alt: 'Schéma du système aquaponique : capteurs, Arduino, liaison sans fil et application de supervision',
        shots: [],
    },
    {
        id: 'aivoka', name: 'Aivoka', cat: 'Juridique', listLabel: 'Mobile · Juridique',
        type: 'Application mobile', role: 'Conception et développement', status: '[Statut à préciser]',
        summary: 'Application juridique : textes de lois en vigueur au Bénin et assistant conversationnel pour des réponses personnalisées.',
        intro: 'Application juridique pour consulter les textes de lois en vigueur au Bénin et obtenir des réponses personnalisées.',
        bullets: ['Consultation des textes de lois en vigueur au Bénin.', 'Assistant conversationnel pour obtenir des informations personnalisées.'],
        tags: ['Mobile', 'Assistant conversationnel', 'API REST'],
        bg: 'bg-ph3', image: null, placeholder: '[Captures Aivoka]', shots: [],
    },
    {
        id: 'taskpriority', name: 'Task Priority', cat: 'Productivité', listLabel: 'Mobile · Productivité',
        type: 'Application mobile iOS et Android', role: 'Conception et développement', status: 'Publiée sur Google Play', storeUrl: '',
        summary: 'Gestion des tâches par importance et urgence, avec progression, calendrier et notes. Publiée sur Google Play.',
        intro: 'Application de gestion des tâches qui classe chaque tâche selon son importance et son urgence, avec suivi de progression, calendrier et notes.',
        bullets: [
            "Catégories inspirées de la matrice d'Eisenhower : important et urgent, important mais pas urgent, pas important mais urgent.",
            'Progression de chaque tâche en pourcentage, avec filtres par type.',
            'Vue calendrier à la semaine et statuts À faire, En cours, Terminé, avec les dates de début et de fin.',
            'Notes personnelles et onglet Suggestions qui transforme une idée en tâche structurée.',
            'Connexion par email, Google ou Apple, interface multilingue et chiffrement des données à la configuration du compte.',
        ],
        tags: ['Mobile', 'iOS', 'Android', 'Google Sign-In', 'Apple Sign-In', 'Chiffrement', 'Multilingue'],
        bg: 'bg-ph3', image: projectImg('taskpriority'),
        alt: 'Écrans de Task Priority : connexion, catégories de priorité et tâches du jour',
        shots: shots('taskpriority', [['30c', 'Connexion'], ['28c', 'Catégories et progression'], ['33c', 'Tâches du jour'], ['29c', 'Notes'], ['32c', 'Suggestions'], ['31c', 'Chiffrement des données']]),
    },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
export const heroProject = projects.find((p) => p.id === 'atokpa');
