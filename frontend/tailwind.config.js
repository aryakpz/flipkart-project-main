/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx,html}"
    ],
  theme: {
    extend: {
      colors: {
        'flip-blue': '#2874f0;',
        'yellow':'#ffe500;',
        'bg-white':'#fdfdfa',
        'text-color':'#111110'

      },
      zIndex: {
        'z-index': 1030
      },
      fontFamily: {
        'f-italic': ['italic'],
        'f-medium': ['medium'],
        'f-regular': ['regular'],
        'f-semibold': ['semibold'],
        'f-semiitalic': ['semiitalic']
      },
      
    },
  },
  plugins: [],
}

