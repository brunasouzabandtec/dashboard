const defaultTheme = require("tailwindcss/defaultTheme");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  purge: {
    enabled: isProd,
    content: ["./src/**/*.tsx"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/ui")],
};
