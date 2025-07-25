import { Poppins } from 'next/font/google'

export const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ['latin'],
  variable: '--font-poppins',
  preload: true,
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true
})
