/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'blue': '#3A36DB',
        },
        'background': {
          'primary': '#edf0f8',
        },
        'text': {
          'primary': '#06152B',
          'secondary': '#99B2C6',
        },
      }
    },
  },
  plugins: [],
}

