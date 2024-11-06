/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          text: "#06283D",
          background: "#ffffff",
          tint: "#256D85",
          tabIconDefault: "#cccccc",
          tabIconSelected: "#256D85",
        },
        dark: {
          text: "#ffffff",
          background: "#06283D",
          tint: "#256D85",
          tabIconDefault: "#47B5FF",
          tabIconSelected: "#256D85",
        },
      },
    },
  },
  plugins: [],
};
