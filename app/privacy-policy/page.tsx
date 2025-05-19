import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy - GlobalTide Express",
  description: "Learn about how GlobalTide Express collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Privacy Policy" description="How we collect, use, and protect your personal information" />

      <Card className="max-w-4xl mx-auto">
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-sm mb-6">Last Updated: June 1, 2023</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>
                GlobalTide Express ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our website, mobile
                application, or shipping services.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you
                have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, postal address, phone number</li>
                <li>Billing information and payment details</li>
                <li>Shipping information, including origin, destination, and package details</li>
                <li>Account credentials if you create an account with us</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">Usage Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and settings</li>
                <li>Information about how you use our website or services</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing and maintaining our services</li>
                <li>Processing and fulfilling shipping orders</li>
                <li>Tracking and updating you on shipment status</li>
                <li>Responding to your inquiries and customer service requests</li>
                <li>Sending administrative information, such as updates to our terms or privacy policy</li>
                <li>Sending marketing and promotional communications (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Protecting against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Disclosure of Your Information</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers and partners who help us deliver our services</li>
                <li>Customs authorities and other government agencies when required for international shipments</li>
                <li>Legal and regulatory authorities when required by law</li>
                <li>Business partners with your consent</li>
                <li>In connection with a business transaction, such as a merger or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Withdrawing consent for processing your information</li>
                <li>Opting out of marketing communications</li>
                <li>Requesting restriction of processing or objecting to processing</li>
                <li>Data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information from
                unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the
                Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
                "Last Updated" date. We encourage you to review this Privacy Policy frequently to stay informed about
                how we are protecting your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us
                at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@globaltideexpress.com
                <br />
                <strong>Address:</strong> 123 Logistics Way, Shipping City, SC 12345
                <br />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
