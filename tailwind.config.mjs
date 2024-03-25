/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Prompt", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dd-main-bg": "#111319",
        "dd-section-bg": "#15171C",
        "dd-primary": "#DD4242",
        "dd-grey": "#717171",
        "dd-card-grey": "#1D1E22",
        "dd-text-grey": "#B5B5B5",
      },
    },
  },
  plugins: [],
};
