import './globals.css'
import type { Metadata } from 'next'
import { Inter , } from 'next/font/google'
import Navber from './components/Navbar'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adds Wachting',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
      <Navber />
      <main className="pt-16">{children}</main> {/* Add padding to avoid content overlap */}
      <Footer/>
    </body>
  </html>
  );
}