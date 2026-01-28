/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-beige': '#F5F5F0',
        'luxury-offwhite': '#FAFAF9',
        'luxury-sand': '#E7E5E4',
        'luxury-taupe': '#A8A29E',
        'luxury-gold': '#D4AF37',
        'luxury-bronze': '#CD7F32',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        tamil: ['var(--font-noto-tamil)', 'Noto Sans Tamil', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
