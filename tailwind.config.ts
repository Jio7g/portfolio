import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        glass: 'rgba(20, 20, 20, 0.6)',
        neonGreen: '#00ff9d',
        neonBlue: '#00f3ff',
        neonPurple: '#bc13fe',
        darkPanel: '#0a0a0a'
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    }
  }
}
