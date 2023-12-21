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
        github: "#24292F",
        kakao: "#FEE500",
        naver: "#03C75A",
        iron: "#1c39bb",
        austin: "#82b553",
        jose: '#2db400',
        eric: '#1EC078'
      },
      mytheme: {
        primary: "#fb275d",
        secondary: "#ffcc00",
        accent: "rgba(0,204,111,0.53)",
        neutral: "#a358df",
        'base-100': "#d1d5db",
        success: "#00cc6f",
        warning: "#fcb545",
        error: "#e54e68",
      },
    },
  },
  daisyui: {
    base: false,
    themes: [
      {
        mytheme: {
          primary: "#fb275d",
          secondary: "#ffcc00",
          accent: "rgba(0,204,111,0.53)",
          neutral: "#a358df",
          'base-100': "#d1d5db",
          success: "#00cc6f",
          warning: "#fcb545",
          error: "#e54e68",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

export default config