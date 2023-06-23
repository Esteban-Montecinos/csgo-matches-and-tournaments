import Navigation from './components/Navigation'
import './globals.css'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({ weight: '400',subsets: ['latin'] })

export const metadata = {
  title: 'CS:GO | PARTIDOS Y TORNEOS',
  description: 'Partidos y torneos de CS:GO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={noto.className}>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
