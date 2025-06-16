import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service - GlobalTide Express",
  description: "The terms and conditions governing your use of GlobalTide Express services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Terms of Service" description="The terms and conditions governing your use of our services" />

      <Card className="max-w-4xl mx-auto">
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-sm mb-6">Last Updated: June 1, 2023</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services provided by GlobalTide Express ("we," "our," or "us"), including our
                website, mobile application, and shipping services, you agree to be bound by these Terms of Service. If
                you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
              <p>
                GlobalTide Express provides domestic and international shipping, freight, express delivery, warehousing,
                and related logistics services. Our services include but are not limited to package pickup,
                transportation, delivery, tracking, and customer support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              <p>
                Some of our services may require you to create an account. You are responsible for maintaining the
                confidentiality of your account information and for all activities that occur under your account. You
                agree to provide accurate and complete information when creating an account and to update your
                information as necessary.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Shipping Terms</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">4.1 Package Requirements</h3>
              <p>
                You are responsible for ensuring that all packages are properly packaged, labeled, and comply with all
                applicable laws and regulations. We reserve the right to refuse any package that does not meet our
                requirements or that we believe may be dangerous, illegal, or otherwise unsuitable for shipping.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">4.2 Prohibited Items</h3>
              <p>
                You agree not to ship any items that are prohibited by law or by our policies, including but not limited
                to hazardous materials, illegal substances, firearms, explosives, and perishable items without proper
                packaging.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">4.3 Delivery Times</h3>
              <p>
                While we strive to meet all estimated delivery times, we do not guarantee delivery by a specific date or
                time unless expressly stated in writing. Delivery times are estimates and may be affected by factors
                beyond our control, such as weather, customs delays, or other unforeseen circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Fees and Payment</h2>
              <p>
                You agree to pay all fees associated with our services as specified at the time of your order. Prices
                are subject to change without notice. Payment must be made in full before we process your shipment,
                unless you have established credit terms with us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Liability Limitations</h2>
              <p>
                Our liability for loss, damage, or delay of your shipment is limited as set forth in our Shipping
                Policy. We recommend purchasing insurance for valuable shipments. In no event shall our liability exceed
                the declared value of the shipment or the amount of loss or damage actually sustained, whichever is
                lower.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless GlobalTide Express and its officers, directors,
                employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including
                reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our
                services, your violation of these Terms, or your violation of any rights of another.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our services at any time, without notice,
                for any reason, including if we believe you have violated these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. The updated Terms will be posted on our website with a new
                effective date. Your continued use of our services after any such changes constitutes your acceptance of
                the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the state of [State],
                without regard to its conflict of law provisions. Any dispute arising from these Terms shall be resolved
                in the courts of [State].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p className="mt-2">
                <strong>Email:</strong> legal@globaltideexpress.com
                <br />
                {/* <strong>Address:</strong> 123 Logistics Way, Shipping City, SC 12345
                <br />
                <strong>Phone:</strong> +1 (555) 123-4567 */}
              </p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
