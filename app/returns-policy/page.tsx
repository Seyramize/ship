import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Returns Policy - ShipFast Logistics",
  description: "Learn about ShipFast Logistics returns procedures, refunds, and claims process.",
}

export default function ReturnsPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Returns Policy" description="Our returns procedures, refunds, and claims process" />

      <Card className="max-w-4xl mx-auto">
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-sm mb-6">Last Updated: June 1, 2023</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Service Cancellations</h2>
              <p>
                At ShipFast Logistics, we understand that plans can change. Our cancellation policy for shipping
                services is as follows:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Before Pickup:</strong> Full refund available if the cancellation is made before the scheduled
                  pickup time.
                </li>
                <li>
                  <strong>After Pickup, Before Processing:</strong> Partial refund may be available, minus a service
                  fee.
                </li>
                <li>
                  <strong>After Processing Begins:</strong> Once your shipment has been processed at our facility,
                  cancellations are generally not accepted, and refunds are not provided.
                </li>
              </ul>
              <p>
                To cancel a shipment, please contact our customer service team as soon as possible with your tracking
                number and order details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Refunds</h2>
              <p>Refunds are processed according to the following guidelines:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Eligible Cancellations:</strong> Refunds for eligible cancellations are typically processed
                  within 5-7 business days.
                </li>
                <li>
                  <strong>Service Failures:</strong> If we fail to deliver your shipment within our guaranteed timeframe
                  (for services with delivery guarantees), you may be eligible for a full or partial refund.
                </li>
                <li>
                  <strong>Lost or Damaged Shipments:</strong> Refunds for lost or damaged shipments are handled through
                  our claims process (see below).
                </li>
              </ul>
              <p>Refunds are issued to the original payment method used for the transaction.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Claims Process</h2>
              <p>
                If your shipment is lost, damaged, or delayed, you may file a claim for compensation. Our claims process
                is as follows:
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Filing a Claim</h3>
              <p>Claims must be submitted within the following timeframes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Damaged Shipments:</strong> Within 7 days of delivery
                </li>
                <li>
                  <strong>Lost Shipments:</strong> Within 30 days of the expected delivery date
                </li>
                <li>
                  <strong>Delayed Shipments:</strong> Within 14 days of delivery
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Required Documentation</h3>
              <p>To process your claim, we may require the following documentation:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Tracking number and shipping details</li>
                <li>Proof of value (invoice, receipt, etc.)</li>
                <li>Photos of damaged items and packaging (for damage claims)</li>
                <li>Description of the loss or damage</li>
                <li>Any other relevant information</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Claim Resolution</h3>
              <p>
                We strive to resolve all claims within 30 days of submission. Compensation may be provided in the form
                of:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Refund of shipping costs</li>
                <li>
                  Reimbursement for the value of lost or damaged items (up to the declared value or insurance limit)
                </li>
                <li>Service credits for future shipments</li>
              </ul>
              <p>
                The type and amount of compensation depend on the service used, the nature of the claim, and any
                applicable insurance coverage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Liability Limitations</h2>
              <p>Our liability for loss, damage, or delay is limited as follows:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Domestic Shipments:</strong> Up to $100 or the declared value, whichever is lower, unless
                  additional insurance is purchased.
                </li>
                <li>
                  <strong>International Shipments:</strong> Subject to international conventions (e.g., Warsaw
                  Convention, Montreal Convention) and typically limited to a specific amount per kilogram.
                </li>
                <li>
                  <strong>Freight Shipments:</strong> Varies by service and is detailed in our freight service
                  agreement.
                </li>
              </ul>
              <p>We are not liable for losses or damages resulting from:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Improper packaging</li>
                <li>Acts of nature or force majeure events</li>
                <li>Customs delays or inspections</li>
                <li>Shipping prohibited items</li>
                <li>Inaccurate shipping information provided by the customer</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Insurance Options</h2>
              <p>To protect against potential losses, we offer additional insurance options for your shipments:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Basic Coverage:</strong> Included with most shipments up to a certain value.
                </li>
                <li>
                  <strong>Extended Coverage:</strong> Available for purchase to cover the full declared value of your
                  shipment.
                </li>
                <li>
                  <strong>Specialized Insurance:</strong> Available for high-value or unique items.
                </li>
              </ul>
              <p>
                We recommend purchasing additional insurance for all valuable shipments. Insurance must be purchased at
                the time of shipping and cannot be added after the shipment has been processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p>
                For questions about our returns policy or to file a claim, please contact our customer service team:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> claims@shipfast.com
                <br />
                <strong>Phone:</strong> +1 (555) 987-6543
                <br />
                <strong>Hours:</strong> Monday-Friday, 8:00 AM - 6:00 PM; Saturday, 9:00 AM - 1:00 PM
              </p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
