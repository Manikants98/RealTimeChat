/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.{js,jsx,ts,tsx}',
    './src/Screens/**/*.{js,ts,jsx,tsx}',
    './src/Shared/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        light: '#E5E7EB',
      },
    },
  },
  plugins: [require('nativewind/tailwind/css')],
};
