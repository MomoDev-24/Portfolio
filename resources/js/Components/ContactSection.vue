<template>
    <section id="contact" class="py-20 bg-gray-800 text-white">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8">Contactez-nous</h2>
                <p class="text-lg mb-12 opacity-90">
                    Prêt à démarrer votre projet ? Parlons-en ensemble !
                </p>
                <div class="grid md:grid-cols-2 gap-12">
                    <div class="text-left">
                        <h3 class="text-2xl font-semibold mb-6">Informations de contact</h3>
                        <div class="space-y-4">
                            <div
                                v-for="contact in contactInfo"
                                :key="contact.text"
                                class="flex items-center"
                            >
                                <svg class="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="contact.icon"></path>
                                </svg>
                                <span>{{ contact.text }}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form @submit.prevent="submitForm" class="space-y-4">
                            <input
                                v-model="form.name"
                                type="text"
                                placeholder="Votre nom"
                                required
                                class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white placeholder-gray-400"
                            >
                            <input
                                v-model="form.email"
                                type="email"
                                placeholder="Votre email"
                                required
                                class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white placeholder-gray-400"
                            >
                            <textarea
                                v-model="form.message"
                                placeholder="Votre message"
                                rows="4"
                                required
                                class="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-white placeholder-gray-400"
                            ></textarea>
                            <button
                                type="submit"
                                :disabled="isSubmitting"
                                class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded transition-colors"
                            >
                                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue';

const isSubmitting = ref(false);

// Formulaire de contact
const form = reactive({
    name: '',
    email: '',
    message: ''
});

const contactInfo = ref([
    {
        text: 'momodev64@gmail.com',
        icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
        text: '+229 01 50 82 43 48',
        icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    {
        text: 'Cotonou, Bénin',
        icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    }
]);

// Soumission du formulaire
const submitForm = async () => {
    isSubmitting.value = true;

    try {
        // Simulation d'envoi
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Formulaire soumis:', form);
        alert('Message envoyé avec succès !');

        // Reset du formulaire
        form.name = '';
        form.email = '';
        form.message = '';
    } catch (error) {
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
        isSubmitting.value = false;
    }
};
</script>
