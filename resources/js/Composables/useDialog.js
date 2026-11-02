import { watch, onBeforeUnmount } from 'vue';

// Comportement commun au menu plein écran et au modal projet :
// bloque le défilement de la page et ferme avec Échap tant que `isOpen` est vrai.
export function useDialog(isOpen, onClose, onKey = () => {}) {
    const handleKey = (event) => {
        if (event.key === 'Escape') onClose();
        else onKey(event);
    };

    const setOpen = (open) => {
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) window.addEventListener('keydown', handleKey);
        else window.removeEventListener('keydown', handleKey);
    };

    watch(isOpen, setOpen, { immediate: true });
    onBeforeUnmount(() => setOpen(false));
}
