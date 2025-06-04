import config from '@comenchi/ui/tailwind'
import type {Config} from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

export default {
  ...config,
  content: [
    './app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}',
    './node_modules/@comenchi/shop/dist/**/*.{html,js,jsx,mdx,ts,tsx}',
    './node_modules/@comenchi/admin/dist/**/*.{html,js,jsx,cjs,mjs}',
    './node_modules/@comenchi/ui/dist/**/*.{html,js,cjs,jsx,mdx,ts,tsx}'
  ],
  plugins: [typography, tailwindAnimate],
} satisfies Config
