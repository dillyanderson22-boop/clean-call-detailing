import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0C10',
        bg2: '#10141A',
        card: '#161C24',
        fg: '#EAEEF3',
        muted: '#8C98A6',
        line: 'rgba(234,238,243,0.10)',
        accent: '#34B7F1',
        'accent-dark': '#1E93C9',
        sand: '#E6C15A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: { shell: '1320px' },
    },
  },
  plugins: [],
}
export default config
