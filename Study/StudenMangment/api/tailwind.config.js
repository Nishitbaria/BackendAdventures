module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 4s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, #ff416c, #ff4b2b)",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover"],
    },
  },
  plugins: [],
};
