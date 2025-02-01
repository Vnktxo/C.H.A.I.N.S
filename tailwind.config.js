/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5a38fd',
        secondary: '#d4f717',
        gray: '#ecf1f2',
        'primary-text': '#545479',
        'secondary-text': '#24244f',
        'secondary-gray': '#cfdbde',
      },

      fontFamily: {
        'CabinetGrotesk-Variable': ['CabinetGrotesk-Variable', 'sans-serif'],
        'CabinetGrotesk-Thin': ['CabinetGrotesk-Thin', 'sans-serif'],
        'CabinetGrotesk-Extralight': [
          'CabinetGrotesk-Extralight',
          'sans-serif',
        ],
        'CabinetGrotesk-Light': ['CabinetGrotesk-Light', 'sans-serif'],
        'CabinetGrotesk-Regular': ['CabinetGrotesk-Regular', 'sans-serif'],
        'CabinetGrotesk-Medium': ['CabinetGrotesk-Medium', 'sans-serif'],
        'CabinetGrotesk-Bold': ['CabinetGrotesk-Bold', 'sans-serif'],
        'CabinetGrotesk-Extrabold': ['CabinetGrotesk-Extrabold', 'sans-serif'],
        'CabinetGrotesk-Black': ['CabinetGrotesk-Black', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },

      backgroundImage: {
        hero: 'linear-gradient(rgba(90,56,253,.4),transparent 70%,transparent)',
        community:
          'linear-gradient(to bottom, #d4f717aa 50%, transparent 100%);',
        footer: 'linear-gradient(to top, #DD44B9 0%, transparent 100%);',
      },

      screens: {
        'small-lg': '990px',
        'small-sm': '485px',
      },

      transitionTimingFunction: {
        normal: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },

      boxShadow: {
        logocard: '0 0 0 1px rgba(255, 255, 255, 0.12)',
      },

      animation: {
        'fade-out1': 'fade-out1 40s linear infinite',
        'fade-out2': 'fade-out2 40s linear infinite',
      },

      keyframes: {
        'fade-out1': {
          '0%': { transform: 'translateX(0%)' },

          '50%': { transform: 'translateX(-100%)' },
          '50.000001%': { transform: 'translateX(100%)' },

          '100%': {
            transform: 'translateX(0%)',
          },
        },
        'fade-out2': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-200%)',
          },
        },
      },
      gridTemplateColumns: {
        '1/2': '1.5fr 1fr',
        auto: 'auto 1fr',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
