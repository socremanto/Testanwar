"use client"

import { useState, useEffect } from 'react'
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

const interests = [
  'Expand global reach',
  'Access to new markets',
  'Networking opportunities',
  'Industry insights and expertise',
  'Logistics support',
  'Carrier partnerships',
  'Customs brokerage services',
  'Other'
]

const services = [
  'Import and Export facilitation',
  'Supplier and Distributor connections',
  'Logistics solutions',
  'Carrier services',
  'Customs brokerage',
  'Market intelligence',
  'Other'
]

interface MembershipInterestProps {
  data: any
  updateData: (data: any) => void
}

export default function MembershipInterest({ data, updateData }: MembershipInterestProps) {
  const [formData, setFormData] = useState({
    interests: [] as string[],
    otherInterest: '',
    services: [] as string[],
    otherService: ''
  })

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setFormData(data)
    }
  }, [data])

  const handleChange = (field: string, value: any) => {
    const newData = { ...formData, [field]: value }
    setFormData(newData)
    updateData(newData)
  }

  const toggleInterest = (interest: string) => {
    const newInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest]
    handleChange('interests', newInterests)
  }

  const toggleService = (service: string) => {
    const newServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service]
    handleChange('services', newServices)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Membership Interest</h2>

      <div className="space-y-6">
        <div className="space-y-4">
          <Label>Why are you interested in joining TransMENA? (select all that apply)</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interests.map((interest) => (
              <div key={interest} className="flex items-center space-x-2">
                <Checkbox
                  id={`interest-${interest}`}
                  checked={formData.interests.includes(interest)}
                  onCheckedChange={() => toggleInterest(interest)}
                />
                <Label htmlFor={`interest-${interest}`}>{interest}</Label>
              </div>
            ))}
          </div>
          {formData.interests.includes('Other') && (
            <div>
              <Label htmlFor="otherInterest">Please specify other interest</Label>
              <Input
                id="otherInterest"
                value={formData.otherInterest}
                onChange={(e) => handleChange('otherInterest', e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Label>Which of our services are you most interested in? (select all that apply)</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={`service-${service}`}
                  checked={formData.services.includes(service)}
                  onCheckedChange={() => toggleService(service)}
                />
                <Label htmlFor={`service-${service}`}>{service}</Label>
              </div>
            ))}
          </div>
          {formData.services.includes('Other') && (
            <div>
              <Label htmlFor="otherService">Please specify other service</Label>
              <Input
                id="otherService"
                value={formData.otherService}
                onChange={(e) => handleChange('otherService', e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

