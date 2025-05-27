import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe - Full-Stack Developer & UI/UX Designer",
  description:
    "Portfolio of John Doe, a passionate full-stack developer and UI/UX designer creating digital experiences that make a difference.",
  keywords: "full-stack developer, UI/UX designer, React, Next.js, portfolio, web development",
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Full-Stack Developer & UI/UX Designer",
    description: "Portfolio showcasing innovative web development projects and design solutions.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
