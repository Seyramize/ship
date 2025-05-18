import Link from "next/link"
import { Ship, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="relative z-10 -mt-32 mb-16">
          <div className="bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl p-8 md:p-12 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated with ShipFast</h3>
                <p className="text-white/80">
                  Subscribe to our newsletter for the latest shipping news, tips, and exclusive offers.
                </p>
              </div>
              <div className="lg:col-span-2">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-secondary hover:bg-slate-100 font-medium rounded-full transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Subscribe
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <Ship className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold">ShipFast</span>
            </div>
            <p className="text-white/70 mb-6">
              Your trusted partner for all shipping and logistics needs. Delivering excellence worldwide since 2005.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Call us 24/7</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email us</p>
                  <p className="font-medium">info@shipfast.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/track"
                  className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Track Shipment</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Request a Quote</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#domestic"
                  className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Domestic Shipping</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#international"
                  className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>International Shipping</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#freight"
                  className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Freight & Cargo</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#express"
                  className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Express Delivery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#warehousing"
                  className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Warehousing</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <p className="text-white/70">
                  123 Logistics Way
                  <br />
                  Shipping City, SC 12345
                  <br />
                  United States
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-secondary mt-1" />
                <div className="text-white/70">
                  <p className="font-medium text-white mb-1">Business Hours</p>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} ShipFast Logistics. All rights reserved.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-sm text-white/60 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-white/60 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping-policy" className="text-sm text-white/60 hover:text-secondary transition-colors">
                Shipping Policy
              </Link>
              <Link href="/returns-policy" className="text-sm text-white/60 hover:text-secondary transition-colors">
                Returns Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
