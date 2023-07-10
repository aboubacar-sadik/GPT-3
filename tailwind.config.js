/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {

    extend: {
      colors: {
        'orange': '#FF8A71',
        'red': '#FF4820',
        'dark': '#040C18',
        'light-blue': '#042C54',
        'white': '#ffffff',
        'white-blue': '#81AFDD',
        'violet': '#AE67FA',
        'cyan': '#71E5FF',
        'blue-color': '#1B78DE',
      },
      blur: {
        '4xl': '200px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      maxWidth: {
        '8xl': '1536px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  safelist: ['orange', 'red', 'dark', 'light-blue', 'white', 'white-blue', 'violet', 'cyan', 'gray'],
}
