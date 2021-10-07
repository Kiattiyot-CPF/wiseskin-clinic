module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Prompt', 'sans-serif'],
      'body': ['Prompt', 'sans-serif'],
    },
    extend: {
      colors: {
        'shopee': '#FF6600',
        'lazada': '#000083',
        'line': '#00b639',
        'facebook': '#1778f2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
