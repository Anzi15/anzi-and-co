/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne'],
      },
      fontWeight:{
        "600": "600"
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-in-out forwards',
        'slide-out': 'slide-out 0.5s ease-in-out forwards',
      },
      backgroundImage: {
        'pink-to-white-gradient': 'linear-gradient(#EDE9FF, white)',
      },
      backgroundColor:{
        "brand-pink": "#EDE9FF",
        "light-grey": "#F7F7FA"
      },
      colors:{
        "brand-pink": "#EDE9FF",
        "light-grey": "#F7F7FA",
        "dark-blue":"#7563EA"
      },
      lineHeight: {
        '53': '53px',
      },
    },
  },
  plugins: [],
}

