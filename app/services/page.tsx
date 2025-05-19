import type { Metadata } from "next"
import Link from "next/link"
import { Truck, Globe, Ship, Plane, Package, Warehouse, Clock, Shield, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "@/components/page-header"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Our Services - GlobalTide Express",
  description:
    "Explore our comprehensive range of shipping and logistics services including domestic shipping, international shipping, freight & cargo, express delivery, and warehousing.",
}

const services = [
  {
    id: "domestic",
    icon: Truck,
    title: "Domestic Shipping",
    description:
      "Reliable and fast shipping services within the country, with options for standard, express, and same-day delivery.",
    features: [
      "Door-to-door delivery",
      "Real-time tracking",
      "Flexible pickup options",
      "Delivery time guarantees",
      "Volume shipping discounts",
    ],
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    href: "/services/domestic-shipping",
  },
  {
    id: "international",
    icon: Globe,
    title: "International Shipping",
    description: "Comprehensive global shipping solutions with customs clearance assistance and tracking capabilities.",
    features: [
      "Customs documentation assistance",
      "Import/export compliance",
      "Global tracking system",
      "Multiple service levels",
      "Duty and tax calculation",
    ],
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    href: "/services/international-shipping",
  },
  {
    id: "freight",
    icon: Ship,
    title: "Freight & Cargo",
    description:
      "Full-service freight solutions for businesses of all sizes, including FCL, LCL, and specialized cargo handling.",
    features: [
      "Ocean freight services",
      "Air freight options",
      "Oversized cargo handling",
      "Hazardous materials transport",
      "Intermodal solutions",
    ],
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    href: "/services/freight-cargo",
  },
  {
    id: "express",
    icon: Plane,
    title: "Express Delivery",
    description: "Time-critical shipping options with guaranteed delivery times for urgent shipments.",
    features: [
      "Same-day delivery options",
      "Next-day air services",
      "Priority handling",
      "Weekend and holiday delivery",
      "Time-specific delivery windows",
    ],
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    href: "/services/express-delivery",
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing & Fulfillment",
    description: "End-to-end logistics solutions including storage, inventory management, and order fulfillment.",
    features: [
      "Secure storage facilities",
      "Inventory management system",
      "Pick and pack services",
      "Returns processing",
      "Cross-docking capabilities",
    ],
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    href: "/services/warehousing",
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging Solutions",
    description: "Professional packaging services to ensure your items are protected during transit.",
    features: [
      "Custom packaging design",
      "Eco-friendly options",
      "Fragile item specialization",
      "Packaging materials supply",
      "Crating for large items",
    ],
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-100 dark:bg-teal-900/30",
    href: "/services/packaging",
  },
  {
    id: "time-critical",
    icon: Clock,
    title: "Time-Critical Logistics",
    description: "Specialized solutions for time-sensitive shipments with dedicated support and monitoring.",
    features: [
      "Just-in-time delivery",
      "Expedited customs clearance",
      "Dedicated shipment monitoring",
      "24/7 support team",
      "Contingency planning",
    ],
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    href: "/services/time-critical",
  },
  {
    id: "secure",
    icon: Shield,
    title: "Secure Transport",
    description: "Enhanced security measures for high-value or sensitive shipments requiring special handling.",
    features: [
      "GPS tracking and monitoring",
      "Tamper-evident packaging",
      "Armed security options",
      "Chain of custody documentation",
      "Insurance coverage",
    ],
    color: "text-gray-600 dark:text-gray-400",
    bgColor: "bg-gray-100 dark:bg-gray-800/50",
    href: "/services/secure-transport",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Our Services"
        description="Comprehensive shipping and logistics solutions tailored to your needs"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            id={service.id}
            className="overflow-hidden border-t-4 hover:shadow-lg transition-all"
            style={{ borderTopColor: `hsl(var(--${service.color.split("-")[1]}))` }}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-md", service.bgColor)}>
                  <service.icon className={cn("h-6 w-6", service.color)} />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </div>
              <CardDescription className="mt-2">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className={cn("mt-1 h-1.5 w-1.5 rounded-full", service.bgColor)} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href={service.href}
                  className={cn("flex items-center text-sm font-medium hover:underline", service.color)}
                >
                  Learn more about {service.title}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
