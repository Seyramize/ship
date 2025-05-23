"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Ship, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close mobile menu and dropdown when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white shadow-md dark:bg-gray-800 dark:shadow-gray-900/50" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
                isScrolled ? "bg-teal-500 text-white" : "bg-white text-teal-500"
              }`}
            >
              <Ship className="h-6 w-6" />
            </div>
            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-navy-800 dark:text-white" : "text-white"
              }`}
            >
              GlobalTide Express
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className={`flex items-center gap-1 px-4 py-2 rounded-md font-medium transition-colors ${
                          isScrolled
                            ? "text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-navy-700"
                            : "text-white hover:bg-white/10"
                        } ${activeDropdown === link.name ? "bg-gray-100 dark:bg-navy-700" : ""} ${
                          pathname.startsWith(link.href) && !activeDropdown ? "text-teal-500 dark:text-teal-400" : ""
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            ref={dropdownRef}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-64 rounded-md bg-white dark:bg-navy-800 shadow-lg overflow-hidden z-20"
                          >
                            <ul className="py-1">
                              {link.dropdown.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className={`block px-4 py-2 text-navy-800 dark:text-white hover:bg-gray-100 dark:hover:bg-navy-700 ${
                                      pathname === item.href
                                        ? "bg-gray-100 text-teal-500 dark:bg-navy-700 dark:text-teal-400"
                                        : ""
                                    }`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-2 rounded-md font-medium transition-colors ${
                        isScrolled
                          ? "text-navy-800 hover:bg-gray-100 dark:text-white dark:hover:bg-navy-700"
                          : "text-white hover:bg-white/10"
                      } ${pathname === link.href ? "text-teal-500 dark:text-teal-400" : ""}`}
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
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                isScrolled ? "bg-teal-500 hover:bg-teal-600 text-white" : "bg-white hover:bg-gray-100 text-navy-800"
              }`}
            >
              Get a Quote
            </Link>
          </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`lg:hidden p-2 rounded-md transition-colors ${
          isScrolled ? "text-navy-800 dark:text-white" : "text-white"}
        `}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex items-stretch">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative ml-auto w-[90vw] max-w-xs h-full bg-white dark:bg-gray-900 shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100 dark:border-navy-800">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-9 h-9 rounded-md flex items-center justify-center bg-teal-500 text-white">
                  <Ship className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold text-navy-800 dark:text-white">GlobalTide</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 text-navy-800 dark:text-white hover:bg-gray-100 dark:hover:bg-navy-700 rounded-full transition-colors"
                aria-label="Close menu"
                type="button"
                style={{ position: 'absolute', top: 18, right: 18, zIndex: 10 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* CTA Button */}
            <div className="px-5 pt-5">
              <Link
                href="/quote"
                className="block w-full py-3 text-center bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg text-base shadow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
            {/* Navigation */}
            <nav className="flex-1 px-2 pt-6 pb-8 overflow-y-auto">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-navy-800 dark:text-white font-semibold text-base focus:outline-none transition-colors ${
                            activeDropdown === link.name ? "bg-gray-100 dark:bg-navy-700" : "hover:bg-gray-50 dark:hover:bg-navy-800"
                          }`}
                          aria-expanded={activeDropdown === link.name}
                          type="button"
                        >
                          {link.name}
                          <ChevronDown
                            className={`h-5 w-5 ml-2 transition-transform ${
                              activeDropdown === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.ul
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.18 }}
                              className="mt-1 mb-2 ml-2 space-y-1 border-l-2 border-teal-500/30 pl-4 bg-white dark:bg-gray-900 z-40 relative"
                            >
                              {link.dropdown.map((item) => (
                                <li key={item.name}>
                                  <button
                                    type="button"
                                    className={`block w-full text-left px-3 py-2 rounded-md text-navy-800 dark:text-white hover:bg-gray-100 dark:hover:bg-navy-700 text-base ${
                                      pathname === item.href ? "text-teal-500 dark:text-teal-400 font-bold" : ""
                                    }`}
                                    onClick={async () => {
                                      await router.push(item.href);
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    {item.name}
                                  </button>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-lg text-navy-800 dark:text-white hover:bg-gray-50 dark:hover:bg-navy-800 font-semibold text-base transition-colors ${
                          pathname === link.href ? "text-teal-500 dark:text-teal-400 font-bold" : ""
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            {/* Spacer */}
            <div className="h-4" />
          </motion.div>
        </div>
      )}
    </header>
  )
}
