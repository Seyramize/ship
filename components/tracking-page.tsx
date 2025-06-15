"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Package, Truck, Plane, Warehouse, CheckCircle, Wifi, WifiOff, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTrackingSSE } from "@/hooks/use-tracking-sse"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function TrackingPage() {
  const searchParams = useSearchParams()
  const initialTrackingNumber = searchParams.get("number") || ""

  const [trackingNumber, setTrackingNumber] = useState(initialTrackingNumber)
  const [activeTrackingNumber, setActiveTrackingNumber] = useState<string | null>(
    initialTrackingNumber ? initialTrackingNumber : null,
  )

  const { data: trackingData, error, isLoading, isConnected, lastUpdate } = useTrackingSSE(activeTrackingNumber)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      setActiveTrackingNumber(trackingNumber.trim())
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Package":
        return Package
      case "Truck":
        return Truck
      case "Plane":
        return Plane
      case "Warehouse":
        return Warehouse
      case "CheckCircle":
        return CheckCircle
      default:
        return Package
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "text-green-600 dark:text-green-400"
      case "Out for Delivery":
        return "text-blue-600 dark:text-blue-400"
      case "In Transit":
        return "text-amber-600 dark:text-amber-400"
      default:
        return "text-primary"
    }
  }

  const getTimeAgo = (dateString: string | Date) => {
    const date = new Date(dateString)
    const now = new Date()
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (seconds < 60) return `${seconds} seconds ago`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`
    const days = Math.floor(hours / 24)
    return `${days} day${days !== 1 ? "s" : ""} ago`
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <Button type="submit" disabled={isLoading && !trackingData} className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              {isLoading && !trackingData ? "Tracking..." : "Track"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {isConnected && trackingData && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {isConnected ? (
              <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                <Wifi className="h-3 w-3 mr-1" />
                Live Updates Active
              </Badge>
            ) : (
              <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                <WifiOff className="h-3 w-3 mr-1" />
                Reconnecting...
              </Badge>
            )}
          </div>
          {lastUpdate && (
            <div className="text-sm text-muted-foreground flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              Last updated: {getTimeAgo(lastUpdate)}
            </div>
          )}
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {trackingData && (
        <div className="space-y-8 animate-fade-in">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Tracking Number</h3>
                  <p className="text-lg font-semibold">{trackingData.trackingNumber}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Status</h3>
                  <p className={cn("text-lg font-semibold", getStatusColor(trackingData.status))}>
                    {trackingData.status}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Current Location</h3>
                  <p className="text-lg">{trackingData.currentLocation}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Destination</h3>
                  <p className="text-lg">{trackingData.destination}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    {trackingData.status === "Delivered" ? "Delivered On" : "Estimated Delivery"}
                  </h3>
                  <p className="text-lg font-semibold">
                    {formatDate(trackingData.estimatedDelivery)}
                    {trackingData.status !== "Delivered" && (
                      <span className="text-sm font-normal text-muted-foreground ml-2">(estimated)</span>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-xl font-semibold mb-4">Shipment History</h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
              <ul className="space-y-6">
                {trackingData.history.map((event, index) => {
                  const IconComponent = getIconComponent(event.icon)
                  const isLatest = index === 0
                  const isNew = lastUpdate && new Date(event.date) > new Date(Date.now() - 10000) // New if less than 10 seconds old

                  return (
                    <li key={index} className="relative pl-14">
                      <div
                        className={cn(
                          "absolute left-0 p-3 rounded-full transition-all",
                          isLatest
                            ? "bg-primary text-white"
                            : isNew
                              ? "bg-secondary text-white scale-110"
                              : "bg-gray-100 dark:bg-gray-800",
                        )}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div
                        className={cn(
                          "bg-white dark:bg-gray-800 p-4 rounded-lg border transition-all",
                          isNew && "border-secondary shadow-md",
                        )}
                      >
                        <div className="flex justify-between items-start">
                          <p className="text-sm text-muted-foreground">{formatDate(event.date)}</p>
                          {isNew && <Badge className="bg-secondary text-white">New Update</Badge>}
                        </div>
                        <p className="font-medium">{event.status}</p>
                        <p className="text-sm">{event.location}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      )}

      {!trackingData && !isLoading && activeTrackingNumber && (
        <Card className="p-8 text-center">
          <p className="text-lg mb-2">No tracking information found</p>
          <p className="text-muted-foreground">Please check the tracking number and try again.</p>
        </Card>
      )}

      {!trackingData && !isLoading && !activeTrackingNumber && (
        <Card className="p-8 text-center">
          <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <p className="text-lg mb-2">Enter your tracking number to get started</p>
          <p className="text-muted-foreground">
            You can find your tracking number in your email after payment has been processed.
          </p>
          {/* <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
            <p className="text-sm font-medium mb-2">Try these demo tracking numbers:</p> */}
            {/* <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setTrackingNumber("SF1234567890")
                  setActiveTrackingNumber("SF1234567890")
                }}
              >
                SF1234567890
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setTrackingNumber("SF9876543210")
                  setActiveTrackingNumber("SF9876543210")
                }}
              >
                SF9876543210
              </Button>
            </div> */}
          {/* </div> */}
        </Card>
      )}
    </div>
  )
}
