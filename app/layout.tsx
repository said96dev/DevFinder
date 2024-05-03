import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import NextTopLoader from 'nextjs-toploader';
const inter = Inter({ subsets: ['latin'] })
import { Header } from "./header";

export const metadata: Metadata = {
  title: 'DevFinder',
  description: 'App to pair progrmming',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {' '}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
          />

          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
