import type { Metadata } from "next"
import CompanyHistory from "@/components/company-history"
import LeadershipTeam from "@/components/leadership-team"
import CompanyValues from "@/components/company-values"
import PageHeader from "@/components/page-header"

export const metadata: Metadata = {
  title: "About Us - ShipFast Logistics",
  description:
    "Learn about ShipFast Logistics, our history, mission, leadership team, and commitment to excellence in shipping and logistics services.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="About Us" description="Learn about our company, mission, and values" />
      <div className="flex flex-col gap-16">
        <CompanyHistory />
        <LeadershipTeam />
        <CompanyValues />
      </div>
    </div>
  )
}
