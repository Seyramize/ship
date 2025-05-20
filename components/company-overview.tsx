import { Shield, Clock, Globe, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure Shipping",
    description:
      "Your cargo is protected with state-of-the-art security measures and comprehensive insurance coverage.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We pride ourselves on punctuality, with 99.7% of our shipments arriving on or before the estimated delivery date.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Our extensive network spans over 150 countries, ensuring we can deliver your shipments anywhere in the world.",
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective Solutions",
    description:
      "We optimize routes and consolidate shipments to provide you with the most economical shipping options.",
  },
]

export default function CompanyOverview() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose GlobalTide Express</h2>
        <p className="text-lg text-muted-foreground">
          With over 10 years of experience in the shipping and logistics industry, we've built a reputation for
          reliability, efficiency, and exceptional customer service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
