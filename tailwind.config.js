/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'], // Ensure the font family name matches exactly
      },
      colors: {
        'c-darkBlue': '#0C171D',
        'c-darkBlue-2': '#091217',
        'c-blue': '#23b5d3',
        'c-purple': '#8367c7',
        'c-lightBeige': '#fbf7f4',
        'c-pink': '#f75590',
      },

      backgroundImage: {
        wave: "url('/images/wave.svg')",
        'wave-mobile': "url('/images/wave-mobile.svg')",
      },
      backgroundSize: {
        cover: 'cover',
      },
      backgroundPosition: {
        center: 'center',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
    },
  },
  plugins: [],
};
