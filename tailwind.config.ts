import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      space: 'Space Regular',
      spacebold: 'Space Bold',
    },
    colors: {
      white: '#FEFEFE',
      cream: '#F6F8FF',
      blue: '#0079FF',
      darkblue: '#4B6A9B',
      lightblue: '#697C9A',
      black: '#2B3442',
    },
    extend: {

    },
  },
  plugins: [],
};
export default config;
