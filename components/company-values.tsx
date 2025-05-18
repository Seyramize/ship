import { Heart, Users, Target, Sparkles, Shield, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "We prioritize our customers' needs in every decision we make, striving to exceed expectations and build lasting relationships.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We deliver on our promises, ensuring consistent, dependable service that our clients can count on every time.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "We pay attention to every detail, from accurate documentation to careful handling, ensuring flawless execution.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We continuously seek new ways to improve our services, embracing technology and creative solutions to stay ahead.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We believe in the power of collaboration, working together across departments and with partners to achieve excellence.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We are committed to environmentally responsible practices, reducing our carbon footprint and promoting sustainable logistics.",
  },
]

export default function CompanyValues() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
