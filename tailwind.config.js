/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        primary: "#1E293B",   // Azul oscuro elegante
        secondary: "#073826ff", // Azul brillante para acentos
        accent: "#166a7bff",    // Amarillo/naranja para resaltar
      },
    },
  },
  plugins: [],
}
