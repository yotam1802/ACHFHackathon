/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#006bff",

          secondary: "#836800",

          accent: "#00e6ff",

          neutral: "#201417",

          "base-100": "#e6ffff",

          info: "#37a8ff",

          success: "#009900",

          warning: "#ffcd00",

          error: "#ff6570",
        },
      },
    ],
  },
};
