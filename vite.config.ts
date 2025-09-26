/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
  build: {
    // Security: Generate source maps for debugging but exclude them from production
    sourcemap: false,
    // Security: Enable minification
    minify: 'terser',
    // Security: Set output directory permissions
    outDir: 'dist',
    // Security: Clear output directory
    emptyOutDir: true,
  },
  server: {
    // Security: Configure development server
    host: '127.0.0.1', // Only bind to localhost in development
    headers: {
      // Security headers for development
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
    },
  },
  preview: {
    // Security: Configure preview server
    host: '127.0.0.1',
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
    },
  },
});
