import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "encodestudio.in",
      "encode-studio-backend.vercel.app",
      "encode-studio-frontend.vercel.app"
    ]
  }
})
