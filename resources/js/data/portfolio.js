// Contenu du portfolio : modifier ce fichier suffit pour ajouter un projet,
// changer un statut ou remplacer des captures.
// Les textes affichés sont bilingues : { fr: '…', en: '…' } (voir useI18n().tr).

const projectImages = import.meta.glob('../Assets/projects/*.webp', { eager: true, import: 'default' });
const skillImages = import.meta.glob('../Assets/skills/*.webp', { eager: true, import: 'default' });

const projectImg = (name) => projectImages[`../Assets/projects/${name}.webp`];
const skillImg = (name) => skillImages[`../Assets/skills/${name}.webp`];

const STATUS_INTERNAL = { fr: 'Test interne', en: 'Internal testing' };
const ON_PLAY = { fr: 'Publiée sur Google Play', en: 'Live on Google Play' };
const FLUTTER_APP = { fr: 'Application mobile Flutter', en: 'Flutter mobile app' };
const MOBILE_APP = { fr: 'Application mobile', en: 'Mobile app' };
const FULL_DEV = { fr: "Développement complet de l'app mobile", en: 'Full mobile app development' };
const DESIGN_DEV = { fr: 'Conception et développement', en: 'Design and development' };
const REST_API = { fr: 'API REST', en: 'REST API' };

export const profile = {
    firstName: 'Moïse',
    fullName: 'Moïse Philippe Mahma',
    shortName: 'Moïse Mahma',
    email: 'momodev64@gmail.com',
    phone: '+229 01 50 82 43 48',
    location: { fr: 'Abomey-Calavi, Bénin', en: 'Abomey-Calavi, Benin' },
};

// À compléter avec les vraies adresses de profil
export const socials = [
    { name: 'GitHub', icon: 'github', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/2290150824348' },
];

export const stack = ['Flutter', 'Dart', 'Firebase', 'Vue.js', 'Nuxt.js', 'Next.js', 'TypeScript', 'Laravel', 'Node.js', 'Tailwind', 'Arduino'];

export const stats = [
    {
        value: '4+',
        label: { fr: "Années d'expérience", en: 'Years of experience' },
        text: { fr: 'En développement mobile Flutter, en entreprise.', en: 'Building Flutter mobile apps in companies.' },
    },
    {
        value: '10',
        label: { fr: 'Réalisations', en: 'Projects' },
        text: { fr: 'Fintech, santé, billetterie, immobilier, e-commerce, IoT…', en: 'Fintech, health, ticketing, real estate, e-commerce, IoT…' },
    },
    {
        value: '3',
        label: { fr: 'Entreprises', en: 'Companies' },
        text: 'Twof Technologies, Digit Consults, Rab Tech.',
    },
];

export const skills = [
    {
        title: { fr: 'Applications mobiles', en: 'Mobile apps' },
        text: {
            fr: "Ma spécialité depuis 4 ans. Applications Android et iOS avec Flutter : paiements, géolocalisation, notifications, biométrie et temps réel, jusqu'à la publication sur Google Play.",
            en: 'My specialty for 4 years. Android and iOS apps with Flutter: payments, geolocation, notifications, biometrics and real time, all the way to Google Play release.',
        },
        tags: ['Flutter', 'Dart', 'Bloc', 'GetX', 'Firebase', 'Google Maps', 'Google Play'],
        image: skillImg('skill-mobile'),
        alt: { fr: 'Écrans de plusieurs applications mobiles développées par Moïse', en: 'Screens from several mobile apps built by Moïse' },
        bg: 'bg-ph1',
    },
    {
        title: { fr: 'Frontend web', en: 'Web frontend' },
        text: {
            fr: "Interfaces web modernes, rapides et responsives avec l'écosystème Vue et React.",
            en: 'Modern, fast and responsive web interfaces with the Vue and React ecosystems.',
        },
        tags: ['Vue.js', 'Nuxt.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        image: skillImg('skill-frontend'),
        alt: { fr: 'Aperçu du portfolio Momodev dans un navigateur', en: 'Preview of the Momodev portfolio in a browser' },
        bg: 'bg-ph3',
    },
    {
        title: 'Backend & API',
        text: {
            fr: 'API REST et back-offices pour alimenter applications mobiles et sites web.',
            en: 'REST APIs and back offices powering mobile apps and websites.',
        },
        tags: ['Laravel', 'PHP', 'Node.js', 'Express.js', REST_API],
        image: skillImg('skill-backend'),
        alt: { fr: 'Routes API Laravel et réponse JSON', en: 'Laravel API routes and a JSON response' },
        bg: 'bg-[#161616]',
    },
    {
        title: { fr: 'Électronique & IoT', en: 'Electronics & IoT' },
        text: {
            fr: "Ma formation d'origine en informatique industrielle : microcontrôleurs, capteurs et objets connectés, supervisés en temps réel depuis une application mobile.",
            en: 'My original background in industrial computing: microcontrollers, sensors and connected devices, monitored in real time from a mobile app.',
        },
        tags: [
            'Arduino',
            { fr: 'Capteurs', en: 'Sensors' },
            { fr: 'Transmission sans fil', en: 'Wireless transmission' },
            { fr: 'Systèmes embarqués', en: 'Embedded systems' },
            { fr: 'Supervision mobile', en: 'Mobile monitoring' },
        ],
        image: skillImg('skill-iot'),
        alt: {
            fr: 'Schéma du système aquaponique : capteurs, Arduino, liaison sans fil et application de supervision',
            en: 'Diagram of the aquaponics system: sensors, Arduino, wireless link and monitoring app',
        },
        bg: 'bg-hero',
    },
];

export const experiences = [
    {
        period: { fr: "Juil. 2025 — aujourd'hui", en: 'Jul 2025 — present' },
        title: { fr: 'Développeur mobile', en: 'Mobile developer' },
        place: 'Twof Technologies · Abomey-Calavi',
        text: {
            fr: 'Apps Flutter multiplateformes : APIs, paiements, cartes, biométrie, temps réel, builds et distribution Android.',
            en: 'Cross-platform Flutter apps: APIs, payments, maps, biometrics, real time, Android builds and distribution.',
        },
        current: true,
    },
    {
        period: { fr: 'Mars 2023 — juin 2024', en: 'Mar 2023 — Jun 2024' },
        title: { fr: 'Développeur mobile', en: 'Mobile developer' },
        place: 'Digit Consults · Cotonou',
        text: {
            fr: "Conception d'apps, optimisation des performances, collaboration avec les équipes UX/UI et API, méthode agile.",
            en: 'App design and development, performance optimization, collaboration with UX/UI and API teams, agile workflow.',
        },
    },
    {
        period: { fr: 'Mars — juin 2022', en: 'Mar — Jun 2022' },
        title: { fr: 'Stagiaire développeur', en: 'Developer intern' },
        place: 'Rab Tech · Cotonou',
        text: { fr: "Développement d'une application mobile.", en: 'Built a mobile application.' },
    },
    {
        period: '2019 — 2022',
        title: { fr: 'Licence Informatique Industrielle', en: "Bachelor's in Industrial Computing" },
        place: 'INSTI Lokossa',
        text: {
            fr: 'Systèmes embarqués et logiciel. Soutenance : système aquaponique intelligent. Bac scientifique en 2019, Collège Chaminade, Natitingou.',
            en: 'Embedded systems and software. Final project: smart aquaponics system. Science baccalaureate in 2019, Collège Chaminade, Natitingou.',
        },
    },
];

const shots = (prefix, list) => list.map(([file, label]) => ({ src: projectImg(`${prefix}-${file}`), label }));

// featured: true = carte avec visuel dans la grille ; sinon ligne dans « Autres projets ».
// storeUrl : lien Google Play (le bouton n'apparaît que s'il est renseigné).
export const projects = [
    {
        id: 'ticketnid', name: 'TicketNID', featured: true,
        cat: { fr: 'Billetterie', en: 'Ticketing' },
        type: FLUTTER_APP, role: FULL_DEV, status: STATUS_INTERNAL,
        summary: {
            fr: "Billetterie événementielle : achat, espace organisateur, scan QR des tickets à l'entrée et vérification d'identité.",
            en: 'Event ticketing: purchase, organizer space, QR ticket scanning at the entrance and identity verification.',
        },
        intro: {
            fr: 'Plateforme de billetterie événementielle réunissant acheteurs, organisateurs et validateurs dans une seule application.',
            en: 'Event ticketing platform bringing buyers, organizers and validators together in a single app.',
        },
        bullets: {
            fr: [
                "Développement complet de l'application mobile pour les acheteurs, organisateurs et validateurs d'événements.",
                'Parcours organisateur : création de pages, gestion des événements, suivi des ventes, historiques et demandes de retrait.',
                "Espace validateur avec scanner QR Code pour contrôler les tickets à l'entrée.",
                "Vérification d'identité pour sécuriser les opérations sensibles, notamment les retraits.",
                'Deep links et intégration de Mobile Scanner et Flutter Quill.',
            ],
            en: [
                'Full development of the mobile app for event buyers, organizers and validators.',
                'Organizer flow: page creation, event management, sales tracking, history and withdrawal requests.',
                'Validator space with a QR code scanner to check tickets at the entrance.',
                'Identity verification to secure sensitive operations, especially withdrawals.',
                'Deep links and integration of Mobile Scanner and Flutter Quill.',
            ],
        },
        cardTags: ['Flutter', 'QR Code', 'Deep links'],
        tags: ['Flutter', 'Dart', 'QR Code', 'Mobile Scanner', 'Flutter Quill', 'Deep links'],
        bg: 'bg-ph3', image: projectImg('ticketnid'),
        alt: {
            fr: "Écrans de TicketNID : détail d'un événement, accueil et paiement mobile",
            en: 'TicketNID screens: event details, home and mobile payment',
        },
        shots: shots('ticketnid', [
            ['11', { fr: 'Accueil', en: 'Home' }],
            ['7', { fr: 'Événements', en: 'Events' }],
            ['9', { fr: 'Détail et tickets', en: 'Details and tickets' }],
            ['12', { fr: 'Paiement mobile', en: 'Mobile payment' }],
            ['10', { fr: 'Espace validateur', en: 'Validator space' }],
        ]),
    },
    {
        id: 'isbaq', name: 'ISBAQ', featured: true,
        cat: 'Fintech',
        type: FLUTTER_APP, role: FULL_DEV, status: STATUS_INTERNAL,
        summary: {
            fr: 'Services financiers : authentification, KYC, gestion des cartes, PIN, biométrie, récompenses et statistiques.',
            en: 'Financial services: authentication, KYC, card management, PIN, biometrics, rewards and statistics.',
        },
        intro: {
            fr: 'Application de services financiers : comptes, cartes, sécurité et récompenses, connectée aux APIs métier.',
            en: 'Financial services app: accounts, cards, security and rewards, connected to the business APIs.',
        },
        bullets: {
            fr: [
                "Développement complet de l'application et intégration des fonctionnalités métier via les APIs backend.",
                'Authentification, KYC, gestion des cartes, PIN, biométrie, récompenses et statistiques.',
                'Notifications, support utilisateur et gestion des différents états des opérations.',
                'Cache et persistance locale pour une expérience fluide, même avec une connexion instable.',
            ],
            en: [
                'Full app development and integration of business features through the backend APIs.',
                'Authentication, KYC, card management, PIN, biometrics, rewards and statistics.',
                'Notifications, user support and handling of every operation state.',
                'Caching and local persistence for a smooth experience, even on an unstable connection.',
            ],
        },
        cardTags: ['Flutter', { fr: 'Biométrie', en: 'Biometrics' }, 'KYC'],
        tags: ['Flutter', 'KYC', { fr: 'Biométrie', en: 'Biometrics' }, 'Notifications', { fr: 'Cache local', en: 'Local cache' }, REST_API],
        bg: 'bg-ph2', image: projectImg('isbaq'),
        alt: {
            fr: "Maquettes d'ISBAQ : cartes, accueil avec le solde et recharge depuis Mobile Money",
            en: 'ISBAQ mockups: cards, home with balance and top-up from Mobile Money',
        },
        shots: shots('isbaq', [
            ['3', { fr: 'Bienvenue', en: 'Welcome' }],
            ['30', { fr: 'Accueil', en: 'Home' }],
            ['33', { fr: 'Analyses', en: 'Insights' }],
            ['15', { fr: "Vérification d'identité", en: 'Identity verification' }],
            ['61', { fr: 'Carte virtuelle', en: 'Virtual card' }],
            ['69', { fr: 'Carte physique', en: 'Physical card' }],
            ['42', { fr: 'Recharge', en: 'Top-up' }],
            ['58', { fr: 'Paiement par QR', en: 'QR payment' }],
            ['89', { fr: 'Profil', en: 'Profile' }],
        ]),
    },
    {
        id: 'lokaplux', name: 'Lokaplux', featured: true,
        cat: { fr: 'Immobilier', en: 'Real estate' },
        type: FLUTTER_APP, role: FULL_DEV, status: STATUS_INTERNAL,
        summary: {
            fr: 'Visites, demandes de location, contrats, échéances et paiements, sur une architecture modulaire feature-first.',
            en: 'Viewings, rental requests, contracts, due dates and payments, on a modular feature-first architecture.',
        },
        intro: {
            fr: 'Application immobilière pour consulter des biens, réserver des visites, gérer sa location et commander des services pour son logement.',
            en: 'Real estate app to browse properties, book viewings, manage a rental and order services for your home.',
        },
        bullets: {
            fr: [
                'Consultation de biens, réservation de visites et demandes de location.',
                'Contrats, échéances et paiements, avec les espaces de gestion locative associés.',
                'Avis, cache local, deep links et parcours de réservation.',
                'Catalogue de services (ameublement, déménagement, maintenance, nettoyage…) avec demandes validées par le propriétaire.',
                'Architecture modulaire feature-first basée sur GetX, Dio et GetStorage.',
            ],
            en: [
                'Property browsing, viewing bookings and rental requests.',
                'Contracts, due dates and payments, with the related rental management spaces.',
                'Reviews, local cache, deep links and booking flows.',
                'Service catalog (furniture, moving, maintenance, cleaning…) with requests approved by the landlord.',
                'Modular feature-first architecture based on GetX, Dio and GetStorage.',
            ],
        },
        cardTags: ['Flutter', 'GetX', 'Dio'],
        tags: ['Flutter', 'GetX', 'Dio', 'GetStorage', 'Feature-first', 'Deep links'],
        bg: 'bg-ph3', image: projectImg('lokaplux'),
        alt: {
            fr: "Écrans de Lokaplux : connexion, fiche d'un appartement et catalogue de services",
            en: 'Lokaplux screens: sign-in, apartment details and service catalog',
        },
        shots: shots('lokaplux', [
            ['18', { fr: 'Connexion', en: 'Sign-in' }],
            ['19', { fr: 'Fiche du bien', en: 'Property details' }],
            ['20', { fr: 'Avis', en: 'Reviews' }],
            ['17', 'Services'],
            ['21', 'Maintenance'],
        ]),
    },
    {
        id: 'woononvi', name: 'Woononvi', featured: true,
        cat: { fr: 'Covoiturage', en: 'Carpooling' },
        type: FLUTTER_APP,
        role: { fr: 'Développement complet et publication', en: 'Full development and release' },
        status: ON_PLAY, storeUrl: '',
        summary: {
            fr: 'Publier, rechercher et réserver des trajets avec suivi en temps réel. Publiée et maintenue sur Google Play.',
            en: 'Post, search and book rides with real-time tracking. Released and maintained on Google Play.',
        },
        intro: {
            fr: 'Application de covoiturage pour publier, rechercher et réserver des trajets, avec suivi en temps réel.',
            en: 'Carpooling app to post, search and book rides, with real-time tracking.',
        },
        bullets: {
            fr: [
                "Développement complet de l'application : publication, recherche et réservation de trajets.",
                'Géolocalisation, Google Maps et suivi des trajets en temps réel.',
                'Profils, réservations, notifications et gestion des trajets.',
                'Préparation, publication et maintenance sur Google Play, avec plusieurs mises à jour déployées.',
            ],
            en: [
                'Full app development: posting, searching and booking rides.',
                'Geolocation, Google Maps and real-time ride tracking.',
                'Profiles, bookings, notifications and ride management.',
                'Preparation, release and maintenance on Google Play, with several updates shipped.',
            ],
        },
        cardTags: ['Flutter', 'Google Maps', { fr: 'Temps réel', en: 'Real time' }],
        tags: ['Flutter', 'Google Maps', { fr: 'Géolocalisation', en: 'Geolocation' }, { fr: 'Temps réel', en: 'Real time' }, 'Notifications', 'Google Play'],
        bg: 'bg-ph1', image: projectImg('woononvi'),
        alt: {
            fr: "Écrans de Woononvi : choix de l'emplacement, accueil et détail d'un trajet",
            en: 'Woononvi screens: location picker, home and ride details',
        },
        shots: shots('woononvi', [
            ['15', { fr: 'Accueil', en: 'Home' }],
            ['14', { fr: "Choix de l'emplacement", en: 'Location picker' }],
            ['16b', { fr: 'Détail du trajet', en: 'Ride details' }],
        ]),
    },
    {
        id: 'atokpa', name: 'Atokpa', featured: true,
        cat: 'E-commerce',
        type: FLUTTER_APP,
        role: { fr: "Développement de l'app mobile", en: 'Mobile app development' },
        status: { fr: 'Test fermé sur Google Play', en: 'Closed testing on Google Play' }, storeUrl: '',
        summary: {
            fr: 'Catalogue, panier, commandes et paiement KKiaPay. En test fermé sur Google Play.',
            en: 'Catalog, cart, orders and KKiaPay payment. In closed testing on Google Play.',
        },
        intro: {
            fr: 'Application e-commerce : catalogue, panier, commandes et paiement mobile, avec choix du point de livraison sur carte.',
            en: 'E-commerce app: catalog, cart, orders and mobile payment, with delivery point selection on a map.',
        },
        bullets: {
            fr: [
                "Consultation des produits, panier et parcours d'achat complet.",
                'Intégration du paiement KKiaPay et des APIs de la plateforme.',
                'Interfaces du compte utilisateur et suivi des commandes.',
                'Adresses de livraison avec sélection du point sur Google Maps.',
            ],
            en: [
                'Product browsing, cart and full checkout flow.',
                'Integration of KKiaPay payments and the platform APIs.',
                'User account and order tracking screens.',
                'Delivery addresses with point selection on Google Maps.',
            ],
        },
        cardTags: ['Flutter', 'KKiaPay', REST_API],
        tags: ['Flutter', 'KKiaPay', REST_API, 'Google Maps', { fr: 'Panier', en: 'Cart' }],
        bg: 'bg-ph2', image: projectImg('atokpa'),
        alt: {
            fr: "Écrans d'Atokpa : connexion, accueil boutique et ajout d'adresse de livraison",
            en: 'Atokpa screens: sign-in, store home and delivery address',
        },
        shots: shots('atokpa', [
            ['4', { fr: 'Connexion', en: 'Sign-in' }],
            ['2', { fr: 'Accueil boutique', en: 'Store home' }],
            ['3', { fr: 'Fiche produit', en: 'Product page' }],
            ['6', { fr: 'Adresse de livraison', en: 'Delivery address' }],
            ['5', { fr: 'Point sur la carte', en: 'Point on the map' }],
        ]),
    },
    {
        id: 'vignon', name: 'Vignon', featured: true,
        cat: { fr: 'Santé', en: 'Health' },
        type: MOBILE_APP,
        role: { fr: "Développement de l'app mobile", en: 'Mobile app development' },
        status: ON_PLAY, storeUrl: '',
        summary: {
            fr: 'Suivi de grossesse semaine par semaine : contacts prénatals, calendrier, rappels et articles par trimestre.',
            en: 'Week-by-week pregnancy tracking: prenatal visits, calendar, reminders and articles by trimester.',
        },
        intro: {
            fr: "Application de suivi de grossesse : l'évolution du bébé semaine par semaine, le calendrier des contacts prénatals, des rappels et des articles adaptés à chaque trimestre.",
            en: "Pregnancy tracking app: the baby's growth week by week, a prenatal visit calendar, reminders and articles for each trimester.",
        },
        bullets: {
            fr: [
                "Accueil semaine par semaine avec la taille et le poids estimés du bébé, jusqu'au terme.",
                'Suivi prénatal en frise chronologique et en calendrier : contacts recommandés, statut (en retard, fait) et prise de rendez-vous.',
                'Rappels personnalisés (prise de sang, traitements…) avec notification au moment choisi : 30 minutes avant, la veille, une semaine avant…',
                'Articles classés par trimestre, avec recherche et favoris.',
                "Mode invité, profil de grossesse (date d'accouchement, fiche médicale, premier enfant) et gestion de plusieurs grossesses.",
                'Navigation vers les spécialistes et la messagerie, dans une interface en thème sombre.',
            ],
            en: [
                "Week-by-week home screen with the baby's estimated size and weight, up to term.",
                'Prenatal follow-up as a timeline and a calendar: recommended visits, status (late, done) and appointment booking.',
                'Custom reminders (blood tests, treatments…) with a notification at the chosen time: 30 minutes before, the day before, a week before…',
                'Articles sorted by trimester, with search and favorites.',
                'Guest mode, pregnancy profile (due date, medical record, first child) and support for several pregnancies.',
                'Access to specialists and messaging, in a dark-themed interface.',
            ],
        },
        cardTags: ['Mobile', { fr: 'Rappels', en: 'Reminders' }, { fr: 'Calendrier', en: 'Calendar' }],
        tags: ['Mobile', 'Notifications', { fr: 'Calendrier', en: 'Calendar' }, { fr: 'Mode invité', en: 'Guest mode' }, { fr: 'Thème sombre', en: 'Dark theme' }],
        bg: 'bg-ph1', image: projectImg('vignon'),
        alt: {
            fr: 'Écrans de Vignon : suivi prénatal, accueil semaine par semaine et articles',
            en: 'Vignon screens: prenatal follow-up, week-by-week home and articles',
        },
        shots: shots('vignon', [
            ['26', { fr: 'Accueil', en: 'Home' }],
            ['22', { fr: 'Suivi prénatal', en: 'Prenatal follow-up' }],
            ['23', { fr: 'Calendrier', en: 'Calendar' }],
            ['27', { fr: 'Nouveau rappel', en: 'New reminder' }],
            ['24', 'Articles'],
            ['25', { fr: 'Profil de grossesse', en: 'Pregnancy profile' }],
        ]),
    },
    {
        id: 'izitailor', name: 'IziTailor',
        cat: { fr: 'Couture', en: 'Tailoring' },
        listLabel: { fr: 'Mobile · Couture', en: 'Mobile · Tailoring' },
        type: FLUTTER_APP,
        role: { fr: 'Conception et développement des interfaces', en: 'UI design and development' },
        status: STATUS_INTERNAL,
        summary: {
            fr: 'Plateforme pour couturiers, conçue from scratch : mensurations, modèles, catalogue, clients et mise en avant.',
            en: 'Platform for tailors, built from scratch: measurements, designs, catalog, clients and promotion.',
        },
        intro: {
            fr: 'Plateforme de mise en relation dans la couture, pensée pour les professionnels et leur activité au quotidien.',
            en: 'Marketplace for the tailoring industry, designed for professionals and their day-to-day business.',
        },
        bullets: {
            fr: [
                'Conception et développement from scratch des interfaces mobiles pour les couturiers.',
                'Inscription, gestion des mensurations, des modèles et du catalogue.',
                'Gestion des clients et souscription à des services de mise en avant.',
                "Interfaces de paiement et de suivi de l'activité du professionnel.",
            ],
            en: [
                'From-scratch design and development of the mobile screens for tailors.',
                'Sign-up, measurements, designs and catalog management.',
                'Client management and subscription to promotion services.',
                'Payment and business tracking screens.',
            ],
        },
        tags: ['Flutter', 'UI design', { fr: 'Paiements', en: 'Payments' }, { fr: 'Catalogue', en: 'Catalog' }],
        bg: 'bg-ph2', image: null,
        placeholder: { fr: '[Captures IziTailor]', en: '[IziTailor screenshots]' },
        shots: [],
    },
    {
        id: 'aquaponie',
        name: { fr: 'Système aquaponique', en: 'Aquaponics system' },
        cat: 'IoT · Arduino', listLabel: 'IoT · Arduino',
        type: { fr: 'Système IoT + application mobile', en: 'IoT system + mobile app' },
        role: DESIGN_DEV,
        status: { fr: 'Projet de soutenance, 2022', en: 'Final degree project, 2022' },
        summary: {
            fr: 'Projet de soutenance : capteurs environnementaux, transmission sans fil et application mobile de supervision temps réel avec alertes.',
            en: 'Final degree project: environmental sensors, wireless transmission and a real-time mobile monitoring app with alerts.',
        },
        intro: {
            fr: 'Système intelligent de production aquaponique, combinant aquaculture et culture hydroponique, supervisé à distance.',
            en: 'Smart aquaponics production system, combining fish farming and hydroponics, monitored remotely.',
        },
        bullets: {
            fr: [
                "Monitoring et automatisation d'un système aquaponique.",
                'Intégration de capteurs environnementaux.',
                'Transmission sans fil des mesures.',
                "Application mobile de supervision en temps réel avec système d'alertes.",
            ],
            en: [
                'Monitoring and automation of an aquaponics system.',
                'Integration of environmental sensors.',
                'Wireless transmission of the readings.',
                'Real-time mobile monitoring app with an alert system.',
            ],
        },
        tags: [
            'Arduino',
            { fr: 'Capteurs', en: 'Sensors' },
            { fr: 'Transmission sans fil', en: 'Wireless transmission' },
            { fr: 'Systèmes embarqués', en: 'Embedded systems' },
            MOBILE_APP,
        ],
        bg: 'bg-hero', image: skillImg('skill-iot'),
        alt: {
            fr: 'Schéma du système aquaponique : capteurs, Arduino, liaison sans fil et application de supervision',
            en: 'Diagram of the aquaponics system: sensors, Arduino, wireless link and monitoring app',
        },
        shots: [],
    },
    {
        id: 'aivoka', name: 'Aivoka',
        cat: { fr: 'Juridique', en: 'Legal' },
        listLabel: { fr: 'Mobile · Juridique', en: 'Mobile · Legal' },
        type: MOBILE_APP, role: DESIGN_DEV, status: STATUS_INTERNAL,
        summary: {
            fr: 'Application juridique : textes de lois en vigueur au Bénin et assistant conversationnel pour des réponses personnalisées.',
            en: 'Legal app: laws in force in Benin and a conversational assistant for personalized answers.',
        },
        intro: {
            fr: 'Application juridique pour consulter les textes de lois en vigueur au Bénin et obtenir des réponses personnalisées.',
            en: 'Legal app to browse the laws in force in Benin and get personalized answers.',
        },
        bullets: {
            fr: ['Consultation des textes de lois en vigueur au Bénin.', 'Assistant conversationnel pour obtenir des informations personnalisées.'],
            en: ['Browsing the laws in force in Benin.', 'Conversational assistant for personalized information.'],
        },
        tags: ['Mobile', { fr: 'Assistant conversationnel', en: 'Conversational assistant' }, REST_API],
        bg: 'bg-ph3', image: null,
        placeholder: { fr: '[Captures Aivoka]', en: '[Aivoka screenshots]' },
        shots: [],
    },
    {
        id: 'taskpriority', name: 'Task Priority',
        cat: { fr: 'Productivité', en: 'Productivity' },
        listLabel: { fr: 'Mobile · Productivité', en: 'Mobile · Productivity' },
        type: { fr: 'Application mobile iOS et Android', en: 'iOS and Android mobile app' },
        role: DESIGN_DEV, status: ON_PLAY, storeUrl: '',
        summary: {
            fr: 'Gestion des tâches par importance et urgence, avec progression, calendrier et notes. Publiée sur Google Play.',
            en: 'Task management by importance and urgency, with progress, calendar and notes. Live on Google Play.',
        },
        intro: {
            fr: 'Application de gestion des tâches qui classe chaque tâche selon son importance et son urgence, avec suivi de progression, calendrier et notes.',
            en: 'Task management app that ranks every task by importance and urgency, with progress tracking, a calendar and notes.',
        },
        bullets: {
            fr: [
                "Catégories inspirées de la matrice d'Eisenhower : important et urgent, important mais pas urgent, pas important mais urgent.",
                'Progression de chaque tâche en pourcentage, avec filtres par type.',
                'Vue calendrier à la semaine et statuts À faire, En cours, Terminé, avec les dates de début et de fin.',
                'Notes personnelles et onglet Suggestions qui transforme une idée en tâche structurée.',
                'Connexion par email, Google ou Apple, interface multilingue et chiffrement des données à la configuration du compte.',
            ],
            en: [
                'Categories inspired by the Eisenhower matrix: important and urgent, important but not urgent, not important but urgent.',
                'Progress of each task as a percentage, with filters by type.',
                'Weekly calendar view and To do, In progress, Done statuses, with start and end dates.',
                'Personal notes and a Suggestions tab that turns an idea into a structured task.',
                'Sign-in with email, Google or Apple, multilingual interface and data encryption during account setup.',
            ],
        },
        tags: ['Mobile', 'iOS', 'Android', 'Google Sign-In', 'Apple Sign-In', { fr: 'Chiffrement', en: 'Encryption' }, { fr: 'Multilingue', en: 'Multilingual' }],
        bg: 'bg-ph3', image: projectImg('taskpriority'),
        alt: {
            fr: 'Écrans de Task Priority : connexion, catégories de priorité et tâches du jour',
            en: 'Task Priority screens: sign-in, priority categories and daily tasks',
        },
        shots: shots('taskpriority', [
            ['30c', { fr: 'Connexion', en: 'Sign-in' }],
            ['28c', { fr: 'Catégories et progression', en: 'Categories and progress' }],
            ['33c', { fr: 'Tâches du jour', en: "Today's tasks" }],
            ['29c', 'Notes'],
            ['32c', 'Suggestions'],
            ['31c', { fr: 'Chiffrement des données', en: 'Data encryption' }],
        ]),
    },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
export const heroProject = projects.find((p) => p.id === 'isbaq');
