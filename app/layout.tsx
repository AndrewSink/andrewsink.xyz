import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Andrew Sink',
  description: 'Andrew Sink - Social links, projects, and more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
