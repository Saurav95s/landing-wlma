import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Avoid silently serving a different project that already grabbed this port.
    port: 5173,
    strictPort: true,
    // Dev: stop browsers / embedded previews from holding stale HTML or modules.
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})
