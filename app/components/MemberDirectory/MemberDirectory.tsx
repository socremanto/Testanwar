"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import DirectoryList from './DirectoryList'
import UpgradePrompt from './UpgradePrompt'

// Mock data for demonstration purposes
const mockMembers = [
  { id: 1, name: 'Global Logistics Co.', location: 'Dubai, UAE', services: ['Air Freight', 'Sea Freight'], industry: 'Logistics', region: 'Middle East' },
  { id: 2, name: 'FastTrack Shipping', location: 'Cairo, Egypt', services: ['Sea Freight', 'Customs Brokerage'], industry: 'Carriers', region: 'North Africa' },
  { id: 3, name: 'EuroMENA Exports', location: 'Marseille, France', services: ['Import Export', 'Customs Brokerage'], industry: 'Import Export', region: 'Europe' },
  // Add more mock members as needed
]

export default function MemberDirectory() {
  const { data: session, status } = useSession()
  const [searchTerm, setSearchTerm] = useState('')
  const [industry, setIndustry] = useState('')
  const [region, setRegion] = useState('')
  const [service, setService] = useState('')
  const [filteredMembers, setFilteredMembers] = useState(mockMembers)

  const isPaidMember = session?.user?.role === 'paid' // Assume role is stored in session

  useEffect(() => {
    const filtered = mockMembers.filter(member => 
      (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       member.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (industry === '' || member.industry === industry) &&
      (region === '' || member.region === region) &&
      (service === '' || member.services.includes(service))
    )
    setFilteredMembers(filtered)
  }, [searchTerm, industry, region, service])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">TransMENA Member Directory</h1>
      <p className="mb-8">Access detailed profiles of trusted partners and businesses in the TransMENA Network.</p>

      <div className="mb-8 space-y-4">
        <Input
          type="text"
          placeholder="Search by company name, industry, or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select onValueChange={setIndustry}>
            <SelectTrigger>
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Industries</SelectItem>
              <SelectItem value="Import Export">Import Export</SelectItem>
              <SelectItem value="Logistics">Logistics</SelectItem>
              <SelectItem value="Carriers">Carriers</SelectItem>
              <SelectItem value="Customs Broker">Customs Broker</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setRegion}>
            <SelectTrigger>
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Regions</SelectItem>
              <SelectItem value="Middle East">Middle East</SelectItem>
              <SelectItem value="North Africa">North Africa</SelectItem>
              <SelectItem value="Europe">Europe</SelectItem>
              <SelectItem value="Asia">Asia</SelectItem>
              <SelectItem value="Americas">Americas</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setService}>
            <SelectTrigger>
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Services</SelectItem>
              <SelectItem value="Air Freight">Air Freight</SelectItem>
              <SelectItem value="Sea Freight">Sea Freight</SelectItem>
              <SelectItem value="Customs Brokerage">Customs Brokerage</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <DirectoryList members={filteredMembers} isPaidMember={isPaidMember} />

      {!isPaidMember && <UpgradePrompt />}

      {isPaidMember && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Networking Tools</h2>
          <div className="flex space-x-4">
            <Button>Export Data</Button>
            <Button>View Saved Profiles</Button>
          </div>
        </div>
      )}
    </div>
  )
}

