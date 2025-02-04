import Navbar from '@/components/NavBar'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrains.className} bg-black text-white`}>

        {children}

      </body>
    </html>
  )
}
