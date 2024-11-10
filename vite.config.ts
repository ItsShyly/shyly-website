import { fileURLToPath, URL } from 'node:url'
import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
const config: UserConfig = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@scss': fileURLToPath(new URL('./src/assets/scss', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use '@scss/index' as *;
        `,
      },
    },
  },
}

export default config
