import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Let's Connect: Reach Out to TransMENA Network Today</h1>
      <p className="text-lg mb-6">
        Whether you're looking to join our network, explore our services, or simply learn more, we're here to help.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Contact Options</h2>
          <ul className="space-y-2">
            <li><strong>General Inquiries:</strong> info@transmena.com</li>
            <li><strong>Partnerships:</strong> partners@transmena.com</li>
            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-2 text-blue-800">Office Locations</h3>
          <p>Dubai, UAE</p>
          <p>Cairo, Egypt</p>
          <p>Riyadh, Saudi Arabia</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Contact Form</h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="text" placeholder="Company" />
            <Textarea placeholder="Message" required />
            <Button type="submit">Send Us a Message</Button>
          </form>
        </div>
      </div>
      <div className="mt-8">
        <Button size="lg" variant="outline" asChild>
          <a href="/contact">Schedule a Consultation</a>
        </Button>
      </div>
    </main>
  )
}

