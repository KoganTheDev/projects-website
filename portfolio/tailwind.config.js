/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'federal-blue': '#03045eff',
        'marian-blue': '#023e8aff',
        'honolulu-blue': '#0077b6ff',
        'blue-green': '#0096c7ff',
        'pacific-cyan': '#0077b6ff',
        'vivid-sky-blue': '#48cae4ff',
        'non-photo-blue': '#90e0efff',
        'non-photo-blue-2': '#ade8f4ff',
        'light-cyan': '#00b4d8ff',
        
        // Dark mode complementary colors
        'dark-federal': '#010225',
        'dark-marian': '#1a56b3',
        'dark-honolulu': '#2a6b9c',
        'dark-blue-green': '#3a6b8c',
        'dark-pacific': '#0096c7',
        'dark-vivid': '#64d8f0',
        'dark-non-photo': '#e0f7ff',
        'dark-non-photo-2': '#f0fbff',
        'dark-cyan': '#00d4f0',
        
        // Theme colors
        'light-bg': '#caf0f8ff',
        'light-accent': '#ade8f4ff',
        'main-text': '#03045eff',
        'primary': '#0077b6ff',
        'dark-bg': '#010225',
        'dark-accent': '#64d8f0',
        'dark-text': '#ffffff',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
} 