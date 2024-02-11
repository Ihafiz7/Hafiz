/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        monsa: ['Montserrat', 'sans-serif'],
      },
      colors:{
        blue: ['#6E07F3'],
        green: ['#141c3a'],
      },
      backgroundImage: theme => ({
        'gradient-intro': 'linear-gradient(180deg, rgba(110,7,243,1) 36%, rgba(77,4,170,1) 67%, rgba(255,255,255,1) 67%)',
        'gradient-display': 'linear-gradient(180deg, rgba(255,255,255,1) 30%, rgba(77,4,170,1) 30%, rgba(110,7,243,1) 75%)',
      }),
      boxShadow: {
        bottom: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

//#6E07F3
//#141c3a

