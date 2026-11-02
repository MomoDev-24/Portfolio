<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Manager!') }}</title>
        <link rel="icon" href="{{ asset('favicon.png') }}" type="image/x-icon">

        <meta name="description" content="Moïse Mahma, développeur mobile Flutter et web (Vue.js, Nuxt, Next.js, Laravel) basé à Abomey-Calavi, Bénin.">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Caveat:wght@700&display=swap" rel="stylesheet">

        <!-- Applique le thème avant l'affichage pour éviter un flash clair/sombre -->
        <script>
            (function () {
                try {
                    var saved = localStorage.getItem('theme');
                    var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (dark) document.documentElement.classList.add('dark');
                } catch (e) {}
            })();
        </script>

        <!-- Scripts -->
        @routes

        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
