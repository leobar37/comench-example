import {reactRouter} from '@react-router/dev/vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import {defineConfig} from 'vite'
import {envOnlyMacros} from 'vite-env-only'
import tsconfigPaths from 'vite-tsconfig-paths'
import devtoolsJson from 'vite-plugin-devtools-json'

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer, tailwindcss],
    },
  },
  ssr: {
    noExternal: ['react-dropzone'],
  },
  plugins: [reactRouter(), tsconfigPaths(), envOnlyMacros(), devtoolsJson()],
  optimizeDeps: {
    exclude: ['@resvg/resvg-js'],
  },
})
