import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Build statique du portfolio, sans Laravel : `npm run build:static` produit dist/
export default defineConfig({
    root: 'resources/static',
    plugins: [vue()],
    build: {
        outDir: '../../dist',
        emptyOutDir: true,
    },
});
