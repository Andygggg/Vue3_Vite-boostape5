import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: 'public',
  base: './',
  server: {
    open: true,
    https: false,
    host: '192.168.68.114',
    port: 8079,
    proxy: null,
    cors: true,
  },
  preview: {
    open: true,
    https: false,
    host: '192.168.68.114',
    port: 8082,
    proxy: null,
    cors: true,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
