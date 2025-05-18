"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Ship, Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Domestic Shipping", href: "/services/domestic-shipping" },
      { name: "International Shipping", href: "/services/international-shipping" },
      { name: "Freight & Cargo", href: "/services/freight-cargo" },
      { name: "Express Delivery", href: "/services/express-delivery" },
      { name: "Warehousing", href: "/services/warehousing" },
    ],
  },
  { name: "Track", href: "/track" },
  { name: "Quote", href: "/quote" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQs", href: "/faq" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
    // Close any open dropdowns
    setActiveDropdown(null)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md" : "py-5 bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Ship className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary dark:text-white">ShipFast</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" ref={dropdownRef}>
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className={`flex items-center gap-1 py-2 font-medium transition-colors ${
                          pathname === link.href || pathname.startsWith(link.href + "/")
                            ? "text-primary"
                            : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
                        />
                      </button>
                      {activeDropdown === link.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 rounded-lg bg-white dark:bg-gray-800 shadow-lg overflow-hidden z-20">
                          <ul className="py-2">
                            {link.dropdown.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className={`block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                    pathname === item.href ? "bg-gray-100 dark:bg-gray-700 text-primary" : ""
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                            <li>
                              <Link
                                href={link.href}
                                className="block px-4 py-2 text-primary font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                View All Services
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`py-2 font-medium transition-colors ${
                        pathname === link.href
                          ? "text-primary"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/quote"
              className="px-6 py-2.5 rounded-full font-medium bg-primary hover:bg-primary-dark text-white transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-10 p-2 rounded-md text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="fixed inset-0 z-40 lg:hidden bg-white dark:bg-gray-900">
              <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
                <nav className="flex-1">
                  <ul className="space-y-6 py-6">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        {link.dropdown ? (
                          <div className="space-y-4">
                            <button
                              onClick={() => toggleDropdown(link.name)}
                              className="flex items-center justify-between w-full text-xl font-medium text-gray-900 dark:text-white"
                            >
                              {link.name}
                              <ChevronDown
                                className={`h-5 w-5 transition-transform ${
                                  activeDropdown === link.name ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {activeDropdown === link.name && (
                              <ul className="pl-4 space-y-3 border-l-2 border-primary/30">
                                {link.dropdown.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className={`block py-1 ${
                                        pathname === item.href
                                          ? "text-primary"
                                          : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                                      }`}
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                                <li>
                                  <Link
                                    href={link.href}
                                    className="block py-1 text-primary font-medium"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    View All Services
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            className={`block text-xl font-medium ${
                              pathname === link.href
                                ? "text-primary"
                                : "text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href="/quote"
                    className="block w-full py-3 text-center bg-primary hover:bg-primary-dark text-white font-medium rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
