

"use client";
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Ship, Globe, Truck, Package, Clock, Shield } from "lucide-react"
import React, { useState } from "react"
import { AutocompleteInput } from "@/components/ui/autocomplete-input"


export default function Home() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [packageType, setPackageType] = useState("Parcel");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Simple shipping calculation logic (replace with real API as needed)
  function calculateShipping(origin: string, destination: string, weight: string, packageType: string): string {
    if (!origin || !destination || !weight) return "Please fill in all fields.";
    const w = parseFloat(weight);
    if (isNaN(w) || w <= 0) return "Please enter a valid weight.";
    let base = 10;
    if (packageType === "Document") base = 5;
    if (packageType === "Freight") base = 25;
    // Fake distance factor
    const distanceFactor = origin !== destination ? 1.5 : 1;
    const price = (base + w * 2) * distanceFactor;
    return `Estimated Shipping Cost: $${price.toFixed(2)}`;
  }

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const res = calculateShipping(origin, destination, weight, packageType);
    if (res.startsWith("Estimated")) {
      setResult(res);
    } else {
      setResult(null);
      setError(res);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/hero-logistics.jpg" alt="Global Logistics Network" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
        </div>

        {/* Animated Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <p className="text-white/90 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Trusted by 1,000+ businesses worldwide
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
                GlobalTide Express <br />
                <span className="text-gradient bg-gradient-to-r from-secondary to-secondary-light">Global Shipping Simplified</span>
              </h1>

              <p className="text-xl text-white/80 max-w-lg animate-slide-up delay-200">
                Reliable, efficient, and secure logistics solutions for businesses and individuals. Your cargo is our
                priority, from pickup to delivery.
              </p>

              <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-medium rounded-full transition-all flex items-center gap-2 hover-lift"
                >
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/track"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/30 transition-all flex items-center gap-2"
                >
                  Track Shipment
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-black animate-slide-up delay-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Global Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Secure Shipping</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative animate-fade-in">
              <div className="relative z-10 bg-white rounded-2xl shadow-soft-lg p-6 max-w-md ml-auto">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
                  <Ship className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 mt-6">Quick Shipping Calculator</h3>
                <form className="space-y-4" onSubmit={handleCalculatorSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Origin</label>
                    <AutocompleteInput
                      value={origin}
                      onChange={setOrigin}
                      placeholder="Search for pickup location"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                    <AutocompleteInput
                      value={destination}
                      onChange={setDestination}
                      placeholder="Search for delivery location"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
                      <input
                        type="text"
                        placeholder="kg"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        value={packageType}
                        onChange={e => setPackageType(e.target.value)}
                      >
                        <option>Parcel</option>
                        <option>Document</option>
                        <option>Freight</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg transition-colors"
                  >
                    Calculate Shipping
                  </button>
                  {result && (
                    <div className="mt-4 p-3 bg-green-50 text-green-800 rounded text-center font-semibold border border-green-200">
                      {result}
                    </div>
                  )}
                  {error && (
                    <div className="mt-4 p-3 bg-red-50 text-red-800 rounded text-center font-semibold border border-red-200">
                      {error}
                    </div>
                  )}
                </form>
              </div>

              {/* Decorative elements - now more visible for demonstration */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-300 border-4 border-yellow-700 rounded-2xl z-10 shadow-2xl opacity-90 animate-bounce-slow"></div>
              <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 w-14 h-14 bg-pink-500 border-4 border-pink-700 rounded-full z-10 shadow-2xl opacity-90 animate-pulse"></div>
              <div className="absolute -top-5 right-10 w-24 h-24 border-8 border-green-500 bg-green-200 rounded-full z-10 shadow-2xl opacity-90 animate-spin-slow"></div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Trusted By Section with Slide Animation */}
      {(() => {
        const [showTrustedBy, setShowTrustedBy] = React.useState(true);
        const [hasMounted, setHasMounted] = React.useState(false);
        React.useEffect(() => {
          setHasMounted(true);
          const interval = setInterval(() => {
            setShowTrustedBy((prev) => !prev);
          }, 3500);
          return () => clearInterval(interval);
        }, []);
        return (
          <div className="relative">
            <section
              className={
                `py-16 transition-transform duration-700 ease-in-out will-change-transform ` +
                (hasMounted && showTrustedBy
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0')
              }
            >
              <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-medium text-gray-600">Trusted by Leading Companies Worldwide</h2>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                      <Image
                        src={`/client-logo-${i}.png`}
                        alt={`Client Logo ${i}`}
                        width={120}
                        height={60}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      })()}

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Shipping Solutions</h2>
            <p className="text-lg text-gray-600">
              We offer a wide range of shipping and logistics services tailored to meet your specific needs, from small
              packages to large freight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden group hover-lift">
              <div className="h-48 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Truck className="h-20 w-20 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Domestic Shipping</h3>
                <p className="text-gray-600 mb-4">
                  Fast and reliable shipping services within the country, with options for standard, express, and
                  same-day delivery.
                </p>
                <Link
                  href="/services#domestic"
                  className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden group hover-lift">
              <div className="h-48 bg-gradient-to-r from-secondary to-secondary-dark relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="h-20 w-20 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">International Shipping</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive global shipping solutions with customs clearance assistance and real-time tracking
                  capabilities.
                </p>
                <Link
                  href="/services#international"
                  className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden group hover-lift">
              <div className="h-48 bg-gradient-to-r from-primary-light to-primary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Package className="h-20 w-20 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-light to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Freight & Cargo</h3>
                <p className="text-gray-600 mb-4">
                  Full-service freight solutions for businesses of all sizes, including FCL, LCL, and specialized cargo
                  handling.
                </p>
                <Link
                  href="/services#freight"
                  className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-colors hover-lift"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/logistics-warehouse.jpg"
                    alt="Modern Logistics Warehouse"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-soft object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full z-0"></div>
                <div className="absolute -top-8 -left-8 w-40 h-40 border-4 border-primary/20 rounded-full z-0"></div>

                {/* Stats Card */}
                <div className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-soft p-6 z-20 max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Ship className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-primary">89.7%</p>
                      <p className="text-gray-600">On-time delivery rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose GlobalTide Express</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 10 years of experience in the shipping and logistics industry, GlobalTide Express has built a reputation for
                reliability, efficiency, and exceptional customer service.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Secure Shipping</h3>
                    <p className="text-gray-600">
                      Your cargo is protected with state-of-the-art security measures and comprehensive insurance
                      coverage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
                    <p className="text-gray-600">
                      We pride ourselves on punctuality, with 99.7% of our shipments arriving on or before the estimated
                      delivery date.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                  <h3 className="text-xl font-bold mb-2">Global Network</h3>
                  <p className="text-gray-600">
                    Our extensive network spans over 150 countries, ensuring GlobalTide Express can deliver your shipments anywhere in
                    the world.
                  </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <Package className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                  <h3 className="text-xl font-bold mb-2">Cost-Effective</h3>
                  <p className="text-gray-600">
                    We optimize routes and consolidate shipments to provide you with the most economical shipping
                    options at GlobalTide Express.
                  </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-medium rounded-full transition-colors hover-lift"
                >
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Track Your Shipment in Real-Time</h2>
              <p className="text-lg text-gray-600 mb-8">
                Stay informed about your shipment's journey with our advanced tracking system. Get detailed information
                about your package location and delivery status.
              </p>

              <form className="bg-white p-6 rounded-2xl shadow-soft mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter your tracking number"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    Track Now
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </form>

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Tracking Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Real-time package location updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Estimated delivery time</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Delivery confirmation with proof of delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>SMS and email notifications</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/tracking-dashboard.jpg"
                  alt="Shipment Tracking Dashboard"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-soft object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 border-4 border-secondary/20 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about GlobalTide Express.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-soft p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/testimonial-1.jpg"
                  alt="Sarah Johnson"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-gray-600 text-sm">Supply Chain Director, TechCorp Inc.</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "GlobalTide Express has transformed our supply chain with their reliable and efficient shipping
                services. We've reduced delivery times by 30% since partnering with them."
              </p>
              <div className="flex text-secondary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-soft p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/testimonial-2.jpg"
                  alt="Michael Chen"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-gray-600 text-sm">Operations Manager, Global Retail</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The team at GlobalTide Express goes above and beyond to ensure our products reach customers on time. Their
                customer service is exceptional, and they always find solutions to our shipping challenges."
              </p>
              <div className="flex text-secondary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-soft p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/testimonial-3.jpg"
                  alt="Emma Rodriguez"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">Emma Rodriguez</h3>
                  <p className="text-gray-600 text-sm">CEO, Artisan Exports</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "We've been working with GlobalTide Express for several years now, and they have consistently exceeded
                our expectations. Their expertise in international shipping is unparalleled."
              </p>
              <div className="flex text-secondary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
