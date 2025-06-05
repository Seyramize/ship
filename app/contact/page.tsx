import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import MapLocation from "@/components/map-location"
import PageHeader from "@/components/page-header"

export const metadata: Metadata = {
  title: "Contact Us - GlobalTide Express",
  description:
    "Get in touch with GlobalTide Express. Contact our team for inquiries, support, or to learn more about our shipping and logistics services.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Contact Us" description="We're here to help with all your shipping needs" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <ContactForm />
        <div className="flex flex-col gap-8">
          <ContactInfo />
          <MapLocation />
        </div>
      </div>
    </div>
  )
}
