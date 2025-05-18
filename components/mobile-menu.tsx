"use client"

import { useState, useEffect } from "react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

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
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-8">
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
                <span className="text-2xl font-bold text-primary dark:text-white">ShipFast</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
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
                  <a
                    href="/services"
                    className="block text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </a>
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
