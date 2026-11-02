import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            // Les couleurs pointent vers des variables CSS (resources/css/app.css)
            // pour basculer entre thème clair et sombre sans dupliquer les classes.
            colors: {
                bg: 'var(--bg)',
                surface: 'var(--surface)',
                chip: 'var(--chip)',
                ink: 'var(--ink)',
                grey: 'var(--grey)',
                muted: 'var(--muted)',
                line: 'var(--line)',
                accent: 'var(--accent)',
                hero: 'var(--hero)',
                'hero-ink': 'var(--hero-ink)',
                inv: 'var(--inv-bg)',
                'inv-text': 'var(--inv-text)',
                'inv-muted': 'var(--inv-muted)',
                'inv-line': 'var(--inv-line)',
                ph1: 'var(--ph1)',
                ph2: 'var(--ph2)',
                ph3: 'var(--ph3)',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['"Inter Tight"', ...defaultTheme.fontFamily.sans],
                script: ['Caveat', 'cursive'],
            },
            maxWidth: {
                page: '1320px',
            },
        },
    },
    plugins: [],
};
