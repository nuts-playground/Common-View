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
        eric: '#1EC078',
        jhonny: '#8c8cff',
        theo: '#ffff00',
        green: '#2db400'
      },
      borderWidth: {
        DEFAULT: '1px',
        '05': '0.5px',
      },
      scale: {
        DEFAULT: '0',
        '101': '1.01',
        '102': '1.02',
        '103': '1.03'
      },
      screens: {
        'tablet-up': '768px',
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
