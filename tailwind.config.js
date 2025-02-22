/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "390px",
        "2xl": "1420px",
      },
      fontFamily: {
        sans: ['var(--font-ubuntu)'],
        futura: ['Futura', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        neutral: {
          750: '#313131'
        },
        background: {
          DEFAULT: "#FFFFFF",
          accent: "#F3F4F6",
          accentClick: "#E5E7EB",
      },
      sidebar: {
        pas: "#2C486E"
      }
      },
      backgroundImage: {
        bg: "url('/bg.jpeg')",
      },
      boxShadow: {
        input: `
          0px 1px 0px -1px var(--tw-shadow-color),
          0px 1px 1px -1px var(--tw-shadow-color),
          0px 1px 2px -1px var(--tw-shadow-color),
          0px 2px 4px -2px var(--tw-shadow-color),
          0px 3px 6px -3px var(--tw-shadow-color)
        `,
        highlight: `
          inset 0px 0px 0px 1px var(--tw-shadow-color),
          inset 0px 1px 0px var(--tw-shadow-color)
        `,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}