import { onMounted, onBeforeUnmount, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/*
 * Animations de la page, pilotées par des attributs dans les templates :
 *  - data-hero            : apparition floutée au chargement, dans l'ordre du DOM
 *  - data-hero-portrait   : montée du portrait au chargement
 *  - data-parallax-x / -y : déplacement lié au défilement du hero
 *  - data-reveal="n"      : apparition au défilement, n = décalage (0, 1, 2…)
 * Tout est désactivé si l'utilisateur a demandé à réduire les animations.
 */
export function useScrollAnimations() {
    let mm;

    onMounted(async () => {
        await nextTick();
        mm = gsap.matchMedia();

        mm.add('(prefers-reduced-motion: no-preference)', () => {
            const blurIn = { opacity: 0, y: 24, filter: 'blur(16px)' };

            gsap.from('[data-hero]', { ...blurIn, duration: 1.1, ease: 'power3.out', stagger: 0.15 });
            gsap.from('[data-hero-portrait]', { opacity: 0, y: 60, scale: 1.04, duration: 1.2, ease: 'power3.out', delay: 0.15 });

            const heroScroll = { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true };
            gsap.to('[data-parallax-x]', { xPercent: -18, ease: 'none', scrollTrigger: heroScroll });
            gsap.to('[data-parallax-y]', { y: 90, ease: 'none', scrollTrigger: { ...heroScroll } });

            gsap.utils.toArray('[data-reveal]').forEach((el) => {
                gsap.from(el, {
                    opacity: 0,
                    y: 60,
                    filter: 'blur(10px)',
                    duration: 1,
                    ease: 'power3.out',
                    delay: (Number(el.dataset.reveal) || 0) * 0.12,
                    clearProps: 'filter',
                    scrollTrigger: { trigger: el, start: 'top 88%', once: true },
                });
            });
        });
    });

    onBeforeUnmount(() => mm?.revert());
}
