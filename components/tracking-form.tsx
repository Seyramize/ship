"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      router.push(`/track?number=${encodeURIComponent(trackingNumber.trim())}`)
    }
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center">Track Your Shipment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter tracking number (try SF1234567890)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <Button type="submit" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Track Now
            </Button>
          </div>
          <div className="text-sm text-center space-y-2">
            <p className="text-muted-foreground">
              Don't have a tracking number?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              for assistance.
            </p>
            <p className="text-xs text-muted-foreground">Try our demo tracking numbers: SF1234567890 or SF9876543210</p>
          </div>
        </form>
      </div>
    </section>
  )
}
