import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        accent: {
          blue: '#38bdf8',
          purple: '#818cf8',
          violet: '#c084fc',
          pink: '#f472b6',
        },
      },
    },
  },
  plugins: [],
}
export default config
