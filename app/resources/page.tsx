import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const resources = [
  {
    title: "Blog",
    description: "Articles on MENA logistics trends, global trade updates, and industry best practices."
  },
  {
    title: "Case Studies",
    description: "Success stories showcasing how we've helped clients overcome challenges."
  },
  {
    title: "Whitepapers & Guides",
    description: "In-depth resources on supply chain optimization, customs compliance, and more."
  }
]

const pressReleases = [
  {
    title: "TransMENA Network Expands to North Africa",
    date: "2023-05-15",
    summary: "TransMENA Network announces its expansion into North African markets, partnering with key logistics providers in Morocco, Algeria, and Tunisia."
  },
  {
    title: "New Technology Partnership Enhances Supply Chain Visibility",
    date: "2023-04-02",
    summary: "TransMENA Network partners with leading tech firm to provide real-time supply chain visibility and analytics to its members."
  },
  {
    title: "TransMENA Network Hosts Annual Logistics Conference",
    date: "2023-03-10",
    summary: "Industry leaders gather in Dubai for TransMENA Network's annual conference on the future of logistics in the MENA region."
  }
]

export default function Resources() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Resources and Media</h1>
      <p className="text-lg mb-6">
        Stay ahead with the latest trends, insights, and tools from TransMENA Network.
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Knowledge Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{resource.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="space-x-4 mb-12">
        <Button size="lg" asChild>
          <a href="/blog">Explore Our Resources</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="/newsletter">Subscribe to Our Newsletter</a>
        </Button>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Media & Press</h2>
      <p className="text-lg mb-6">
        Stay up to date with the latest news and developments from TransMENA Network.
      </p>
      
      <h3 className="text-xl font-bold mb-4 text-blue-700">Press Releases</h3>
      <div className="space-y-6 mb-8">
        {pressReleases.map((release, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{release.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">{release.date}</p>
              <p>{release.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-blue-700">Media Contact</h3>
      <p className="mb-8">
        For media inquiries, please contact:<br />
        Sarah Johnson<br />
        Media Relations Manager<br />
        Email: sarah.johnson@transmena.com<br />
        Phone: +971 4 123 4567
      </p>
    </main>
  )
}

