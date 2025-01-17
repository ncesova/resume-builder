/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#1c1a35',
        background: '#dbedff',
        primary: '#5cb4d2',
        secondary: '#9ed6ff',
        accent: '#50507c',
      },

      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Rubik',
        body: 'Rubik',
      },
      fontWeight: {
        normal: '400',
        bold: '500',
      },
    },
  },
  plugins: [],
};
