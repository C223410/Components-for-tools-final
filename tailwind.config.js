/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(90deg, #835D23 0%, #B58130 100%)',
        },
      },
    },
    plugins: [],
  }