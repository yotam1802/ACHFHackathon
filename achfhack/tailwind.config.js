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
          primary: "#08B4FF",
          secondary: "#836800",
          accent: "#08B4FF",
          neutral: "#08B4FF",
          "base-100": "#FFFFFF",
          info: "#37a8ff",
          success: "#009900",
          warning: "#ffcd00",
          error: "#ff6570",
        },
      },
    ],
  },
};
