/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#90db6b",

          "secondary": "#90ed78",

          "accent": "#db43a8",

          "neutral": "#1f1a2d",

          "base-100": "#e9eaf1",

          "info": "#aacbe4",

          "success": "#62da92",

          "warning": "#f3c758",

          "error": "#ea8276",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

