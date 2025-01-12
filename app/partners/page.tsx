import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import MemberDirectory from '../components/MemberDirectory'

const membershipPlans = [
  {
    title: "Silver Partner",
    price: "Free",
    features: [
      "Access to basic network benefits",
      "Standard platform features",
      "Networking opportunities"
    ]
  },
  {
    title: "Premium Partner",
    price: "$1,000/year",
    features: [
      "Enhanced visibility",
      "Priority access to business opportunities",
      "Advanced platform features"
    ]
  },
  {
    title: "Enterprise Partner",
    price: "$2,000/year",
    features: [
      "Premium benefits",
      "Strategic partnerships",
      "Leadership roles",
      "Unlimited branch registrations"
    ]
  }
]

export default function Partners() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Our Network: Building Bridges Across Borders</h1>
      <p className="text-lg mb-6">
        TransMENA Network is built on a foundation of trusted partnerships. We collaborate with leading logistics providers, freight forwarders, and technology innovators to deliver unparalleled service to our clients.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Partner Benefits</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Access to a vast network of regional and global logistics experts.</li>
        <li>Opportunities for collaboration and business growth.</li>
        <li>Shared resources and knowledge to drive innovation.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Membership Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {membershipPlans.map((plan, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>Fee: {plan.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Fees and Payment</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Annual fees are based on the selected membership level.</li>
        <li>Fees are payable within 30 days of invoice issuance.</li>
        <li>Late payments incur a 1.5% monthly interest charge.</li>
        <li>Early payment discounts and flexible payment plans are available.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Member Directory</h2>
      <MemberDirectory />
      
      <div className="mt-8 space-x-4">
        <Button size="lg" asChild>
          <a href="/become-a-partner">Become a Partner</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="/services">Explore Our Network</a>
        </Button>
      </div>
    </main>
  )
}

