// Point d'entrée de la version statique (déployée sur Vercel) :
// la page d'accueil n'a besoin ni de Laravel ni d'Inertia.
import { createApp } from 'vue';
import '../css/app.css';
import Home from '../js/Pages/Home.vue';

createApp(Home).mount('#app');
