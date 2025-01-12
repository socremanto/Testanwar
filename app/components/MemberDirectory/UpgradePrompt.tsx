import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function UpgradePrompt() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Want to see more?</CardTitle>
        <CardDescription>
          Upgrade to a paid membership to access detailed profiles, contact information, and exclusive networking opportunities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>As a paid member, you'll get:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Full access to member profiles</li>
          <li>Direct messaging with other members</li>
          <li>Advanced search and filter options</li>
          <li>Export directory data</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href="/membership-plans">Upgrade Now</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

