import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Ship, Truck, Plane, CheckCircle, ArrowRight, Package, Scale } from "lucide-react"

export const metadata: Metadata = {
  title: "Freight & Cargo Services | ShipFast Logistics",
  description:
    "Full-service freight solutions for businesses of all sizes, including FCL, LCL, and specialized cargo handling.",
}

export default function FreightCargoPage() {
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
                  Freight & Cargo Services
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Powerful <span className="text-teal-400">Freight Solutions</span> for Every Business
              </h1>
              <p className="text-lg text-white/80 max-w-lg">
                From small shipments to full containers, our comprehensive freight and cargo services are designed to
                meet the needs of businesses of all sizes.
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
                src="/freight-cargo-hero.png"
                alt="Freight and Cargo Services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center">
                    <Ship className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Freight Capacity</p>
                    <p className="text-lg font-bold text-navy-800">Up to 40,000 lbs</p>
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
            <h2 className="text-3xl font-bold mb-4">Our Freight & Cargo Services</h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive freight solutions for businesses of all sizes, with options for ocean, air, and
              ground transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Ship className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ocean Freight</h3>
              <p className="text-gray-600 mb-4">
                Reliable and cost-effective ocean freight services for both FCL (Full Container Load) and LCL (Less than
                Container Load) shipments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>FCL & LCL options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Global port coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Customs clearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Cargo insurance available</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <Link href="/quote" className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium">
                  Get Ocean Freight Quote
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Plane className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Air Freight</h3>
              <p className="text-gray-600 mb-4">
                Fast and efficient air freight services for time-sensitive shipments, with options for express and
                standard delivery.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Express & standard options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Door-to-door service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Priority handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Hazardous goods capability</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <Link href="/quote" className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium">
                  Get Air Freight Quote
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Truck className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ground Freight</h3>
              <p className="text-gray-600 mb-4">
                Reliable ground transportation services for full truckload (FTL) and less than truckload (LTL)
                shipments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>FTL & LTL options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Nationwide coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Expedited service available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Specialized equipment</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <Link href="/quote" className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium">
                  Get Ground Freight Quote
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Specialized Freight Services</h2>
            <p className="text-lg text-gray-600">
              We offer specialized solutions for unique cargo requirements, ensuring safe and efficient transportation
              for all types of freight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Specialized Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Oversized Cargo</h3>
              <p className="text-gray-600">
                Specialized handling and transportation for large, heavy, or irregularly shaped items that exceed
                standard dimensions.
              </p>
            </div>

            {/* Specialized Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Heavy Machinery</h3>
              <p className="text-gray-600">
                Safe and secure transportation of industrial equipment, machinery, and heavy goods with specialized
                handling.
              </p>
            </div>

            {/* Specialized Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                <Ship className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Project Cargo</h3>
              <p className="text-gray-600">
                End-to-end project management for complex logistics operations requiring specialized planning and
                execution.
              </p>
            </div>

            {/* Specialized Service 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Temperature-Controlled</h3>
              <p className="text-gray-600">
                Climate-controlled transportation for temperature-sensitive goods, including perishables and
                pharmaceuticals.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors"
            >
              Discuss Your Specialized Needs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Freight Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive freight and cargo solutions are designed to provide reliability, efficiency, and peace
                of mind for businesses of all sizes.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">End-to-End Solutions</h3>
                    <p className="text-gray-600">
                      From pickup to delivery, we manage every aspect of your freight shipment, including documentation,
                      customs clearance, and tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Global Network</h3>
                    <p className="text-gray-600">
                      Our extensive network of partners and carriers enables us to provide seamless freight services
                      worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Advanced Tracking</h3>
                    <p className="text-gray-600">
                      Real-time visibility into your shipments with our advanced tracking system, providing updates at
                      every stage of transit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                    <p className="text-gray-600">
                      Our experienced freight specialists provide personalized support and expert guidance throughout
                      the shipping process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/freight-benefits.png"
                alt="Freight Services Benefits"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center">
                    <Ship className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <p className="text-2xl font-bold text-navy-800">99.8%</p>
                    <p className="text-sm text-gray-600">On-time delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Ship Your Freight?</h2>
              <p className="text-xl mb-8">
                Contact our freight specialists today to discuss your shipping needs and get a customized solution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors"
                >
                  Get a Freight Quote
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/30 transition-colors"
                >
                  Contact Freight Team
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Request a Callback</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option value="" className="bg-navy-800">
                        Select Freight Type
                      </option>
                      <option value="ocean" className="bg-navy-800">
                        Ocean Freight
                      </option>
                      <option value="air" className="bg-navy-800">
                        Air Freight
                      </option>
                      <option value="ground" className="bg-navy-800">
                        Ground Freight
                      </option>
                      <option value="specialized" className="bg-navy-800">
                        Specialized Freight
                      </option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Request Callback
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
