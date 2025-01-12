import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileDown } from 'lucide-react'

export default function AgreementDownload() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Essential Membership Documents</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          Before submitting your application, please review our comprehensive membership 
          documentation. These documents outline all membership benefits, obligations, 
          terms of participation, and ethical standards in the TransMENA Network.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Button className="flex items-center gap-2 w-full" asChild>
            <a href="/documents/TransMENA-Membership-Agreement.pdf" download>
              <FileDown className="h-4 w-4" />
              Membership Agreement
            </a>
          </Button>
          <Button className="flex items-center gap-2 w-full" asChild>
            <a href="/documents/TransMENA-Code-of-Conduct.pdf" download>
              <FileDown className="h-4 w-4" />
              Code of Conduct
            </a>
          </Button>
          <Button variant="outline" className="flex items-center gap-2 w-full" asChild>
            <a href="/documents/TransMENA-Terms-and-Conditions.pdf" download>
              <FileDown className="h-4 w-4" />
              Terms & Conditions
            </a>
          </Button>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>For any questions about these documents, please contact our membership team:</p>
          <ul className="mt-2 space-y-1">
            <li>Email: membership@transmenalogistics.com</li>
            <li>Phone: +971 4 123 4567</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

