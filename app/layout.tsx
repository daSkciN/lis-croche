import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Nunito } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lis Crochê - Peças Artesanais Feitas com Amor',
  description:
    'Peças de crochê exclusivas, feitas à mão com carinho. Roupas, acessórios e itens para casa da coleção original Lis Crochê. Feito com Amor. Feito à Mão.',
  generator: 'v0.app',
  icons: {
    icon: [

    {
        url: '/icon.jpeg',
        type: 'image/jpeg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3efe4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`bg-background ${fraunces.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
