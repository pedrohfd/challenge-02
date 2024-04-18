/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      yellow: {
        weak: '#f1e9c9',
        default: '#dbac2c',
        strong: '#c47f17',
      },

      violet: {
        weak: '#ebe5f9',
        default: '#8047f8',
        strong: '#4b2995',
      },

      base: {
        title: '#272221',
        subtitle: '#403937',
        text: '#574f4d',
        label: '#8d8686',
        hover: '#d7d5d5',
        button: '#e6e5e5',
        input: '#ededed',
        card: '#f3f2f2',
        surface: '#fafafa',
        white: '#ffffff',
      },
    },

    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        baloo: ['"Baloo 2"', 'sans-serif'],
      },

      height: {
        header: 'calc(100vh - 104px)',
      },
    },
  },
  plugins: [],
}
