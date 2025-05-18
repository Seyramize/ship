const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "With over 20 years of experience in logistics and supply chain management, Sarah has led ShipFast to become an industry leader through strategic vision and operational excellence.",
    image: "/professional-female-ceo.png",
  },
  {
    name: "Michael Chen",
    role: "Chief Operations Officer",
    bio: "Michael oversees our global operations, ensuring efficient processes and exceptional service delivery across all regions. His background in process optimization has transformed our operational capabilities.",
    image: "/professional-coo-portrait.png",
  },
  {
    name: "David Rodriguez",
    role: "Chief Technology Officer",
    bio: "David leads our technology initiatives, developing innovative solutions that enhance tracking capabilities, optimize routes, and improve the overall customer experience.",
    image: "/professional-cto-portrait.png",
  },
  {
    name: "Aisha Patel",
    role: "VP of Global Logistics",
    bio: "Aisha manages our international shipping network, leveraging her extensive experience in global trade to navigate complex regulations and ensure seamless cross-border operations.",
    image: "/placeholder-3l2o2.png",
  },
]

export default function LeadershipTeam() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700"
          >
            <div className="aspect-square relative">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
