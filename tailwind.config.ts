import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        accent: '#F59E0B',
        background: '#0B1121',
        text: '#9CA3AF',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

export default config 