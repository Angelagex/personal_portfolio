import type { Config } from 'tailwindcss'


const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "raleway": "var(--font-raleway)",
        "rampart-one": "var(--font-rampart-one)",
      }
    },
    screens: {
      xs: '480px',
      xxs: '380px',
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    }
  },
  plugins: [],
}
export default config
