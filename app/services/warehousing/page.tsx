import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Warehouse, CheckCircle, ArrowRight, Package, BarChart, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Warehousing & Fulfillment Services | GlobalTide Express",
  description: "End-to-end logistics solutions including storage, inventory management, and order fulfillment.",
}

export default function WarehousingPage() {
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
                  Warehousing & Fulfillment Services
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-teal-600 leading-tight">
                Complete <span className="text-teal-400">Warehousing Solutions</span> for Your Business
              </h1>
              <p className="text-lg text-black max-w-lg">
                Our comprehensive warehousing and fulfillment services help businesses of all sizes streamline their
                supply chain and improve operational efficiency.
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
                  className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full border border-white/30 transition-all"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/warehousing-hero.jpg"
                alt="Warehousing and Fulfillment"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center">
                    <Warehouse className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Warehouse Space</p>
                    <p className="text-lg font-bold text-gray-800">2M+ sq ft</p>
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
            <h2 className="text-3xl font-bold mb-4">Our Warehousing & Fulfillment Services</h2>
            <p className="text-lg text-gray-600">
              We offer a complete range of warehousing and fulfillment services to help you manage your inventory and
              fulfill orders efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Warehouse className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Warehouse Storage</h3>
              <p className="text-gray-600 mb-4">
                Secure, climate-controlled storage facilities for your inventory with flexible space options to
                accommodate your needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Short and long-term storage options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Climate-controlled facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>24/7 security and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Flexible space allocation</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <Link href="/quote" className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Package className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Order Fulfillment</h3>
              <p className="text-gray-600 mb-4">
                End-to-end order fulfillment services, from receiving and processing to picking, packing, and shipping.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Order processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Pick and pack services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Custom packaging options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Shipping and delivery</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <Link href="/quote" className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inventory Management</h3>
              <p className="text-gray-600 mb-4">
                Advanced inventory management systems to track, monitor, and optimize your inventory levels in
                real-time.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Real-time inventory tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Inventory forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Stock level alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Detailed reporting</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <Link href="/quote" className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/warehouse-facilities.jpg"
                alt="Warehouse Facilities"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center">
                    <Warehouse className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Locations</p>
                    <p className="text-lg font-bold text-navy-800">12 Strategic Centers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">State-of-the-Art Warehouse Facilities</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our strategically located warehousing facilities are equipped with the latest technology and security
                systems to ensure your inventory is stored safely and efficiently.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Warehouse className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">Strategic Locations</h3>
                    <p className="text-gray-600">
                      12 warehousing centers strategically located across the country for optimal distribution
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Package className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">Advanced Technology</h3>
                    <p className="text-gray-600">
                      Automated systems for efficient inventory management and order processing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Truck className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">Seamless Integration</h3>
                    <p className="text-gray-600">
                      Direct integration with our shipping and delivery services for end-to-end logistics
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors"
              >
                Schedule a Tour
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Warehousing Solutions</h2>
            <p className="text-lg text-gray-600">
              Discover how our warehousing and fulfillment services can help your business grow and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reduced Overhead Costs</h3>
              <p className="text-gray-600">
                Eliminate the need for your own warehouse facility, staff, and equipment, significantly reducing your
                operational costs.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scalable Storage Solutions</h3>
              <p className="text-gray-600">
                Easily scale your storage space up or down based on your business needs, without long-term commitments
                or capital investments.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Faster Order Fulfillment</h3>
              <p className="text-gray-600">
                Our efficient processes and strategic locations enable faster order processing and delivery, improving
                customer satisfaction.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Improved Inventory Management</h3>
              <p className="text-gray-600">
                Our advanced inventory management systems provide real-time visibility and control over your stock
                levels.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Focus on Core Business</h3>
              <p className="text-gray-600">
                Outsource your warehousing and fulfillment operations to us, allowing you to focus on growing your core
                business.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
              <p className="text-gray-600">
                Our systems integrate with your e-commerce platform and other business systems for streamlined
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Seamless E-commerce Integration</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our warehousing and fulfillment services integrate seamlessly with your e-commerce platform, providing a
                smooth and efficient order fulfillment process.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">Multi-Platform Integration</h3>
                    <p className="text-gray-600">
                      Compatible with major e-commerce platforms including Shopify, WooCommerce, Amazon, and more
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">Automated Order Processing</h3>
                    <p className="text-gray-600">
                      Orders are automatically received and processed, eliminating manual data entry and reducing errors
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">Real-Time Inventory Updates</h3>
                    <p className="text-gray-600">
                      Inventory levels are automatically updated across all your sales channels in real-time
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors"
              >
                Learn About Integration
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/ecommerce-integration.jpg"
                alt="E-commerce Integration"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Warehousing?</h2>
              <p className="text-xl mb-8">
                Contact our warehousing specialists today to discuss your specific needs and discover how our solutions
                can help your business grow.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/30 transition-colors"
                >
                  Contact Sales
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
                      <option value="" className="bg-gray-800">
                        Select Service
                      </option>
                      <option value="storage" className="bg-gray-800">
                        Warehouse Storage
                      </option>
                      <option value="fulfillment" className="bg-gray-800">
                        Order Fulfillment
                      </option>
                      <option value="inventory" className="bg-gray-800">
                        Inventory Management
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
