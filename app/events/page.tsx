import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { CalendarDays, MapPin, Users } from 'lucide-react'

const featuredEvent = {
  title: "TransMENA Annual Network Meeting 2025",
  description: "Connecting Global Logistics Leaders: Collaborate, Innovate, Succeed",
  date: "November 15–17, 2025",
  location: "Dead Sea, Jordan",
  attendees: "500+ Expected Attendees",
  highlights: [
    "Networking with 500+ trade professionals",
    "Insights from 50+ industry experts",
    "Exclusive access to market intelligence and trends",
    "Opportunities to forge partnerships"
  ]
}

const upcomingEvents = [
  {
    title: "Tech in Logistics Workshop",
    date: "July 22, 2025",
    location: "Cairo, Egypt",
    description: "A hands-on workshop exploring the latest technological advancements in the logistics sector."
  },
  {
    title: "Sustainable Supply Chains Symposium",
    date: "September 5, 2025",
    location: "Riyadh, Saudi Arabia",
    description: "Learn about sustainable practices and their implementation in modern supply chains."
  },
  {
    title: "Women in Global Trade Conference",
    date: "October 15, 2025",
    location: "Dubai, UAE",
    description: "Celebrating and empowering women leaders in international trade and logistics."
  }
]

export default function Events() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>
      
      {/* Featured Event */}
      <section className="mb-12">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <CardTitle className="text-3xl mb-2">{featuredEvent.title}</CardTitle>
                <CardDescription className="text-lg">{featuredEvent.description}</CardDescription>
              </div>
              <Button size="lg" asChild>
                <Link href="/events/annual-network-meeting">Learn More</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-blue-600" />
                <span>{featuredEvent.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>{featuredEvent.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>{featuredEvent.attendees}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredEvent.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild>
                <Link href="/events/annual-network-meeting#registration">Register Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/events/annual-network-meeting#packages">View Packages</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Other Upcoming Events */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Other Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Propose an Event */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Propose an Event</h2>
        <p className="mb-6">
          Have an idea for an event? We're always looking for new ways to engage our community.
          Contact us to propose your event idea.
        </p>
        <Button variant="outline" asChild>
          <Link href="/contact?subject=Event%20Proposal">Contact Event Team</Link>
        </Button>
      </section>
    </main>
  )
}

