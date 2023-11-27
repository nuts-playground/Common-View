import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "github": "#24292F",
        "kakao": "#FEE500",
        "naver": "#03C75A"
      }
    },
  },
  daisyui: {
    base: false,
    themes: [
      {
        mytheme: {

          "primary": "#fb275d",

          "secondary": "#ffcc00",

          "accent": "#00cc6f",

          "neutral": "#a358df",

          "base-100" : "#d1d5db",

          "info": "#00cff4",

          "success": "#00cc6f",

          "warning": "#fcb545",

          "error": "#e54e68",

          ".btn-custom": {
            "font-weight": "400",
            "border": "none",
          },
        },
      },

    ],
  },
  plugins: [
    require("daisyui")
  ],
}
export default config
