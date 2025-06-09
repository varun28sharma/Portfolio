import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Varun Sharma - Full-Stack Developer",
  description:
    "Portfolio of Varun Sharma, a passionate full-stack developer and UI/UX designer creating digital experiences that make a difference.",
  keywords: "full-stack developer, React, Next.js, portfolio, web development",
  authors: [{ name: "Varun Sharma" }],
  openGraph: {
    title: "Varun Sharma - Full-Stack Developer",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
