import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/stress-strain-curve/', // ← لازم يكون اسم الريبو بالظبط

  plugins: [react()],
})
