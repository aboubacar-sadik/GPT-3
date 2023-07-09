/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,

    },
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
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  safelist: ['orange', 'red', 'dark', 'light-blue', 'white', 'white-blue', 'violet', 'cyan', 'gray'],
}
