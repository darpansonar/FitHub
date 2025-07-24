module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E11D48',  // rose-600
          dark: '#BE123C'      // rose-700
        },
        dark: {
          DEFAULT: '#111827',  // gray-900
          light: '#1F2937'     // gray-800
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}