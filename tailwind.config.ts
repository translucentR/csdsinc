import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          dark: '#004C99',
        },
        secondary: {
          DEFAULT: '#2C3E50',
          light: '#34495E',
        },
        accent: '#00B894',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    }
  },

  plugins: [typography, forms, containerQueries]
} satisfies Config;
