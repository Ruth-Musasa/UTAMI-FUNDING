/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '#e5eef9': '#e5eef9',
      },
      fontFamily:{
        'title': ["Black Han Sans"]
      },
      backgroundImage: {
        'img1': "url('client/src/assets/0aa9e029e7cd70cefef0a16bcc977008.jpg')",
        'img2': "url('/img/footer-texture.png')",
        'img3': "url('/img/footer-texture.png')",
      },
      height: {
        '500px': '500px',
      }
    },
  },
  plugins: [],
}

