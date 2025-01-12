'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for members
const members = [
  { id: 1, name: 'Acme Logistics', country: 'UAE' },
  { id: 2, name: 'Global Freight Solutions', country: 'Egypt' },
  { id: 3, name: 'FastTrack Shipping', country: 'Saudi Arabia' },
  { id: 4, name: 'MediterraneanCargo', country: 'Morocco' },
  { id: 5, name: 'Sahara Express', country: 'Algeria' },
]

export default function MemberDirectory() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.country.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <Input
        type="text"
        placeholder="Search by name or country"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMembers.map(member => (
          <Card key={member.id}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Country: {member.country}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

