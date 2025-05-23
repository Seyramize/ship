"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const servicesDropdown = [
  { name: "Domestic Shipping", href: "/services/domestic-shipping" },
  { name: "International Shipping", href: "/services/international-shipping" },
  { name: "Freight & Cargo", href: "/services/freight-cargo" },
  { name: "Express Delivery", href: "/services/express-delivery" },
  { name: "Warehousing", href: "/services/warehousing" },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest("#mobile-menu") && !target.closest("#menu-button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        id="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-50 bg-white dark:bg-gray-900">
          {/* Close Icon (top right) */}
          <div className="fixed top-4 right-4 z-[100]">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors shadow"
              aria-label="Close menu"
              type="button"
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
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-3 mb-8">
              <a href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M21 12H3M3 12L8 7M3 12L8 17" />
                    <path d="M21 17H11M11 17L16 22M11 17L16 12" />
                    <path d="M21 7H11M11 7L16 2M11 7L16 12" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-primary dark:text-white">GlobalTide Express</span>
              </a>
            </div>

            <nav className="py-4">
              <ul className="space-y-6">
                <li>
                  <a
                    href="/"
                    className="block text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <div>
                    <button
                      type="button"
                      className="flex items-center justify-between w-full text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors focus:outline-none"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      tabIndex={0}
                    >
                      <span>Services</span>
                      <svg
                        className={`ml-2 h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <ul className="mt-2 ml-4 space-y-3 border-l-2 border-primary/20 pl-4 bg-white dark:bg-gray-900 z-40 relative">
                        {servicesDropdown.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block text-base font-normal text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors py-1"
                              onClick={() => {
                                setIsOpen(false);
                                setServicesOpen(false);
                              }}
                              tabIndex={0}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
                <li>
                  <a
                    href="/track"
                    className="block text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Track
                  </a>
                </li>
                <li>
                  <a
                    href="/quote"
                    className="block text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="block text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="mt-8">
              <a
                href="/quote"
                className="block w-full py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
