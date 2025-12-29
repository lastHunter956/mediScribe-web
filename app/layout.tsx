import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "MediScribe AI - Radiología Inteligente Reinventada",
  description:
    "Transforma lecturas de radiografías en informes médicos al instante con 99% de precisión. IA avanzada para radiólogos.",
  generator: "v0.app",
  keywords: [
    "radiología IA",
    "informes radiológicos",
    "análisis de radiografías",
    "inteligencia artificial radiología",
    "automatización médica",
  ],
  authors: [{ name: "MediScribe AI" }],
  openGraph: {
    title: "MediScribe AI - Radiología Inteligente Reinventada",
    description: "Transforma lecturas de radiografías en informes médicos al instante con 99% de precisión.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediScribe AI - Radiología Inteligente Reinventada",
    description: "Transforma lecturas de radiografías en informes médicos al instante con 99% de precisión.",
  },
  icons: {
    icon: [
      {
        url: "/images/icono-app.png",
        type: "image/png",
      },
    ],
    apple: "/images/icono-app.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${plusJakarta.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
