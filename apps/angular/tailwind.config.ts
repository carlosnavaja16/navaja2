import type { Config } from 'tailwindcss';

export default {
  content: ['apps/angular/src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
} satisfies Config;
