"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass backdrop-blur-xl shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link href="/" className="group">
            <div className="flex items-center space-x-2">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isScrolled ? "shadow-lg" : "shadow-neon"}`}
              >
                <span className="text-white font-bold text-lg">VS</span>
              </div>
              <span
                className={`font-bold text-xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } group-hover:text-gradient`}
              >
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-all duration-300 hover:scale-105 ${
                  pathname === item.href
                    ? "text-blue-600 font-semibold"
                    : isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-gray-900 hover:text-blue-600"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 animate-scale-in" />
                )}
              </Link>
            ))}
            <Link href="/contact">
              <Button
                size="sm"
                className={`transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900 shadow-neon"
                }`}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass backdrop-blur-xl border-t border-white/10 animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-gray-900 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 animate-slide-in-left ${
                    pathname === item.href ? "text-blue-600 font-semibold bg-blue-50" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Link href="/contact">
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Hire Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
