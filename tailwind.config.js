/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'neutral':{
          '900' : 'var(--color-neutral-900)',
          '100' : 'var(--color-neutral-100)',
        },
        'dark':{
          '900' : 'var(--color-dark-900)',
          '800' : 'var(--color-dark-800)',
          '400' : 'var(--color-dark-400)',
          '300' : 'var(--color-dark-300)',
          '100' : 'var(--color-dark-100)',
        },
        'primary':{
          '900' : 'var(--color-primary-900)',
          '800' : 'var(--color-primary-800)'
        }
      },
      maxWidth:{
        '8xl': 'var(--max-width-8xl)',
      },
      fontFamily:{
        'primary' : 'var(--ff-primary)'
      },
      fontWeight:{
        'regular' : 'var(--fw-regular)',
        'semibold' : 'var(--fw-semibold)',
      },
      fontSize:{
        'sm' : ['var(--fs-300)', 'var(--lh-300)'],
        'md' : ['var(--fs-400)', 'var(--lh-400)'],
        'base' : ['var(--fs-500)', 'var(--lh-500)'],
        'lg' : ['var(--fs-700)', 'var(--lh-700)'],
        'xl' : ['var(--fs-900)', 'var(--lh-900)'],
      },
      backgroundImage: {
        'star-empty': "url('../assets/star-empty.svg')",
        'star-fill': "url('../assets/star-fill.svg')"
      }
    },
  },
  plugins: [],
}
