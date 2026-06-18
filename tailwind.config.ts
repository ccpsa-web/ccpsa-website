import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A3050',
        blue: '#4A6E91',
        'blue-text': '#3A5A7A',
        amber: '#85B7EB',
        'amber-text': '#3A5A7A',
        'light-gray': '#F7F0E6',
        sage: '#90B08A',
        linen: '#E8D9C4',
        driftwood: '#85B7EB',
      },
      fontFamily: {
        sans: ['Calibri', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
