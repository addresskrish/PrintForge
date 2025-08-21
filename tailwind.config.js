/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: [
        //   'Albert Sans',
        //   'Montserrat Alternates',
        //   'Arial',
        //   'Helvetica',
        //   'sans-serif',
        // ],
        heading: [
          'Montserrat Alternates',
          'Arial',
          'Helvetica',
          'sans-serif',
        ],
        paragraph: [
          'Albert Sans',
          'Arial',
          'Helvetica',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
