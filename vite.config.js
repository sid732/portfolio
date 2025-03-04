import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Changed from '/portfolio/' to '/' since using custom domain
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})