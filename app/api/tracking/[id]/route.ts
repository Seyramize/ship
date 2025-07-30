import { type NextRequest, NextResponse } from "next/server"

// Mock database of shipments with their statuses
const shipments = new Map([
  [
    "SF1234567890",
    {
      trackingNumber: "SF1234567890",
      status: "In Transit",
      estimatedDelivery: "2023-06-15",
      origin: "New York, NY",
      destination: "Los Angeles, CA",
      currentLocation: "Denver, CO",
      lastUpdated: new Date().toISOString(),
      history: [
        {
          date: "2023-06-10T08:30:00",
          location: "New York, NY",
          status: "Package received",
          icon: "Package",
        },
        {
          date: "2023-06-11T10:15:00",
          location: "New York, NY",
          status: "Package processed",
          icon: "Package",
        },
        {
          date: "2023-06-12T07:45:00",
          location: "Chicago, IL",
          status: "In transit",
          icon: "Plane",
        },
        {
          date: "2023-06-13T14:20:00",
          location: "Denver, CO",
          status: "In transit",
          icon: "Truck",
        },
      ],
    },
  ],
  [
    "SF3438872900",
    {
      trackingNumber: "SF3438872900",
      status: "In Transit",
      estimatedDelivery: "2025-08-05",
      origin: "Accra, Ghana",
      destination: "Darthmouth, Canada",
      currentLocation: "Instabul, Turkey",
      lastUpdated: new Date().toISOString(),
      history: [
        {
          date: "2025-07-28T08:30:00",
          location: "Accra, Ghana",
          status: "Package received",
          icon: "Package",
        },
        {
          date: "2025-07-29T10:15:00",
          location: "Accra, Ghana",
          status: "Departed from origin country",
          icon: "Plane",
        },
        {
          date: "2025-07-30T12:00:00",
          location: "Instabul, Turkey",
          status: "In transit",
          icon: "Plane",
        },
        
        
      ],
    },
  ],
  [
    "SF9876543210",
    {
      trackingNumber: "SF9876543210",
      status: "Out for Delivery",
      estimatedDelivery: "2023-06-14",
      origin: "Miami, FL",
      destination: "Atlanta, GA",
      currentLocation: "Atlanta, GA",
      lastUpdated: new Date().toISOString(),
      history: [
        {
          date: "2023-06-08T09:20:00",
          location: "Miami, FL",
          status: "Package received",
          icon: "Package",
        },
        {
          date: "2023-06-09T11:30:00",
          location: "Miami, FL",
          status: "Package processed",
          icon: "Package",
        },
        {
          date: "2023-06-10T08:15:00",
          location: "Jacksonville, FL",
          status: "In transit",
          icon: "Truck",
        },
        {
          date: "2023-06-11T14:45:00",
          location: "Atlanta, GA",
          status: "Arrived at destination facility",
          icon: "Warehouse",
        },
        {
          date: "2023-06-12T07:30:00",
          location: "Atlanta, GA",
          status: "Out for delivery",
          icon: "Truck",
        },
      ],
    },
  ],
])

// Possible status updates for simulation
const possibleUpdatesDomesticLong = [
  {
    status: "In Transit",
    locations: ["Phoenix, AZ", "Las Vegas, NV", "San Bernardino, CA"],
    icon: "Truck",
  },
  {
    status: "Arrived at Facility",
    locations: ["Las Vegas, NV", "San Bernardino, CA", "Los Angeles, CA"],
    icon: "Warehouse",
  },
  {
    status: "Out for Delivery",
    locations: ["Los Angeles, CA"],
    icon: "Truck",
  },
  {
    status: "Delivered",
    locations: ["Los Angeles, CA"],
    icon: "CheckCircle",
  },
]

const possibleUpdatesInternational = [
  {
    status: "In Transit",
    locations: ["Halifax, NS", "Dartmouth, NS"],
    icon: "Truck",
  },
  {
    status: "Arrived at Facility",
    locations: ["Dartmouth, NS"],
    icon: "Warehouse",
  },
  {
    status: "Out for Delivery",
    locations: ["Dartmouth, NS"],
    icon: "Truck",
  },
  {
    status: "Delivered",
    locations: ["Dartmouth, NS"],
    icon: "CheckCircle",
  },
]

const possibleUpdatesDomesticShort = [
  {
    status: "In Transit",
    locations: ["Savannah, GA"],
    icon: "Truck",
  },
  {
    status: "Arrived at Facility",
    locations: ["Atlanta, GA"],
    icon: "Warehouse",
  },
  {
    status: "Out for Delivery",
    locations: ["Atlanta, GA"],
    icon: "Truck",
  },
  {
    status: "Delivered",
    locations: ["Atlanta, GA"],
    icon: "CheckCircle",
  },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const trackingId = params.id

  // Check if the tracking ID exists
  if (!shipments.has(trackingId)) {
    return NextResponse.json({ error: "Tracking number not found" }, { status: 404 })
  }

  // Set up SSE headers
  const encoder = new TextEncoder()
  const customReadable = new ReadableStream({
    start(controller) {
      let possibleUpdates
      switch (trackingId) {
        case "SF1234567890":
          possibleUpdates = possibleUpdatesDomesticLong
          break
        case "SF3438872900":
          possibleUpdates = possibleUpdatesInternational
          break
        case "SF9876543210":
          possibleUpdates = possibleUpdatesDomesticShort
          break
        default:
          possibleUpdates = possibleUpdatesDomesticLong
      }

      // Send initial data
      const shipment = shipments.get(trackingId)
      controller.enqueue(encoder.encode(`data: ${JSON.stringify(shipment)}\n\n`))

      // Function to send updates
      const sendUpdate = () => {
        // Get the shipment
        const shipment = shipments.get(trackingId)
        if (!shipment) return

        // Don't update if already delivered
        if (shipment.status === "Delivered") {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(shipment)}\n\n`))
          return
        }

        const currentStatusIndex = possibleUpdates.findIndex(p => p.status === shipment.status)

        // If no further updates are available, do nothing
        if (currentStatusIndex === -1 || currentStatusIndex >= possibleUpdates.length - 1) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(shipment)}\n\n`))
          return
        }

        // Get the next sequential update
        const update = possibleUpdates[currentStatusIndex + 1]

        // Choose a random location from the update
        const locationIndex = Math.floor(Math.random() * update.locations.length)
        const location = update.locations[locationIndex]

        // Create a new history entry
        const newEntry = {
          date: new Date().toISOString(),
          location,
          status: update.status,
          icon: update.icon,
        }

        // Update the shipment
        shipment.history.push(newEntry)
        shipment.status = update.status
        shipment.currentLocation = location
        shipment.lastUpdated = new Date().toISOString()

        // If delivered, update estimated delivery to now
        if (update.status === "Delivered") {
          shipment.estimatedDelivery = new Date().toISOString()
        }

        // Update the shipment in the map
        shipments.set(trackingId, shipment)

        // Send the updated shipment
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(shipment)}\n\n`))
      }

      // Send updates every 10 hours
      const interval = setInterval(sendUpdate, 36000000)

      // Clean up on close
      request.signal.addEventListener("abort", () => {
        clearInterval(interval)
      })
    },
  })

  return new Response(customReadable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}
