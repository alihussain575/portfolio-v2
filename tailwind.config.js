/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-purple': '#3f3f74',
        'space-blue': '#1e1e3f',
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle, #3f3f74 0%, #1e1e3f 100%)',
      },
    },
  },
  plugins: [],
};