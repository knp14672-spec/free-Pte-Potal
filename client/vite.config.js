import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/<YOUR_REPO_NAME>/', // e.g. '/free-pte-potala-2/'
  plugins: [react()]
})
