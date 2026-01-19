// vite.config.js (in the root folder)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests starting with /api/v1 to the Node.js backend
      '/api/v1': {
        target: 'http://localhost:3005',
        changeOrigin: true,
        secure: false, // Set to true if using HTTPS on backend
        // rewrite: (path) => path.replace(/^\/api\/v1/, '') // Optional: Remove /api/v1 prefix if necessary
      }
    }
  }
})