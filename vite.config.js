import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // 🔑 CRITICAL FIX: Set the base path to the repository name for GitHub Pages.
  base: '/sagittix-website/', 
});
