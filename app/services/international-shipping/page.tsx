import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Globe, Clock, CheckCircle, ArrowRight, Shield, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "International Shipping Services | GlobalTide Express",
  description: "Comprehensive global shipping solutions with customs clearance assistance and tracking capabilities.",
}

export default function InternationalShippingPage() {
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
                  International Shipping Services
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Global Shipping <span className="text-teal-400">Made Simple</span>
              </h1>
              <p className="text-lg text-white/80 max-w-lg">
                Our international shipping services connect businesses and individuals to over 200 countries and
                territories worldwide with reliable, efficient delivery solutions.
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
                src="/international-shipping-hero.png"
                alt="International Shipping"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Global Coverage</p>
                    <p className="text-lg font-bold text-navy-800">200+ Countries</p>
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
            <h2 className="text-3xl font-bold mb-4">Our International Shipping Services</h2>
            <p className="text-lg text-gray-600">
              We offer a range of international shipping options to meet your specific needs, from standard to express
              delivery worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Standard International</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective shipping option for non-urgent international deliveries with comprehensive tracking.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Delivery within 5-10 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Global tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Customs clearance assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Up to 70 lbs per package</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-navy-800 mb-2">Starting at</p>
                <p className="text-3xl font-bold text-teal-500">$29.99</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Express International</h3>
              <p className="text-gray-600 mb-4">
                Fast international shipping with guaranteed delivery within 2-4 business days to major global
                destinations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Delivery within 2-4 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Priority customs clearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Real-time tracking updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Up to 100 lbs per package</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-navy-800 mb-2">Starting at</p>
                <p className="text-3xl font-bold text-teal-500">$59.99</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium International</h3>
              <p className="text-gray-600 mb-4">
                Our highest level of international service with expedited shipping and enhanced security features.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Delivery within 1-3 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Dedicated customs broker</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Enhanced security & insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Up to 150 lbs per package</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-navy-800 mb-2">Starting at</p>
                <p className="text-3xl font-bold text-teal-500">$99.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/global-coverage-map.png"
                alt="Global Coverage Map"
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
                    <p className="text-sm text-gray-600">Global Reach</p>
                    <p className="text-lg font-bold text-navy-800">200+ Countries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Worldwide Coverage</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our extensive global network reaches over 200 countries and territories, ensuring your packages arrive
                safely and on time anywhere in the world. With strategic partnerships with local carriers, we provide
                seamless international shipping solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Globe className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">Global Network</h3>
                    <p className="text-gray-600">Partnerships with trusted carriers worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <FileText className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">Customs Expertise</h3>
                    <p className="text-gray-600">Simplified documentation and clearance process</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">Secure Shipping</h3>
                    <p className="text-gray-600">Enhanced security measures for international shipments</p>
                  </div>
                </div>
              </div>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors"
              >
                Check International Rates
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customs & Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Customs & Compliance Made Easy</h2>
            <p className="text-lg text-gray-600">
              We handle the complexities of international shipping regulations and customs requirements, so you don't
              have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Documentation Assistance</h3>
              <p className="text-gray-600">
                Our experts help you prepare all necessary customs documentation, including commercial invoices, packing
                lists, and certificates of origin, ensuring compliance with international regulations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customs Clearance</h3>
              <p className="text-gray-600">
                We manage the entire customs clearance process, including duty and tax calculations, classification of
                goods, and communication with customs authorities to prevent delays.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Stay compliant with international trade regulations and country-specific requirements with our
                up-to-date knowledge of global shipping rules and restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How International Shipping Works</h2>
            <p className="text-lg text-gray-600">
              Our streamlined process makes international shipping simple and hassle-free.
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
                Provide your shipment details, including origin, destination, and package information.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Prepare Documentation</h3>
              <p className="text-gray-600">
                Our team helps you prepare all necessary customs documentation for your shipment.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Pickup & Processing</h3>
              <p className="text-gray-600">
                We pick up your package and process it through our international shipping network.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Delivery & Confirmation</h3>
              <p className="text-gray-600">
                Your package is delivered to its international destination with confirmation provided.
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
              <h2 className="text-3xl font-bold mb-6">Ready to Ship Globally?</h2>
              <p className="text-xl mb-8">
                Join thousands of businesses and individuals who trust GlobalTide Express for their international shipping needs.
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
                  <h3 className="text-xl font-bold mb-2">Global Expertise</h3>
                  <p className="text-white/80">
                    Our international shipping specialists understand the complexities of global logistics.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Customs Clearance</h3>
                  <p className="text-white/80">
                    We handle all customs documentation and clearance to ensure smooth international delivery.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">End-to-End Tracking</h3>
                  <p className="text-white/80">
                    Monitor your international shipments in real-time from pickup to delivery.
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
