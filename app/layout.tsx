import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Santo Request - Consultora de Tecnología y Creatividad",
  description: "Consultora de tecnología y creatividad AI-First formada por especialistas con superpoderes digitales. Transformamos ideas en soluciones tecnológicas innovadoras.",
  generator: 'Next.js',
  metadataBase: new URL('https://www.santorequest.com'),
  openGraph: {
    title: 'Santo Request - Consultora de Tecnología y Creatividad',
    description: 'Consultora de tecnología y creatividad AI-First formada por especialistas con superpoderes digitales. Transformamos ideas en soluciones tecnológicas innovadoras.',
    url: 'https://www.santorequest.com',
    siteName: 'Santo Request',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Santo Request - Consultora de Tecnología y Creatividad',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santo Request - Consultora de Tecnología y Creatividad',
    description: 'Consultora de tecnología y creatividad AI-First formada por especialistas con superpoderes digitales.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Santo Request",
              "url": "https://www.santorequest.com",
              "logo": "https://www.santorequest.com/logo.png",
              "description": "Consultora de tecnología y creatividad AI-First formada por especialistas con superpoderes digitales.",
              "sameAs": [
                "https://www.linkedin.com/company/santo-request",
                "https://twitter.com/santorequest",
                "https://www.instagram.com/santorequest"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
