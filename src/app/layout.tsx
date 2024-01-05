import type { Metadata } from 'next'
import { inter } from '@/src/components/ui/fonts'
import '@/src/styles/globals.css'
import { cn } from '@/src/lib/utils'

export const metadata: Metadata = {
  title: 'Test auth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )} >{children}</body>
    </html>
  )
}
