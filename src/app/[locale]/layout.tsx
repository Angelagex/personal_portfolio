import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/theme-toggle.scss'
import { Raleway, Rampart_One } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '900'], variable: '--font-raleway' })
const rampart_one = Rampart_One({ subsets: ['latin'], weight: '400', variable: '--font-rampart-one' })
export type Locale = "en" | "es";

export const metadata: Metadata = {
  title: 'Angel Agelvis',
  description: 'Portfolio by Angel Agelvis',
  creator: 'Angel Agelvis',
  keywords: ['portfolio', 'web developer', 'programming', 'react', 'next.js', 'tailwindcss', 'javascript', 'typescript', 'tailwindcss', 'software developer']
}

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: { locale: Locale }
}) {
  return (
    <html lang={locale}>
      <body className={`${raleway.className} ${rampart_one.variable}`}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
