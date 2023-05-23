/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anekBangla: 'Anek Bangla',
        inter: 'inter',
        poppins: 'poppins',
      },
      colors: {
        appDarkGray100: '#242424',
        appGray100: '#F3F3F3',
        appGreen100: '#BDEED1',
        appGreen200: '#12542C',
        appGreen300: '#295f2d',
        appGreen400: '#484848',
        bgColor: '#B7B7B7',
        bgDarkerGreen: '#022D19',
      },
    },
  },
  plugins: [],
}
