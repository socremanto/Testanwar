import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SupportResources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support & Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Help Center</h3>
            <p>FAQs and troubleshooting guides</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact Support</h3>
            <p>Live chat or ticket submission</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Training & Webinars</h3>
            <p>Upcoming events and resources</p>
          </div>
          <div className="flex space-x-4">
            <Button>Submit a Ticket</Button>
            <Button variant="outline">Register for Webinar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

