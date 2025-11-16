/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sentinel-blue': '#0891b2',
        'sentinel-green': '#10b981',
        'sentinel-gray-light': '#374151',
        'sentinel-gray-medium': '#1f2937',
        'sentinel-gray-dark': '#111827',
      },
    },
  },
  plugins: [],
}
