import {reactRouter} from '@react-router/dev/vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import {defineConfig} from 'vite'
import {envOnlyMacros} from 'vite-env-only'
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  ssr: {
    noExternal: ['react-dropzone'],
  },
  plugins: [reactRouter(), tsconfigPaths(), envOnlyMacros()],
  optimizeDeps: {
    exclude: ['@resvg/resvg-js'],
  },
})
