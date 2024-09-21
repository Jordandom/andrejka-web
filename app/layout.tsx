import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { AuroraBackground } from "@/components/layout/aurora-background"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/layout/navbar"
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Andrea Heckelová",
  description: "Individuální terapie",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={cn("h-screen flex flex-col", inter.className)}>
        <AuroraBackground>
          <Navbar />
          {children}
          <Toaster position="top-center" richColors />
        </AuroraBackground>
      </body>
    </html>
  )
}
