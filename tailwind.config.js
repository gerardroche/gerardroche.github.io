/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '.vitepress/theme/**/*.{vue,js,ts,jsx,tsx,md}',
    'src/**/*.md',
  ],
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
}
