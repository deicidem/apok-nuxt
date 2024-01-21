import animate from "tailwindcss-animate";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const safelist = ["dark"];
export const MyTheme = {
  colors: {
    primary: {
      DEFAULT: "#46a1bf",
      50: "#46a1bf",
      100: "#46a1bf",
      200: "#46a1bf",
      300: "#46a1bf",
      400: "#46a1bf",
      500: "#46a1bf",
      600: "#46a1bf",
      700: "#46a1bf",
      800: "#46a1bf",
      900: "#46a1bf",
    },
    green: {
      DEFAULT: "#3BA676",
      50: "#B4E4CF",
      100: "#A5DFC5",
      200: "#87D4B2",
      300: "#69CA9E",
      400: "#4BBF8B",
      500: "#3BA676",
      600: "#2C7D59",
      700: "#1E533B",
      800: "#0F2A1E",
      900: "#000000",
    },
    blue: {
      DEFAULT: "#0096FF",
      50: "#B8E2FF",
      100: "#A3D9FF",
      200: "#7AC8FF",
      300: "#52B8FF",
      400: "#29A7FF",
      500: "#0096FF",
      600: "#0075C7",
      700: "#00548F",
      800: "#003357",
      900: "#00121F",
    },
    red: {
      DEFAULT: "#FF6464",
      50: "#FFFFFF",
      100: "#FFFFFF",
      200: "#FFDEDE",
      300: "#FFB6B6",
      400: "#FF8D8D",
      500: "#FF6464",
      600: "#FF2C2C",
      700: "#F30000",
      800: "#BB0000",
      900: "#830000",
    },
  },
};

export default <Partial<Config>>{
  darkMode: "class",
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}",
    "./Error.{js,ts,vue}",
    "./error.{js,ts,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      colors: {
        primary: MyTheme.colors.primary,
        green: MyTheme.colors.green,
        blue: MyTheme.colors.blue,
        red: MyTheme.colors.red,
        slate: colors.slate,
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
};
export const plugins = [animate];
