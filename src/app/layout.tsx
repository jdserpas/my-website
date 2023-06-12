import './globals.css'
import { Providers } from './providers'


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
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
