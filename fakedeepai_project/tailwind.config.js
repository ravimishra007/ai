// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      

      colors: {
        purple: {
          DEFAULT: '#7c3aed',
          dark: '#6d28d9',
        },
        blue: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        indigo: {
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
        },
        violet: {
          DEFAULT: '#8b5cf6',
          dark: '#7e22ce',
        },
      },


    },
  },
  plugins: [],
}

