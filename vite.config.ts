import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use relative paths so GitHub Pages (served from a subpath) can find the assets.
  base: './',
  plugins: [react()],
});
