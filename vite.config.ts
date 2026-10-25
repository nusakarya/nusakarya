import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// Two pages: the landing page and /privasi (its own HTML, so crawlers and
// Meta's app review read it without running scripts on the landing page).
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        privasi: fileURLToPath(new URL('privasi/index.html', import.meta.url)),
      },
    },
  },
})
