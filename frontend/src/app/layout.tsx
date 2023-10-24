import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book Store',
  description: 'Simple full-stack project built with next.js, springboot and AWS-DynamoDB. -monishwar.m.c',
  icons: ["bookStore.png"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <meta property="og:title" content="Book Store" />
      <meta property="og:description" content="Simple full-stack project built with next.js, springboot and AWS-DynamoDB. -monishwar.m.c" />
      <meta property="og:image" content="bookStore.png" />
    </head>
    <body className={inter.className}>
      {children}
    </body>
  </html>
  )
}
