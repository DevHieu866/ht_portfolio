import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rc: "#d82828",
        bc: "#212121",
        wc: "#f8f8f8"
      },
      animation: {
        slide: `slide 5s linear`
      },
      keyframes: {
        slide: {
          '0%':{
            opacity: `0`,
            transform: `translateX(-300px)`
          },
          '100%': {
            opacity: `1`,
            transform: `translateX(0px)`
          }
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
