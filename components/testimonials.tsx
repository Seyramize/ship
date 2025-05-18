"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "ShipFast Logistics has transformed our supply chain with their reliable and efficient shipping services. We've reduced delivery times by 30% since partnering with them.",
    author: "Sarah Johnson",
    position: "Supply Chain Director, TechCorp Inc.",
    logo: "/abstract-tech-logo.png",
  },
  {
    quote:
      "The team at ShipFast goes above and beyond to ensure our products reach customers on time. Their customer service is exceptional, and they always find solutions to our shipping challenges.",
    author: "Michael Chen",
    position: "Operations Manager, Global Retail",
    logo: "/abstract-retail-logo.png",
  },
  {
    quote:
      "We've been working with ShipFast for over 5 years, and they've consistently provided outstanding service. Their international shipping expertise has helped us expand into new markets seamlessly.",
    author: "Emma Rodriguez",
    position: "CEO, Artisan Exports",
    logo: "/placeholder-e4v9c.png",
  },
  {
    quote:
      "As a small business, finding a reliable shipping partner was crucial. ShipFast offers competitive rates without compromising on service quality. They've been instrumental in our growth.",
    author: "David Patel",
    position: "Founder, Handcrafted Goods",
    logo: "/placeholder-wrwm5.png",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <Quote className="h-10 w-10 text-secondary/40 mb-4" />
                      <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                        <img src={testimonial.logo || "/placeholder.svg"} alt="Company logo" className="h-8 w-auto" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  activeIndex === index ? "bg-secondary" : "bg-gray-300 dark:bg-gray-700",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-16 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`/abstract-corporate-logo.png?height=60&width=120&query=corporate logo ${i}`}
              alt={`Client logo ${i}`}
              className="h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
