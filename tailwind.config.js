module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          DEFAULT: '#808080', // मिड ग्रे
          light: '#D3D3D3',   // हल्का ग्रे
          dark: '#404040',    // गहरा ग्रे
        },
        buttonBlack: '#1A1A1A', // बटन के लिए ब्लैक (डिफ़ॉल्ट स्टेट)
        buttonBlackHover: '#333333', // होवर स्टेट पर हल्का ब्लैक
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          default: '#808080', // मिड ग्रे
          light: '#D3D3D3',   // हल्का ग्रे
          dark: '#404040',    // गहरा ग्रे
        },
        buttonBlack: '#1A1A1A', // बटन के लिए ब्लैक (डिफ़ॉल्ट स्टेट)
        buttonBlackHover: '#333333', // होवर स्टेट पर हल्का ब्लैक
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
