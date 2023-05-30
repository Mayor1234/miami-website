/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero: "url('../public/images/miami_h.jpg')",
      },
      borderWidth: {
        1: '1px',
      },
      padding: {
        1: '0.20rem',
      },
      colors: {
        primaryColor: '#111111',
        secondaryColor: '#9b59b6',
        bgColor: '#34495e',
      },
      boxShadow: {
        btnShadow: '0px 0px 18px 3px rgba(52,73,94,1)',
      },
    },
  },
  plugins: [],
};
