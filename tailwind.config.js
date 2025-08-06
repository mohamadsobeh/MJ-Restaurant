/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: '#0f0f0f', 
        foreground: '#ffffff', 
        border: '#2c2c2c',
        input: '#1f1f1f',
        ring: '#d4af37', 

        primary: {
          DEFAULT: '#d4af37', 
          foreground: '#000000',
        },
        secondary: {
          DEFAULT: '#2c2c2c',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#cbd5e1', 
          foreground: '#a3a3a3',
        },
        accent: {
          DEFAULT: '#1e1e1e',
          foreground: '#d4af37',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff',
        },
        popover: {
          DEFAULT: '#1f1f1f',
          foreground: '#ffffff',
        },
        chart: {
          '1': '#d4af37',
          '2': '#ffb703',
          '3': '#fb8500',
          '4': '#023047',
          '5': '#219ebc',
        },
      },
      fontFamily: {
        display: ["'Fredoka'", "sans-serif"], 
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
