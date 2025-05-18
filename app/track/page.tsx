import type { Metadata } from "next"
import TrackingPage from "@/components/tracking-page"
import PageHeader from "@/components/page-header"

export const metadata: Metadata = {
  title: "Track Your Shipment - ShipFast Logistics",
  description:
    "Track your shipment in real-time with our easy-to-use tracking system. Get detailed information about your package location and delivery status.",
}

export default function TrackPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Track Your Shipment" description="Real-time tracking for your peace of mind" />
      <TrackingPage />
    </div>
  )
}
