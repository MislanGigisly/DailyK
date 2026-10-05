import { fileURLToPath } from 'node:url'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'app': fileURLToPath(new URL('./src/app', import.meta.url)),
      'assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      'features': fileURLToPath(new URL('./src/features', import.meta.url)),
      'componets': fileURLToPath(new URL('./src/features/componets', import.meta.url)),
      'layouts': fileURLToPath(new URL('./src/layouts',import.meta.url)),
      'pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      'ui': fileURLToPath(new URL('./src/shared/ui', import.meta.url)),
      'lib': fileURLToPath(new URL('./src/shared/lib', import.meta.url)),
    },
  },
})