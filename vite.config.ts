import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { macaronVitePlugin } from '@macaron-css/vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: 'localhost',
  },
  plugins: [react(), macaronVitePlugin(), svgr({ include: '**/*.svg?react' })],
})
