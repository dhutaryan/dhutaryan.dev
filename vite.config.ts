import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { macaronVitePlugin } from '@macaron-css/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: 'localhost',
  },
  plugins: [react(), macaronVitePlugin()],
})
