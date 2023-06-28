/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    screens: {
      'sm': '930px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',

    },
    extend: {
      dropShadow: {
        '3xl': '0 0 0 1px rgba(0, 0, 255, 0.5)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      flex: {
        '8': '8 8 0%',
        '10': '10 10 0%',
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      width: {
        '128': '32rem',
        '40px':'40px',
        '44':'11rem'
      },
      height: {
        '97': '400px',
        '98': '600px',
        '17':'3.5rem'
      },
      colors: {
        navbar: 'rgb( 0, 0, 0)',
        black2:'#1E1E1E',
        eee:'#eeeeee',
        bg3:'#000000',
        text2:'#CCCCCC',
        bg1:'#1E1E1E',
        btc:'#6272D6',
        bg2:'rgb( 7, 21, 60)',
        bgeee:'#fafafb',
        text444:'#444444',
        text555:'#777777',
        bg4:'#f0f0f0',
        bg999:'#999999',
        border1:'rgba(255,255,255,.5)',
        text3:'#a6a5a7',
        text4:'#58b6eb'

      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
