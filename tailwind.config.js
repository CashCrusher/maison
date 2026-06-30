/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pine-deep': '#1E3328',
        'parchment': '#F3EEE2',
        'espresso': '#5B4632',
        'trail-ochre': '#C9A227',
        'ink': '#1A1A16',
        'paper-line': '#DDD4C2',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body: ['"Public Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
