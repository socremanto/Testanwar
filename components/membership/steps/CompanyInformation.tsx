"use client"

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const businessActivities = [
  'Import',
  'Export',
  'Manufacturing',
  'Distribution',
  'Logistics',
  'Carrier',
  'Customs Brokerage',
  'Other'
]

interface CompanyInformationProps {
  data: any
  updateData: (data: any) => void
}

export default function CompanyInformation({ data, updateData }: CompanyInformationProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    yearEstablished: '',
    companyWebsite: '',
    businessActivities: [] as string[],
    otherActivity: ''
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

  const toggleBusinessActivity = (activity: string) => {
    const activities = formData.businessActivities.includes(activity)
      ? formData.businessActivities.filter(a => a !== activity)
      : [...formData.businessActivities, activity]
    handleChange('businessActivities', activities)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Company Information</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            value={formData.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="yearEstablished">Year Established</Label>
          <Input
            id="yearEstablished"
            type="number"
            min="1900"
            max={new Date().getFullYear()}
            value={formData.yearEstablished}
            onChange={(e) => handleChange('yearEstablished', e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="companyWebsite">Company Website</Label>
          <Input
            id="companyWebsite"
            type="url"
            value={formData.companyWebsite}
            onChange={(e) => handleChange('companyWebsite', e.target.value)}
            required
          />
        </div>

        <div>
          <Label>Primary Business Activity</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {businessActivities.map((activity) => (
              <div key={activity} className="flex items-center space-x-2">
                <Checkbox
                  id={activity}
                  checked={formData.businessActivities.includes(activity)}
                  onCheckedChange={() => toggleBusinessActivity(activity)}
                />
                <Label htmlFor={activity}>{activity}</Label>
              </div>
            ))}
          </div>
        </div>

        {formData.businessActivities.includes('Other') && (
          <div>
            <Label htmlFor="otherActivity">Please specify other business activity</Label>
            <Input
              id="otherActivity"
              value={formData.otherActivity}
              onChange={(e) => handleChange('otherActivity', e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

