module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ubuntu: '#E95420',
        arch: '#1793D1',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '200% 0',
          },
          '50%': {
            'background-position': '0% 0',
          },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s linear infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
}