import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Shipping Policy - ShipFast Logistics",
  description: "Learn about ShipFast Logistics shipping procedures, delivery times, and shipping options.",
}

export default function ShippingPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Shipping Policy" description="Our shipping procedures, delivery times, and shipping options" />

      <Card className="max-w-4xl mx-auto">
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-sm mb-6">Last Updated: June 1, 2023</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Shipping Services</h2>
              <p>
                ShipFast Logistics offers a variety of shipping services to meet your needs. Our shipping options
                include:
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">Domestic Shipping</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Standard Delivery:</strong> 3-5 business days
                </li>
                <li>
                  <strong>Express Delivery:</strong> 1-2 business days
                </li>
                <li>
                  <strong>Same-Day Delivery:</strong> Available in select metropolitan areas
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">International Shipping</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Standard International:</strong> 7-14 business days
                </li>
                <li>
                  <strong>Express International:</strong> 3-5 business days
                </li>
                <li>
                  <strong>Priority International:</strong> 1-3 business days (select countries)
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Freight Services</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Less than Container Load (LCL):</strong> For smaller shipments
                </li>
                <li>
                  <strong>Full Container Load (FCL):</strong> For larger shipments
                </li>
                <li>
                  <strong>Air Freight:</strong> For time-sensitive shipments
                </li>
                <li>
                  <strong>Specialized Cargo:</strong> For oversized or unusual items
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Shipping Rates</h2>
              <p>Shipping rates are calculated based on several factors, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Package weight and dimensions</li>
                <li>Shipping distance</li>
                <li>Delivery speed</li>
                <li>Special handling requirements</li>
                <li>Insurance coverage</li>
              </ul>
              <p>
                For the most accurate shipping rates, please use our Quote Request form or contact our customer service
                team.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Delivery Times</h2>
              <p>
                Delivery times are estimates and are calculated from the time we receive your package. Factors that may
                affect delivery times include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Weather conditions</li>
                <li>Customs clearance for international shipments</li>
                <li>Remote or difficult-to-access delivery locations</li>
                <li>National holidays</li>
                <li>Unforeseen events or natural disasters</li>
              </ul>
              <p>
                While we strive to meet all estimated delivery times, we do not guarantee delivery by a specific date or
                time unless expressly stated in writing and with the purchase of a guaranteed service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Tracking</h2>
              <p>
                All shipments are assigned a unique tracking number that allows you to monitor the progress of your
                shipment. You can track your shipment on our website, through our mobile app, or by contacting our
                customer service team.
              </p>
              <p>For most services, tracking updates are provided at key points in the shipping process, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Package received</li>
                <li>In transit</li>
                <li>Customs clearance (for international shipments)</li>
                <li>Out for delivery</li>
                <li>Delivered</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Packaging Guidelines</h2>
              <p>Proper packaging is essential to ensure your items arrive safely. Please follow these guidelines:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use a sturdy box appropriate for the weight and size of your items</li>
                <li>Use adequate cushioning material (bubble wrap, packing peanuts, etc.)</li>
                <li>Seal all seams with packing tape</li>
                <li>Remove old shipping labels and markings</li>
                <li>Include a duplicate shipping label inside the package</li>
                <li>For fragile items, mark the package "FRAGILE" on all sides</li>
              </ul>
              <p>
                We offer professional packaging services for an additional fee if you prefer to have our experts package
                your items.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Prohibited Items</h2>
              <p>
                For safety and legal reasons, certain items cannot be shipped or may require special handling.
                Prohibited items include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Illegal substances and narcotics</li>
                <li>Explosives, flammable materials, and other hazardous materials</li>
                <li>Firearms and weapons</li>
                <li>Perishable items without proper packaging</li>
                <li>Live animals (except where permitted by law and with special arrangements)</li>
                <li>Currency, precious metals, and negotiable instruments</li>
              </ul>
              <p>Please contact our customer service team if you have questions about specific items.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Insurance</h2>
              <p>
                Basic insurance coverage is included with most shipments up to a certain value. Additional insurance can
                be purchased for higher-value shipments. We recommend insuring all valuable or irreplaceable items.
              </p>
              <p>
                Insurance claims must be filed within 30 days of the delivery date or expected delivery date for lost
                shipments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p>
                If you have questions about our shipping policy or need assistance with a shipment, please contact us:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> shipping@shipfast.com
                <br />
                <strong>Phone:</strong> +1 (555) 123-4567
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
