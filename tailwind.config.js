/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F9FAFB',
          backgroundSecondary: '#F3F4F6',
          text: '#2D2D2D',
          textSecondary: '#6B6B6B',
          primary: '#F97316',
          secondary: '#F59E0B',
          error: '#DC2626',
          success: '#22C55E',
          warning: '#FBBF24',
        },
        dark: {
          background: '#121212',
          backgroundSecondary: '#181818',
          text: '#EAEAEA',
          textSecondary: '#A8A8B3',
          primary: '#8B5CF6',
          secondary: '#D946EF',
          error: '#F87171',
          success: '#34D399',
          warning: '#FBBF24',
        },
      },
    },
  },
  plugins: [],
};
