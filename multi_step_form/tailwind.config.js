/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#EFF5FF',
        border: '#D6D9E6',
        denim: '#022959',
        gray: '#9699AA',
        orange: '#FFAF7E',
        pink: '#F9818E',
        purple: '#483EFF',
        'light-blue': '#ABBCFF',
        'light-gray': '#D6D9E6',
        'red-errors': '#EE374A',
        'sky-blue': '#BEE2FD',
        'very-light-gray': '#F8F9FF',
        'denim-hover': '#164A8A',
        'purple-hover': '#928CFF'
      },
      backgroundImage: {
        'mobile-sidebar': 'url("./assets/images/bg-sidebar-mobile.svg")',
        'desktop-sidebar': 'url("./assets/images/bg-sidebar-desktop.svg")',
        checkmark: 'url("./assets/images/icon-checkmark.svg")'
      },
      boxShadow: {
        form: '0px 25px 40px -20px rgba(0, 0, 0, 0.0951141)'
      },
      borderRadius: {
        small: '4px',
        large: '8px',
        sidebar: '10px',
        main: '15px'
      }
    },
    
  },
  plugins: [],
}

