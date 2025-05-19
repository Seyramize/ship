import type { Metadata } from "next"
import QuoteForm from "@/components/quote-form"
import PageHeader from "@/components/page-header"

export const metadata: Metadata = {
  title: "Request a Quote - GlobalTide Express",
  description:
    "Get a customized shipping quote tailored to your specific needs. Fill out our simple form and receive a competitive quote quickly.",
}

export default function QuotePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Request a Quote" description="Get a customized shipping quote tailored to your needs" />
      <QuoteForm />
    </div>
  )
}
