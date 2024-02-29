import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/getAlignmentClassnames.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        body: 'var(--font-inter)',
      },
      colors: {
        'ww-accent': 'var(--ww-accent-color)',
        'ww-accent-text': 'var(--ww-text-on-accent-color)',
        'ww-background': 'var(--ww-background-color)',
        'ww-background-inverted': 'var(--ww-background-inverted-color)',
        'ww-text': 'var(--ww-text-color)',
        'ww-contrast-text': 'var(--ww-contrast-text-color)',
        'ww-menu-bg': 'var(--ww-menu-bg-color)',
        'ww-menu-text': 'var(--ww-menu-text-color)',
        'ww-cta-background': 'var(--ww-cta-bg-color, var(--ww-accent-color))',
        'ww-cta-text': 'var(--ww-cta-text-color, var(--ww-text-on-accent-color))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
