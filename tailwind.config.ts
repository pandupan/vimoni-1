import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        theme: {
          primary :'#8E7E6E',
          secondary: {
            DEFAULT : '#8577A6',
            light: '#BAA2F2'
          },
          tertiary :'BAA2F2',
          text :{
            DEFAULT : '#333333',
            blue :'#0000FF',
            green: '#008000'
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
