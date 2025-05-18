"use client"

import { useState, useEffect } from "react"

type TrackingEvent = {
  trackingNumber: string
  status: string
  estimatedDelivery: string
  origin: string
  destination: string
  currentLocation: string
  lastUpdated: string
  history: {
    date: string
    location: string
    status: string
    icon: string
  }[]
}

export function useTrackingSSE(trackingNumber: string | null) {
  const [data, setData] = useState<TrackingEvent | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  useEffect(() => {
    if (!trackingNumber) {
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setError(null)

    // Create EventSource for SSE
    const eventSource = new EventSource(`/api/tracking/${trackingNumber}`)

    // Handle connection open
    eventSource.onopen = () => {
      setIsConnected(true)
      setIsLoading(false)
    }

    // Handle messages
    eventSource.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data)
        setData(parsedData)
        setLastUpdate(new Date())
        setIsLoading(false)
      } catch (err) {
        setError("Failed to parse tracking data")
        setIsLoading(false)
      }
    }

    // Handle errors
    eventSource.onerror = () => {
      setError("Connection error. Trying to reconnect...")
      setIsConnected(false)

      // EventSource automatically tries to reconnect
    }

    // Clean up on unmount
    return () => {
      eventSource.close()
    }
  }, [trackingNumber])

  return { data, error, isLoading, isConnected, lastUpdate }
}
