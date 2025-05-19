"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
        isScrolled ? "py-3 bg-white shadow-md dark:bg-navy-800 dark:shadow-navy-900/50" : "py-5 bg-transparent"
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
                            ? "text-navy-800 hover:bg-gray-100 dark:text-white dark:hover:bg-navy-700"
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
              isScrolled ? "text-navy-800 dark:text-white" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"
                } ${isScrolled ? "bg-navy-800 dark:bg-white" : "bg-white"}`}
              ></span>
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100 w-4"
                } ${isScrolled ? "bg-navy-800 dark:bg-white" : "bg-white"}`}
              ></span>
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "w-6 rotate-45 -translate-y-2" : "w-5"
                } ${isScrolled ? "bg-navy-800 dark:bg-white" : "bg-white"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-navy-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav>
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      {link.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(link.name)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-navy-800 dark:text-white ${
                              activeDropdown === link.name ? "bg-gray-100 dark:bg-navy-700" : ""
                            } ${
                              pathname.startsWith(link.href) && !activeDropdown
                                ? "text-teal-500 dark:text-teal-400"
                                : ""
                            }`}
                          >
                            {link.name}
                            <ChevronDown
                              className={`h-5 w-5 transition-transform ${
                                activeDropdown === link.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-1 pl-4 space-y-1 border-l-2 border-teal-500/30 ml-4"
                              >
                                {link.dropdown.map((item) => (
                                  <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Link
                                      href={item.href}
                                      className={`block px-4 py-2 rounded-md text-navy-800 dark:text-white hover:bg-gray-100 dark:hover:bg-navy-700 ${
                                        pathname === item.href ? "text-teal-500 dark:text-teal-400" : ""
                                      }`}
                                    >
                                      {item.name}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block px-4 py-3 rounded-md text-navy-800 dark:text-white hover:bg-gray-100 dark:hover:bg-navy-700 ${
                            pathname === link.href ? "text-teal-500 dark:text-teal-400" : ""
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-navy-700">
                <Link
                  href="/quote"
                  className="block w-full py-3 text-center bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
