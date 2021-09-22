module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'roxo': "#480257",
        'roxo-claro':"#67007c",
        'roxo-medio':"#560167",
        'roxo-escuro':"#2e0237",
        'laranja':"#ff9701",
        'laranja-claro':"#ffdc92",
        'verde':"#3ec850",
        'vermelho':"#ee1945",
      },
      backgroundImage:{
        'bg': "url('./imgs/bg.jpg')",
      },
      width:{
        'desk':"900px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
