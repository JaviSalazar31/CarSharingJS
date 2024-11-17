import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Tienda.JS/", // Asegúrate de usar esto para GitHub Pages
  plugins: [react()],
});


