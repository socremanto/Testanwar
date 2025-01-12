import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Users, Cpu, MapPin } from 'lucide-react'

export default function KeyHighlights() {
  const highlights = [
    { title: "Global Connectivity", description: "Linking MENA to international markets.", icon: Globe },
    { title: "Efficient Collaboration", description: "Streamlined partnerships for faster, smarter logistics.", icon: Users },
    { title: "Cutting-Edge Technology", description: "Digital tools for real-time tracking and optimization.", icon: Cpu },
    { title: "Regional Expertise", description: "Deep understanding of MENA logistics landscapes.", icon: MapPin },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <highlight.icon className="w-12 h-12 text-black dark:text-white mb-4" />
                <CardTitle className="text-black dark:text-white">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">{highlight.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

