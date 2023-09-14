/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'my-white': 'rgb(251, 253, 255)',
        'f8f8f8': '#f8f8f8',
        'search-input-white': '#ccc',
        'gainsboro': 'rgb(220, 220, 220)'
      },
      width: {
        'my-width': '75vw',
        'w-inherit': 'inherit',
        'landingHeaderContainer-main': '70vw',
        '25rem': '25rem'
      },
      height: {
        'landingHeaderSection-height': '65vh'
      },
      fontSize: {
        '7': '7rem',
        '2.3': '2.3rem'
      },
      backgroundImage: {
        'landingHeaderSection': "url('./src/utils/images/top-sec-bg-img.jpeg')"
      },
      flexGrow:{
        '0.5': '0.5'
      },
      padding: {
        'header-nav-ul-li': '0vw 2vw',
        'search-input': '12px 20px'
      },
      borderWidth: {
        '1px': "1px",
        '0.09rem': '0.09rem'
      },
      display: {
        'inherit': 'inherit'
      },
      boxShadow: {
        'commonHeaderBoxShadow': 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'
      },
      dropShadow: {
        'filter-b': false
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}

