/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'console-col': '#1D283A',
      },
      fontFamily: {
        'lucida-console': 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
        'raleway': 'Raleway'
      }
    },
  },
  plugins: [],
}