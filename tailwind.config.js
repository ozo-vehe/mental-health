/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mh_pry_brand: "#1f2b6c",
        mh_sec_brand: "#0524c9",
        mh_dark_text: "#1a1a1a",
        mh_body_text: "#4d4d4d",
        mh_subtle_text: "#808080",
        mh_accent: "#e1eeff",
        mh_light: "#ffffff",
        mh_success: "#31d0aa",
        mh_error: "#dc3545",
        mh_warning: "#eed2002",
        mh_brown: "#CF9963",
        mh_nude: "#DBB38A"
      },
      fontSize: {
        mh_large: "64px",
        mh_h1: "48px",
        mh_h2: "40px",
        mh_h3: "32px",
        mh_h4: "28px",
        mh_h5: "24px", // Spaing the same with h6 but shown to be different
        mh_h6: "20px",
        mh_body_big: "16px",
        mh_body_small: "14px",
        mh_subtext: "12px",
        mh_btn_text: "16px"
      }
    },
  },
  plugins: [],
}