import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Tienda.JS/", // Esto asegura que las rutas tengan en cuenta el subdirectorio del proyecto
  plugins: [react()],
});


