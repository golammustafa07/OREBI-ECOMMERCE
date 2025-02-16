/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        "container" : "1604px",
        "containerx" : "1920px"
      },
      fontFamily : {
        "dm-sans" : ["DM Sans", "sans-serif"]
      },
      colors : {
        "primary" : "#262626"
      }
    },
  },
  plugins: [],
}

