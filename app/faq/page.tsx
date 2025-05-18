import type { Metadata } from "next"
import FaqAccordion from "@/components/faq-accordion"
import PageHeader from "@/components/page-header"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - ShipFast Logistics",
  description:
    "Find answers to common questions about our shipping and logistics services, tracking, pricing, and more.",
}

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services"
      />
      <FaqAccordion />
    </div>
  )
}
