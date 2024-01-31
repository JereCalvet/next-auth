import type { Metadata } from 'next'
import { inter } from '@/src/components/ui/fonts'
import '@/src/styles/globals.css'
import { cn } from '@/src/lib/utils'
import { ThemeProvider } from '@/src/components/theme/theme-provider'
import { SiteHeader } from '@/src/components/site-header'

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
      )} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
