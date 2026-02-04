
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
    'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL || 'https://api.nuwaflux.com'),
  },
  base: './',
  build: {
    outDir: 'dist',
    target: 'esnext',
    assetsDir: 'assets',
    emptyOutDir: true
  }
});
