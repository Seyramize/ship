"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

// Dynamic text options that will cycle
const dynamicTextOptions = ["Global Logistics", "Express Delivery", "Freight Solutions", "Supply Chain", "Warehousing"]

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  const particlesRef = useRef<HTMLDivElement>(null)

  // Handle text animation cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTextOptions.length)
        setIsAnimating(true)
      }, 500) // Wait for exit animation to complete
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])

  // Create parallax effect for particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!particlesRef.current) return

      const particles = particlesRef.current.querySelectorAll(".particle")
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      particles.forEach((particle, i) => {
        const depth = ((i % 5) + 1) / 5 // Create different depths
        const moveX = (x - 0.5) * depth * 50
        const moveY = (y - 0.5) * depth * 50

        particle.setAttribute("style", `transform: translate(${moveX}px, ${moveY}px)`)
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-logistics.jpg" alt="Global Logistics Network" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary-dark/85"></div>
      </div>

      {/* Animated Particles Background */}
      <div ref={particlesRef} className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`particle absolute rounded-full bg-white/10 backdrop-blur-sm transition-transform duration-300 ease-out`}
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
            >
              <p className="text-white/90 font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span className="animate-pulse">Trusted by 10,000+ businesses worldwide</span>
              </p>
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Revolutionizing
                <br />
                <span className="relative inline-block h-[1.2em] overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isAnimating && (
                      <motion.span
                        key={currentTextIndex}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute text-gradient bg-gradient-to-r from-secondary via-secondary-light to-white"
                      >
                        {dynamicTextOptions[currentTextIndex]}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/80 max-w-lg"
            >
              Seamless, efficient, and secure logistics solutions for businesses and individuals. Your cargo is our
              priority, from pickup to delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary-light text-white font-medium rounded-full px-8 py-6 transition-all hover:shadow-glow-secondary hover:scale-105"
              >
                <Link href="/quote" className="flex items-center gap-2">
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/30 px-8 py-6 transition-all"
              >
                <Link href="/track">Track Shipment</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 text-white"
            >
              {["Fast Delivery", "Global Coverage", "Secure Shipping"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-glow p-6 max-w-md ml-auto border border-white/20">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-glow-secondary">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-8 h-8 text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 8H4V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 8H20V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H10C9.46957 16 8.96086 15.7893 8.58579 15.4142C8.21071 15.0391 8 14.5304 8 14V12H16V14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-4 mt-6 text-white">Quick Shipping Calculator</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-1">Origin</label>
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-1">Destination</label>
                  <input
                    type="text"
                    placeholder="Enter delivery location"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-1">Weight</label>
                    <input
                      type="text"
                      placeholder="kg"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-1">Package Type</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent">
                      <option className="bg-primary text-white">Parcel</option>
                      <option className="bg-primary text-white">Document</option>
                      <option className="bg-primary text-white">Freight</option>
                    </select>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg transition-colors"
                >
                  Calculate Shipping
                </motion.button>
              </form>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-light/30 rounded-2xl z-0 animate-float"></div>
            <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 w-10 h-10 bg-secondary/50 rounded-full z-0 animate-float-delay"></div>
            <div className="absolute -top-5 right-10 w-20 h-20 border-4 border-secondary/30 rounded-full z-0 animate-spin-slow"></div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}
