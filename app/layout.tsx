import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "weather now - Check Weather Conditions Anywhere",
  description:
    "weather now helps outdoor enthusiasts check current weather conditions for any city worldwide. Fast, accurate, and easy to use.",
  keywords: ["weather", "forecast", "outdoor", "conditions", "temperature", "humidity"],
  authors: [{ name: "weather now" }],
  openGraph: {
    title: "weather now",
    description: "Check weather conditions for your outdoor adventures",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
