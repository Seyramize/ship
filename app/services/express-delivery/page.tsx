import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, CheckCircle, ArrowRight, Truck, MapPin, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Express Delivery Services | GlobalTide Express",
  description: "Time-critical shipping options with guaranteed delivery times for urgent shipments.",
}

export default function ExpressDeliveryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-teal-500/20 rounded-full">
                <p className="text-teal-400 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  Express Delivery Services
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                When <span className="text-teal-400">Time Matters</span> Most
              </h1>
              <p className="text-lg text-white/80 max-w-lg">
                Our express delivery services provide guaranteed, time-definite shipping solutions for your most urgent
                and time-sensitive shipments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-all flex items-center gap-2"
                >
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/30 transition-all"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/express-delivery-hero.png"
                alt="Express Delivery"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fastest Delivery</p>
                    <p className="text-lg font-bold text-navy-800">Same Day Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Express Delivery Options</h2>
            <p className="text-lg text-gray-600">
              Choose from our range of express delivery services to meet your specific time-sensitive shipping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Same-Day Delivery</h3>
              <p className="text-gray-600 mb-4">
                Ultra-fast delivery service for your most urgent shipments, with pickup and delivery on the same day.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Delivery within hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Available in select metro areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Dedicated courier service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Real-time tracking</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-navy-800 mb-2">Starting at</p>
                <p className="text-3xl font-bold text-teal-500">$49.99</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Next-Day Delivery</h3>
              <p className="text-gray-600 mb-4">
                Guaranteed delivery by the next business day, perfect for urgent but not same-day critical shipments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Delivery by 10:30 AM, 12 PM, or end of day</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Nationwide coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Priority handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Delivery confirmation</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-navy-800 mb-2">Starting at</p>
                <p className="text-3xl font-bold text-teal-500">$29.99</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Truck className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">2-Day Express</h3>
              <p className="text-gray-600 mb-4">
                Fast and reliable delivery within two business days, balancing speed and cost-effectiveness.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Delivery within 2 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Cost-effective express option</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>End-to-end tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Money-back guarantee</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-navy-800 mb-2">Starting at</p>
                <p className="text-3xl font-bold text-teal-500">$19.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Express Delivery Coverage</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our express delivery services cover major cities and metropolitan areas nationwide, with international
                express options available to key global destinations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">Domestic Coverage</h3>
                    <p className="text-gray-600">
                      Same-day delivery available in 50+ major cities, next-day delivery nationwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">Cutoff Times</h3>
                    <p className="text-gray-600">
                      Same-day: Order by 10 AM local time, Next-day: Order by 6 PM local time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Truck className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">International Express</h3>
                    <p className="text-gray-600">Express delivery to 220+ countries and territories worldwide</p>
                  </div>
                </div>
              </div>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors"
              >
                Check Delivery Availability
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/express-coverage-map.png"
                alt="Express Delivery Coverage Map"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">On-Time Rate</p>
                    <p className="text-lg font-bold text-navy-800">99.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How Express Delivery Works</h2>
            <p className="text-lg text-gray-600">
              Our streamlined process ensures your time-sensitive shipments are delivered quickly and reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Place Your Order</h3>
              <p className="text-gray-600">
                Book your express delivery online or by phone, providing pickup and delivery details.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Rapid Pickup</h3>
              <p className="text-gray-600">
                Our courier arrives at your location within the specified timeframe to collect your package.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Priority Transport</h3>
              <p className="text-gray-600">
                Your package is transported via our express network with priority handling at every stage.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Guaranteed Delivery</h3>
              <p className="text-gray-600">
                Your package is delivered within the guaranteed timeframe with proof of delivery.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-800 hover:bg-navy-900 text-white font-medium rounded-full transition-colors"
            >
              Book Express Delivery
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Express Delivery Use Cases</h2>
            <p className="text-lg text-gray-600">
              Our express delivery services are ideal for a variety of time-sensitive shipping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-navy-800 relative">
                <Image src="/medical-supplies.png" alt="Medical Supplies" fill className="object-cover opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Medical Supplies</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Urgent delivery of medical supplies, medications, and equipment to healthcare facilities and patients.
                </p>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-navy-800 relative">
                <Image
                  src="/critical-documents.png"
                  alt="Critical Documents"
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Critical Documents</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Time-sensitive legal documents, contracts, and important paperwork requiring immediate delivery.
                </p>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-navy-800 relative">
                <Image src="/replacement-parts.png" alt="Replacement Parts" fill className="object-cover opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Replacement Parts</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Urgent delivery of replacement parts and components to minimize downtime for businesses and
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Need Express Delivery Today?</h2>
              <p className="text-xl mb-8">
                Don't wait! Book your express delivery now and get your package delivered on time, every time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-white text-teal-600 hover:bg-gray-100 font-medium rounded-full transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full border border-white/30 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Time-Definite Delivery</h3>
                  <p className="text-white/80">
                    Guaranteed delivery within the specified timeframe or your money back.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
                  <p className="text-white/80">
                    Monitor your shipment's progress in real-time with our advanced tracking system.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                  <p className="text-white/80">
                    Our express delivery specialists are available 24/7 to assist with your urgent shipping needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
