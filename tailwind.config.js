/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand:' #0095f6'

      },
      backgroundImage:{
        'logo-pattern':'url(	https://static.cdninstagram.com/rsrc.php/v3/yr/r/fzBXVxs22bH.png) '
      }
    },
  },
  plugins: [],
}
