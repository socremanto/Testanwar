import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe2, Truck, BarChart3, MapPin } from 'lucide-react'

export default function Services() {
  const services = [
    { title: "Global Reach", description: "Connect with logistics and shipping companies worldwide.", icon: Globe2 },
    { title: "Local Expertise", description: "Access trusted freight forwarders and logistics providers in MENA.", icon: MapPin },
    { title: "Efficient Operations", description: "Streamline processes and improve delivery times.", icon: Truck },
    { title: "Market Growth", description: "Expand your business into new regions with confidence.", icon: BarChart3 },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Our Services and Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

