import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/", // Para desarrollo local usa "/". Cambia a "/Tienda.JS/" si estás en producción.
  plugins: [react()],
});


