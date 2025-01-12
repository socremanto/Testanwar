import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Global Freight Solutions",
      description: [
        "Air, sea, and land freight services connecting MENA to the world.",
        "Customs clearance and regulatory compliance support."
      ]
    },
    {
      title: "Supply Chain Optimization",
      description: [
        "End-to-end supply chain management.",
        "Real-time tracking and analytics for smarter decision-making."
      ]
    },
    {
      title: "Technology-Driven Collaboration",
      description: [
        "Digital platforms for seamless partner integration.",
        "Automated workflows to reduce delays and costs."
      ]
    },
    {
      title: "Regional Logistics Expertise",
      description: [
        "Tailored solutions for MENA markets.",
        "Localized support and consulting services."
      ]
    }
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Our Services: Empowering Your Logistics Journey</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {service.description.map((item, i) => (
                  <div key={i} className="flex items-start mb-2">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="space-x-4">
        <Button size="lg" asChild>
          <a href="/contact">Discover How We Can Help</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="/contact">Consult with our team</a>
        </Button>
      </div>
    </main>
  )
}

