import { Header } from '@/components/Header'
import './globals.css'
import './styles.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trust',
  description: 'Administración de pruebas de poligrafo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
