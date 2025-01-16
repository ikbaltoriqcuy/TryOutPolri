import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// vite.config.ts or vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://sandbox.ipaymu.com/api/v2/payment/direct', // The iPaymu API server
        changeOrigin: true, // Ensures that the request's origin is modified
        rewrite: (path: string) => path.replace(/^\/api/, ''), // Rewrites /api to the actual endpoint path
        secure: false, // Set this to `true` if using HTTPS
      },
    },
  },
};