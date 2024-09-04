import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Correct URL with colon
        changeOrigin: true, // Optional: for ensuring the origin of the host is changed to the target URL
        secure: false, // Optional: if you are not using HTTPS on your backend server
      },
    },
  },
});
