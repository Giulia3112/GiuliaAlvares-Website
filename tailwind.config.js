/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#141414',
        accent: '#3b82f6',
        'accent-light': '#60a5fa',
        'text-primary': '#ffffff',
        'text-secondary': '#a3a3a3',
        'text-muted': '#737373',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '8rem',
      },
    },
  },
  plugins: [],
}

