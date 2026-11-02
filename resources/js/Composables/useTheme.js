import { ref } from 'vue';

// Partagé entre tous les composants : le thème initial est posé par le script
// inline de app.blade.php avant le premier rendu.
const isDark = ref(typeof document !== 'undefined' && document.documentElement.classList.contains('dark'));

export function useTheme() {
    const toggleTheme = () => {
        isDark.value = !isDark.value;
        document.documentElement.classList.toggle('dark', isDark.value);
        try {
            localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
        } catch (e) {
            // stockage indisponible (navigation privée) : le thème reste valable pour la session
        }
    };

    return { isDark, toggleTheme };
}
