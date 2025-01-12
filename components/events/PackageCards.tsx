import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const packages = [
  {
    name: "Standard Pass",
    price: "$500",
    features: [
      "Access to all keynote sessions and panel discussions",
      "Networking lunch on Day 1 and Day 2",
      "Event materials (e.g., agenda, speaker bios)"
    ]
  },
  {
    name: "Premium Pass",
    price: "$1,000",
    features: [
      "All Standard Pass benefits",
      "Access to exclusive workshops and breakout sessions",
      "Evening reception on Day 1",
      "Priority seating at keynote sessions"
    ]
  },
  {
    name: "VIP Pass",
    price: "$2,000",
    features: [
      "All Premium Pass benefits",
      "One-on-one meetings with industry experts",
      "Invitation to a private dinner with keynote speakers",
      "Complimentary site visit on Day 3"
    ]
  }
]

export default function PackageCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {packages.map((pkg, index) => (
        <Card key={index} className={index === 2 ? "border-primary" : ""}>
          <CardHeader>
            <CardTitle>{pkg.name}</CardTitle>
            <p className="text-2xl font-bold">{pkg.price}</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <a href="#registration">Register Now</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

