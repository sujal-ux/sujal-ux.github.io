/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'console-col': '#1D283A',
        'nav-col': '#2a3a69',
        'hands-col': '#ff0000'
      },
      fontFamily: {
        'lucida-console': 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace',
        'raleway': 'Raleway'
      }
    },
  },
  plugins: [],
}