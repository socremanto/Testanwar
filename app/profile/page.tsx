"use client"

import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfilePage() {
  const { data: session } = useSession()

  if (!session) {
    return <div>Please sign in to view your profile.</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>{session.user?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: {session.user?.email}</p>
        </CardContent>
      </Card>
    </div>
  )
}

