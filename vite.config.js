// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: '/CarSharingJS/', // Asegúrate de usar el nombre exacto del repositorio
  plugins: [react()],
});

