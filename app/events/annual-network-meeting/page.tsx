import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import EventCountdown from '@/components/events/EventCountdown'
import AgendaAccordion from '@/components/events/AgendaAccordion'
import PackageCards from '@/components/events/PackageCards'
import TestimonialSlider from '@/components/events/TestimonialSlider'
import SpeakerGrid from '@/components/events/SpeakerGrid'
import SocialFeed from '@/components/events/SocialFeed'

export default function AnnualNetworkMeeting() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(/placeholder.svg?height=600&width=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            TransMENA Annual Network Meeting 2024
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Connecting Global Logistics Leaders: Collaborate, Innovate, Succeed
          </p>
          <p className="text-lg md:text-xl mb-8">
            November 15–17, 2025 | Dead Sea, Jordan
          </p>
          <EventCountdown targetDate="2025-11-15T08:00:00" />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" variant="default" asChild>
              <Link href="#registration">Register Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black" asChild>
              <Link href="#packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About the Event */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Attend the TransMENA Annual Network Meeting?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            The TransMENA Annual Network Meeting is the premier event for global trade professionals, 
            bringing together industry leaders, innovators, and decision-makers from across the Middle East, 
            North Africa, and beyond. This year's theme, 'Driving Global Logistics Excellence,' will focus 
            on collaboration, innovation, and sustainable growth in international trade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "500+", description: "Trade Professionals" },
              { title: "50+", description: "Industry Experts" },
              { title: "3", description: "Days of Networking" },
              { title: "20+", description: "Countries Represented" },
            ].map((stat, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-center text-3xl">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">What's on the Agenda?</h2>
          <AgendaAccordion />
        </div>
      </section>

      {/* Registration Packages */}
      <section id="packages" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Choose Your Package</h2>
          <div className="mb-4 text-center text-red-600">
            <p>Early Bird Discount: 10% off until September 1, 2025</p>
          </div>
          <PackageCards />
        </div>
      </section>

      {/* Speakers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Speakers</h2>
          <SpeakerGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">What Our Attendees Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Sponsorship */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Showcase your brand to a global audience of trade professionals. 
            Our sponsorship packages offer unparalleled visibility and networking opportunities.
          </p>
          <Button size="lg" asChild>
            <Link href="/events/annual-network-meeting/sponsorship">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Venue and Accommodation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Event Venue and Accommodation</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              The event will be held at the Dead Sea Convention Centre, a state-of-the-art facility 
              overlooking the Dead Sea. We have partnered with leading hotels to offer discounted 
              rates for attendees.
            </p>
            <Button size="lg" asChild>
              <Link href="/events/annual-network-meeting/accommodation">Book Your Stay</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Join the Conversation</h2>
          <p className="text-center mb-8">Follow #TransMENA2024 for event updates</p>
          <SocialFeed hashtag="TransMENA2024" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss the Premier Event in Global Trade</h2>
          <p className="text-xl mb-8">
            Register today to secure your spot at the TransMENA Annual Network Meeting 2024
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#registration">Register Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="#packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Have questions about the event?</h2>
          <p className="mb-2">Contact our events team:</p>
          <p className="mb-1">Email: events@transmena.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </section>
    </main>
  )
}

