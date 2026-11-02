import { ref, watch } from 'vue';
import messages from '../i18n/messages';

const LOCALES = ['fr', 'en'];

const initialLocale = () => {
    try {
        const saved = localStorage.getItem('locale');
        if (LOCALES.includes(saved)) return saved;
    } catch (e) {
        // stockage indisponible : on se rabat sur la langue du navigateur
    }
    return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
};

// Partagé entre tous les composants
const locale = ref(initialLocale());

// Met à jour la langue, le titre et la description de la page à chaque changement
watch(locale, (value) => {
    document.documentElement.lang = value;
    document.title = messages[value].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', messages[value].meta.description);
    try {
        localStorage.setItem('locale', value);
    } catch (e) {
        // la langue reste valable pour la session
    }
}, { immediate: true });

export function useI18n() {
    // Texte de l'interface : t('hero.talk'), t('about.intro', { name })
    const t = (key, params = {}) => {
        const text = key.split('.').reduce((node, part) => node?.[part], messages[locale.value]) ?? key;
        return text.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? `{${name}}`);
    };

    // Contenu bilingue { fr, en } (texte ou liste) ; une valeur simple est renvoyée telle quelle
    const tr = (value) => (value && typeof value === 'object' && 'fr' in value ? value[locale.value] : value);

    const toggleLocale = () => {
        locale.value = locale.value === 'fr' ? 'en' : 'fr';
    };

    return { locale, t, tr, toggleLocale };
}
