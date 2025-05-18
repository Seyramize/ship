export default function CompanyHistory() {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Our History</h2>
        <p className="text-muted-foreground mb-4">
          Founded in 2005, ShipFast Logistics began as a small regional shipping company with just three trucks and a
          vision to revolutionize the logistics industry with reliability and customer-focused service.
        </p>
        <p className="text-muted-foreground mb-4">
          Over the years, we've grown into a global logistics provider with operations in over 50 countries, but our
          commitment to excellence and personalized service remains unchanged. Our journey has been marked by continuous
          innovation, strategic expansion, and an unwavering dedication to meeting our clients' evolving needs.
        </p>
        <p className="text-muted-foreground">
          Today, ShipFast Logistics is proud to be a trusted partner to thousands of businesses worldwide, from small
          e-commerce startups to multinational corporations. Our extensive network, cutting-edge technology, and
          experienced team enable us to deliver efficient, cost-effective shipping solutions for any requirement.
        </p>
      </div>

      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
        <img
          src="/placeholder-yp1j3.png"
          alt="ShipFast Logistics Headquarters"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
