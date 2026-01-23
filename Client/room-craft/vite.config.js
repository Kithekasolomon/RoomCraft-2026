import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['lucide-react']  // This fixes the resolve issue
  },
  build: {
    rollupOptions: {
      // Optional fallback if needed (rarely required)
      // external: ['lucide-react']
    }
  }
});