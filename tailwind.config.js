/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all files with classes in src
    './public/index.html', // Include the HTML template
  ],
  theme: {
    extend: {}, // Extend default theme if needed
  },
  plugins: [],
};
