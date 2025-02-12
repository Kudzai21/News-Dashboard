/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Fraunces"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },

      colors: {
        customPrimary: '#161618',
      },
    },
  },
  plugins: [],
}