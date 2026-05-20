import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: "#f4f3ef",
          100: "#e8e5dc",
          200: "#d4cec0",
          300: "#b4ac9d",
          400: "#8b8478",
          500: "#6d665d",
          600: "#56524d",
          700: "#424244",
          800: "#252a2f",
          900: "#151a20",
          950: "#090d11"
        },
        service: {
          amber: "#f5c542",
          orange: "#d95d25",
          blue: "#1f6feb",
          green: "#1f9d55",
          steel: "#7f8b94",
          concrete: "#ede9df",
          ink: "#090d11"
        }
      },
      boxShadow: {
        soft: "0 18px 40px rgba(9, 13, 17, 0.12)",
        lift: "0 22px 44px rgba(9, 13, 17, 0.18)",
        industrial: "0 18px 0 rgba(9, 13, 17, 0.08), 0 28px 60px rgba(9, 13, 17, 0.16)"
      },
      backgroundImage: {
        "steel-grid":
          "linear-gradient(rgba(9,13,17,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(9,13,17,0.08) 1px, transparent 1px)",
        "hazard-stripes":
          "repeating-linear-gradient(135deg, #f5c542 0 12px, #090d11 12px 24px)",
        "concrete-noise":
          "radial-gradient(circle at 1px 1px, rgba(9,13,17,0.08) 1px, transparent 0)"
      }
    },
  },
  plugins: [],
};

export default config;
