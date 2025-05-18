"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim() || !emailRegex.test(email)) {
      setResult({
        success: false,
        message: "Please enter a valid email address",
      })
      return
    }

    setIsSubmitting(true)
    setResult(null)

    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false)
      setResult({
        success: true,
        message: "Thank you for subscribing to our newsletter!",
      })
      setEmail("")

      // Clear success message after 5 seconds
      setTimeout(() => {
        setResult(null)
      }, 5000)
    }, 1000)
  }

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-muted-foreground mb-6">
          Stay updated with our latest news, shipping tips, and exclusive offers.
        </p>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>

          {result && (
            <div
              className={`mt-4 p-3 rounded-md border ${
                result.success
                  ? "bg-green-100 border-green-300 text-green-800 dark:bg-green-900/30 dark:border-green-800/30 dark:text-green-400"
                  : "bg-red-100 border-red-300 text-red-800 dark:bg-red-900/30 dark:border-red-800/30 dark:text-red-400"
              }`}
            >
              <div className="flex items-start gap-2">
                {result.success ? (
                  <CheckCircle className="h-5 w-5 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 mt-0.5" />
                )}
                <p>{result.message}</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
