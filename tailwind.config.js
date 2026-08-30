/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#0B0B0D',
          soft: '#141416',
        },
        charcoal: '#1B1B1E',
        steel: {
          DEFAULT: '#C7C9CC',
          dim: '#8A8C90',
        },
        cream: '#F7F6F3',
        orange: {
          DEFAULT: '#FF6A00',
          light: '#FF8A3D',
          dim: '#B84E00',
        },
        gray: {
          muted: '#8B8B90',
          line: '#2A2A2E',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(to right, rgba(199,201,204,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(199,201,204,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        drawLine: 'drawLine 0.9s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
}
