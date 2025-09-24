/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      fontFamily: {
        sans: ['"General Sans"', 'Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'cosmic-void': '#06041a',
        'cosmic-haze': '#1f153b',
        'cosmic-flare': '#5c1bb3',
        'cosmic-aurora': '#2cb1bc',
        'cosmic-rose': '#f076a4'
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(circle at 20% 20%, rgba(92,27,179,0.35), transparent 55%), radial-gradient(circle at 80% 10%, rgba(44,177,188,0.28), transparent 50%), linear-gradient(145deg, #06041a 0%, #0b0d26 50%, #040211 100%)',
        'aurora-gradient': 'linear-gradient(135deg, rgba(92,27,179,0.35), rgba(240,118,164,0.18))'
      },
      boxShadow: {
        glass: '0 20px 60px rgba(15, 23, 42, 0.55)',
        glow: '0 0 20px rgba(127, 90, 240, 0.45)'
      },
      backdropBlur: {
        xs: '2px',
        xl: '30px',
        '2xl': '55px'
      },
      dropShadow: {
        neon: '0 0 20px rgba(127,90,240,0.6)'
      },
      borderRadius: {
        '4xl': '2.5rem'
      },
      animation: {
        'gradient-move': 'gradientMove 18s ease infinite',
        'float-slow': 'floatSlow 12s ease-in-out infinite'
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}
