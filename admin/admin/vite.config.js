import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps for build
  },
  server: {
    sourcemap: false, // Disable source maps in the development server
  },
})
