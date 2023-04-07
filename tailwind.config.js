/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: ["./views/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        lato: 'Lato',
      },
      colors: {
        primary: '#8BC34A',
        secondary: '#FFC107',
        silver: '#F9F9F9',
        para: '#9B9B9B',
        blackSoft: '#1B1E23',
        paraSilver: '#454545',
        boldPrimary: '#3D8B00',
        border: '#EBEBEB',
      },
      backgroundImage: {
        'hero': "url('/public/img/hero.png')",
        'blend': "url('/public/img/blend.png')",
        'divider': "url('/public/img/divider.png')",
        'post': "url('/public/img/strawberry-field.png')",
        'heroContact': "url('/public/img/hero-contact.png')",
      },
      container: {
        padding: {
          center: true,
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
});
