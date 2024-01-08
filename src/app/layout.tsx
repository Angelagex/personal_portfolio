import type { Metadata } from 'next'
import './globals.css'
import './theme-toggle.scss'
import { Raleway, Rampart_One } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Pointer from '@/components/ui/pointer'

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '900'], variable: '--font-raleway' })
const rampart_one = Rampart_One({ subsets: ['latin'], weight: '400', variable: '--font-rampart-one' })

export const metadata: Metadata = {
  title: 'Angel Agelvis',
  description: 'Portfolio by Angel Agelvis',
  creator: 'Angel Agelvis',
  keywords: ['portfolio', 'web developer', 'programming', 'react', 'next.js', 'tailwindcss', 'javascript', 'typescript', 'tailwindcss', 'software developer']
}
interface SearchParams {
  searchParams: {
    lang: string;
    theme: string;
  }
}
export default function RootLayout({
  children,
  searchParams
}: {
  children: React.ReactNode,
  searchParams: SearchParams
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} ${rampart_one.variable}`}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
