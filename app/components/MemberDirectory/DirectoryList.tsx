import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Member = {
  id: number
  name: string
  location: string
  services: string[]
  industry: string
  region: string
}

type DirectoryListProps = {
  members: Member[]
  isPaidMember: boolean
}

export default function DirectoryList({ members, isPaidMember }: DirectoryListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map(member => (
        <Card key={member.id}>
          <CardHeader>
            <CardTitle>{member.name}</CardTitle>
            <CardDescription>{member.location}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {member.services.map(service => (
                <Badge key={service} variant="secondary">{service}</Badge>
              ))}
            </div>
            {isPaidMember && (
              <>
                <p><strong>Industry:</strong> {member.industry}</p>
                <p><strong>Region:</strong> {member.region}</p>
              </>
            )}
          </CardContent>
          <CardFooter>
            {isPaidMember ? (
              <Button>View Full Profile</Button>
            ) : (
              <Button variant="outline">View Full Profile</Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

