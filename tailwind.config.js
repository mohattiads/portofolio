/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {  
      colors:  ({
          'Ipurple': '#5D3160',
          'Igray': '#B5B5B5',
      }),
  },
  plugins: [],
  }
}