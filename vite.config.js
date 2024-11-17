import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Tienda.JS/", // Base correcta para GitHub Pages
  plugins: [react()],
});


