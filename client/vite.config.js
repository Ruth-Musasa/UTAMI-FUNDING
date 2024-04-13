import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://Ruth-Musasa.github.io/UTAMI-FUNDING/",
  optimizeDeps: {
    include: ['react-router-dom'],
  },
})

