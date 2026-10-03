import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // The API saves new products into server/db.json.
    // Don't reload the page when that file changes.
    watch: { ignored: ['**/server/**'] },
  },
})
