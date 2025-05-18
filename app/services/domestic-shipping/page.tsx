import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Truck, Clock, CheckCircle, ArrowRight, MapPin, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Domestic Shipping Services | ShipFast Logistics",
  description:
    "Fast and reliable domestic shipping services with options for standard, express, and same-day delivery.",
}

export default function DomesticShippingPage() {
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
                  Domestic Shipping Services
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Fast & Reliable <span className="text-teal-400">Domestic Shipping</span> Solutions
              </h1>
              <p className="text-lg text-white/80 max-w-lg">
                Our domestic shipping services provide fast, reliable, and cost-effective delivery solutions for
                businesses and individuals across the country.
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
                src="/domestic-shipping-hero.png"
                alt="Domestic Shipping"
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
                    <p className="text-sm text-gray-600">Average Delivery Time</p>
                    <p className="text-lg font-bold text-navy-800">1-3 Business Days</p>
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
            <h2 className="text-3xl font-bold mb-4">Our Domestic Shipping Services</h2>
            <p className="text-lg text-gray-600">
              We offer a range of domestic shipping options to meet your specific needs, from standard delivery to
              same-day service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Truck className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Standard Delivery</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective shipping option with delivery within 2-3 business days for most destinations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Delivery within 2-3 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Real-time tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Proof of delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Up to 70 lbs per package</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-navy-800 mb-2">Starting at</p>
                <p className="text-3xl font-bold text-teal-500">$9.99</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Express Delivery</h3>
              <p className="text-gray-600 mb-4">
                Fast shipping option with guaranteed delivery by the next business day for most locations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Next-day delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Priority handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Delivery confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Up to 100 lbs per package</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-navy-800 mb-2">Starting at</p>
                <p className="text-3xl font-bold text-teal-500">$19.99</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Package className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Same-Day Delivery</h3>
              <p className="text-gray-600 mb-4">
                Ultra-fast shipping option with delivery on the same day for select metropolitan areas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Delivery within hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Dedicated courier</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Live tracking updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Up to 50 lbs per package</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-navy-800 mb-2">Starting at</p>
                <p className="text-3xl font-bold text-teal-500">$39.99</p>
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
              <h2 className="text-3xl font-bold mb-6">Nationwide Coverage</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our extensive network covers all 50 states, ensuring fast and reliable delivery to any destination in
                the country. With strategically located distribution centers, we can reach over 99% of the U.S.
                population within 2 business days.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">12 Distribution Centers</h3>
                    <p className="text-gray-600">Strategically located across the country</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Truck className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">5,000+ Delivery Vehicles</h3>
                    <p className="text-gray-600">Modern fleet for efficient deliveries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">99.7% On-Time Delivery</h3>
                    <p className="text-gray-600">Industry-leading reliability</p>
                  </div>
                </div>
              </div>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors"
              >
                Check Delivery Times
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/domestic-coverage-map.png"
                alt="Nationwide Coverage Map"
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
                    <p className="text-sm text-gray-600">Coverage</p>
                    <p className="text-lg font-bold text-navy-800">All 50 States</p>
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
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              Shipping with us is simple and straightforward. Follow these easy steps to get your package delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Request a Quote</h3>
              <p className="text-gray-600">
                Fill out our simple quote form with your shipping details to get an instant price estimate.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Schedule Pickup</h3>
              <p className="text-gray-600">
                Choose a convenient time for us to pick up your package from your location.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Track Your Shipment</h3>
              <p className="text-gray-600">
                Use our real-time tracking system to monitor your package's journey to its destination.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Delivery Confirmation</h3>
              <p className="text-gray-600">
                Receive confirmation when your package is successfully delivered to its destination.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-800 hover:bg-navy-900 text-white font-medium rounded-full transition-colors"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Ship with Confidence?</h2>
              <p className="text-xl mb-8">
                Join thousands of satisfied customers who trust ShipFast for their domestic shipping needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-white text-teal-600 hover:bg-gray-100 font-medium rounded-full transition-colors"
                >
                  Get a Free Quote
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
                  <h3 className="text-xl font-bold mb-2">Reliable Service</h3>
                  <p className="text-white/80">
                    With our 99.7% on-time delivery rate, you can trust us to deliver your packages when promised.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                  <p className="text-white/80">
                    Our transparent pricing ensures you get the best value for your shipping needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Exceptional Support</h3>
                  <p className="text-white/80">
                    Our dedicated customer service team is available 24/7 to assist with any questions or concerns.
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
