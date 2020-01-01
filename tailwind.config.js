const theme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        'blue-lighter': theme.colors.blue['600'],
        blue: theme.colors.blue['700'],
        'blue-darker': theme.colors.blue['800'],
      },
      spacing: {
        '2px': '2px',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
  },
  variants: {
    display: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'hover']
  },
  plugins: []
}