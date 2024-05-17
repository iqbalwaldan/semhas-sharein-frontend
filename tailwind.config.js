/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          base: '#2652FF',
          10: '#D4DCFF',
          20: '#B7C5FF',
          30: '#92A8FF',
          40: '#6E8CFF',
          50: '#4A6FFF',
          60: '#2044D4',
          70: '#1937AA',
          80: '#132980',
          90: '#0D1B55',
          100: '#081033'
        },
        secondary: {
          base: '#4D2DED',
          10: '#DBD5FB',
          20: '#C4B9F9',
          30: '#A696F6',
          40: '#8873F3',
          50: '#6B50F0',
          60: '#4026C5',
          70: '#331E9E',
          80: '#271777',
          90: '#1A0F4F',
          100: '#0F092F'
        },
        success: {
          base: '#52CE29',
          10: '#DCF5D4',
          20: '#C5EFB8',
          30: '#A8E694',
          40: '#8CDE70',
          50: '#6FD64D',
          60: '#44AC22',
          70: '#37891B',
          80: '#296715',
          90: '#1B450E',
          100: '#102908'
        },
        warning: {
          base: '#FFC300',
          10: '#FFF3CC',
          20: '#FFEBAA',
          30: '#FFE180',
          40: '#FFD755',
          50: '#FFCD2B',
          60: '#D4A200',
          70: '#AA8200',
          80: '#806200',
          90: '#554100',
          100: '#332700'
        },
        error: {
          base: '#DB2D24',
          10: '#F8D5D3',
          20: '#F3B9B6',
          30: '#ED9691',
          40: '#E7736D',
          50: '#E15049',
          60: '#B6261E',
          70: '#921E18',
          80: '#6E1712',
          90: '#490F0C',
          100: '#2C0907'
        },
        neutral: {
          base: '#96989C',
          10: '#EAEAEB',
          20: '#DCDDDE',
          30: '#CACBCD',
          40: '#B9BABD',
          50: '#A7A9AC',
          60: '#7D7F82',
          70: '#646568',
          80: '#4B4C4E',
          90: '#323334',
          100: '#1E1E1F'
        },
        button: {
          base: '#F7B217',
        }
      },
      width: {
        'register-left': '57.29167%',
        'register-right': '42.70834%',
        'card-regis':''
      },
      height: {
        'card-regis':''
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
