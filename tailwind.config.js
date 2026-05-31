/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(168, 85, 247, 0.18)',
        card: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'life-radial': 'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.20), transparent 28%), radial-gradient(circle at 80% 10%, rgba(34, 211, 238, 0.16), transparent 26%), radial-gradient(circle at 70% 90%, rgba(244, 114, 182, 0.12), transparent 28%)',
      },
    },
  },
  plugins: [],
};
