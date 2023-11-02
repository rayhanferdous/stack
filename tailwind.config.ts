import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1425px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "stk-cyan": "#2980BA",
        // blue
        "stk-blue": "#2F80ED",
        "stk-blue-1": "#3B97D3",
        "stk-blue-2": "#B0D3F0",
        "stk-blue-3": "#377DFF",
        // slate
        "stk-slate": "#4E5D78",
        "stk-slate-1": "#F0F5FA",
        "stk-slate-2": "#F0F5F9",
        // gray
        "stk-gray": "#323B4B",
        "stk-gray-1": "#A7AFBC",
        "stk-gray-2": "#B0B7C3",
        "stk-gray-3": "#FAFBFC",
        "stk-gray-4": "#8A94A6",
        // zinc
        "stk-zinc": "#333333",
        "stk-zinc-1": "#F1F1F1",
        "stk-zinc-2": "#F3F3F3",
      },
    },
  },
  plugins: [],
};
export default config;
