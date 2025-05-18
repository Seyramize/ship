import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Truck, Globe, Ship, Plane, Package } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Truck,
    title: "Domestic Shipping",
    description:
      "Reliable and fast shipping services within the country, with options for standard, express, and same-day delivery.",
    color: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-600 dark:text-blue-400",
    href: "/services#domestic",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Comprehensive global shipping solutions with customs clearance assistance and tracking capabilities.",
    color: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-600 dark:text-green-400",
    href: "/services#international",
  },
  {
    icon: Ship,
    title: "Freight & Cargo",
    description:
      "Full-service freight solutions for businesses of all sizes, including FCL, LCL, and specialized cargo handling.",
    color: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-600 dark:text-purple-400",
    href: "/services#freight",
  },
  {
    icon: Plane,
    title: "Express Delivery",
    description: "Time-critical shipping options with guaranteed delivery times for urgent shipments.",
    color: "bg-red-100 dark:bg-red-900/30",
    textColor: "text-red-600 dark:text-red-400",
    href: "/services#express",
  },
  {
    icon: Package,
    title: "Warehousing & Fulfillment",
    description: "End-to-end logistics solutions including storage, inventory management, and order fulfillment.",
    color: "bg-amber-100 dark:bg-amber-900/30",
    textColor: "text-amber-600 dark:text-amber-400",
    href: "/services#warehousing",
  },
]

export default function ServicesPreview() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-muted-foreground">
          We offer a comprehensive range of shipping and logistics services to meet all your needs, from small packages
          to large freight.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all hover:translate-y-[-5px]"
          >
            <div className={cn("p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4", service.color)}>
              <service.icon className={cn("h-6 w-6", service.textColor)} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <Link href={service.href} className={cn("text-sm font-medium hover:underline", service.textColor)}>
              Learn more →
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button asChild>
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </section>
  )
}
