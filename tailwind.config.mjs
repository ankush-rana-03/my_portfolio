/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Beautiful blue gradient palette
        'ocean': {
          'deep': '#03045E',      // Deep navy blue
          'medium': '#0077B6',    // Medium blue  
          'bright': '#00B4D8',    // Bright cyan blue
          'light': '#90E0EF',     // Light blue
          'pale': '#CAF0F8',      // Very light blue/cyan
        }
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #03045E 0%, #0077B6 25%, #00B4D8 50%, #90E0EF 75%, #CAF0F8 100%)',
        'ocean-gradient-dark': 'linear-gradient(135deg, #03045E 0%, #0077B6 50%, #00B4D8 100%)',
        'ocean-gradient-light': 'linear-gradient(135deg, #00B4D8 0%, #90E0EF 50%, #CAF0F8 100%)',
        'ocean-radial': 'radial-gradient(ellipse at center, #00B4D8 0%, #0077B6 50%, #03045E 100%)',
      }
    },
  },
  plugins: [],
};
