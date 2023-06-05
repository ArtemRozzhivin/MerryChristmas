/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xxs: '320px',
      xs: '390px',
      sm: '520px',
      md: '768px',
      lg: '950px',
      xl: '1100px',
      '2xl': '1220px',
    },

    extend: {
      maxWidth: {
        container: '1000px',
      },

      flex: {
        half: '1 1 50%',
      },

      colors: {
        light: '#f3f3f3',
        app: '#DC2626',
      },
    },
  },
  plugins: [],
};
