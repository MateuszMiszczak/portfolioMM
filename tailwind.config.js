/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1440px',
      },

      colors: {
        mainColor: '#150c25',
        secondMainColor: '#1b1b1e',
        thirdMainColor: '#2c243b',
        fourthMainColor: '#5601f5',
        fifthMainColor: '#323235',
        sixthMainColor: '#3c01ac',
        redOne: '#ff013c',
        pinkOne: '#f472b6',
        blueOne: '#288096',
        html: '#e34c26',
        css: '#2965f1',
        sass: '#cc6699',
        tailwind: '#38bdf8',
        js: '#F0DB4F',
        react: '#61dbfb',
      },

      width: {
        navWidth: '88px',
      },

      margin: {
        marginForNav: '88px',
      },

      borderWidth: {
        smallest: '0.5px',
        small: '1px',
      },

      fontFamily: {
        open: 'Open Sans',
      },

      backgroundImage: {
        map: "url('/src/assets/map.png')",
      },
    },
  },
  plugins: [],
};
