/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Segoe UI'] 
    },
    extend: {},
  },
  variants: [],
  plugins: [],
}

/* theme: {
  extend: {
    colors: {
      minga1: "black"
      minga2: "#F9A8D4"
    }
    backgroundColor: {
      minga1: "#F9A8D4"
      minga2: "black"
    }
  }
} */