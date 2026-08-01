/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EDEEE6',
        paperDark: '#E2E3D8',
        ink: '#131C2E',
        navy: '#1B2A45',
        navyLight: '#2B3E5F',
        seal: '#A83C2E',
        sealLight: '#C25441',
        brass: '#AD8A3C',
        brassLight: '#CBAA5F',
        sage: '#5C6B54',
      },
      fontFamily: {
        display: ['"Newsreader"', 'serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
