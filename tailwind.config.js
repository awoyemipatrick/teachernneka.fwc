import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        instagram: {
          blue: '#405DE6',
          purple: '#833AB4',
          pink: '#E1306C',
          yellow: '#FDCB58',
          orange: '#FD9726',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('@tailwindcss/forms'),
  ],
}
