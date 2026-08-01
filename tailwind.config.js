/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#FFFFFF',
        surface: '#F6F7FB',
        line: '#E4E6EF',
        ink: '#0B1220',
        inkSoft: '#4A5268',
        indigo: '#3547E8',
        indigoDeep: '#1E2A78',
        indigoSoft: '#EEF0FE',
        emerald: '#0F9D63',
        amber: '#B5760A',
      },
      fontFamily: {
        display: ['"Instrument Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,18,32,0.04), 0 12px 32px -16px rgba(11,18,32,0.12)',
        float: '0 24px 64px -20px rgba(30,42,120,0.35)',
      },
    },
  },
  plugins: [],
};
