import type { Metadata } from 'next'
import './globals.css'
import './theme-toggle.scss'
import { Raleway, Rampart_One } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'

const raleway = Raleway({ subsets: ['latin'], weight: ['400','900'], variable: '--font-raleway'})
const rampart_one = Rampart_One({subsets:['latin'], weight: '400', variable: '--font-rampart-one'})

export const metadata: Metadata = {
  title: 'Portfolio', 
  description: 'Portfolio by Angel Agelvis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} ${rampart_one.variable}`}><ThemeProvider attribute='class' defaultTheme='system'>{children}</ThemeProvider></body>
    </html>
  )
}
