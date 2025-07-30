/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'Inter', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Professional Ocean Theme
        'ocean': {
          'deep': '#0a0e27',      // Deep navy - professional background
          'darker': '#1e293b',    // Darker blue-gray
          'medium': '#334155',    // Medium slate
          'bright': '#0ea5e9',    // Professional sky blue
          'light': '#38bdf8',     // Light blue
          'pale': '#e0f2fe',      // Very light blue
          'accent': '#06b6d4',    // Cyan accent
        }
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #38bdf8 100%)',
        'ocean-gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #1e293b 50%, #334155 100%)',
        'ocean-gradient-light': 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #06b6d4 100%)',
        'ocean-radial': 'radial-gradient(ellipse at center, #0ea5e9 0%, #1e293b 50%, #0a0e27 100%)',
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-accent': 'var(--gradient-accent)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-lg': '0 0 40px rgba(14, 165, 233, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        'glass': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(14, 165, 233, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
