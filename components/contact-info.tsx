import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactInfo() {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:info@globaltideexpress.com" className="text-primary hover:underline">
                info@globaltideexpress.com
              </a>
            </div>
          </div>

          {/* <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Phone</p>
              <a href="tel:+15551234567" className="text-primary hover:underline">
                +1 (555) 123-4567
              </a>
              <p className="text-sm text-muted-foreground">Customer Support: +1 (555) 987-6543</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Address</p>
              <p>123 Logistics Way</p>
              <p>Shipping City, SC 12345</p>
              <p>United States</p>
            </div>
          </div> */}

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
