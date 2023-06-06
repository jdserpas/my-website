import './globals.css'
import { Inter } from 'next/font/google'
import bg from '../../public/background.jpg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Josh Serpas - Software Development',
  description: `An overview of an individual's Engineering practices`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
