import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, '')
  return {
    // vite config設置
    plugins: [vue()],
    publicDir: 'public',
    base: './',
    server: {
      open: true,
      https: false,
      host: env.VITE_APP_HOST,
      port: parseInt(env.VITE_APP_PORT),
      proxy: null,
      cors: true,
    },
    preview: {
      open: true,
      https: false,
      host: env.VITE_APP_HOST,
      port: parseInt(env.VITE_APP_PORT),
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
  }
})
