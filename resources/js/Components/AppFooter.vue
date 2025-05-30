<template>
    <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto px-6">
            <div class="text-center">
                <p>&copy; {{ currentYear }} Mon Site. Tous droits réservés.</p>
                <div class="mt-4 flex justify-center space-x-6">
                    <a
                        v-for="link in footerLinks"
                        :key="link.name"
                        :href="link.url"
                        class="text-gray-400 hover:text-white transition-colors"
                    >
                        {{ link.name }}
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const footerLinks = ref([
    { name: 'Mentions légales', url: '#' },
    { name: 'Politique de confidentialité', url: '#' },
    { name: 'CGU', url: '#' }
]);
</script>
