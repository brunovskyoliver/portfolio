/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light':'#abb2bf',
        'dark':'#282C34',
        'darker':'#17191d',
        'comment':'#abb2bfaa',
        'lightComment':'#abb2bf10',
        'backgroundComment':'#abb2bf11',
        'purple':'#C678DD',
        'red':'#E06C75',
        'yellow':'#E5C07B',
        'blue':'#61AFEF',
        'green':'#98C379'


      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
        '18': '4.5rem',
        '5.5': '10.5rem'
      }
    },
  },
  plugins: [],
}
