"use client"

import { useState, useEffect } from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

const revenueRanges = [
  'Less than 1 million',
  '1-5 million',
  '5-20 million',
  '20-50 million',
  'Over 50 million'
]

const employeeRanges = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  'Over 500'
]

const markets = [
  'Middle East',
  'North Africa',
  'Europe',
  'Asia',
  'North America',
  'South America',
  'Other'
]

interface BusinessProfileProps {
  data: any
  updateData: (data: any) => void
}

export default function BusinessProfile({ data, updateData }: BusinessProfileProps) {
  const [formData, setFormData] = useState({
    annualRevenue: '',
    numberOfEmployees: '',
    primaryMarkets: [] as string[],
    otherMarket: ''
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

  const toggleMarket = (market: string) => {
    const newMarkets = formData.primaryMarkets.includes(market)
      ? formData.primaryMarkets.filter(m => m !== market)
      : [...formData.primaryMarkets, market]
    handleChange('primaryMarkets', newMarkets)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Business Profile</h2>

      <div className="space-y-6">
        <div className="space-y-4">
          <Label>Annual Revenue (USD)</Label>
          <RadioGroup
            value={formData.annualRevenue}
            onValueChange={(value) => handleChange('annualRevenue', value)}
          >
            {revenueRanges.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <RadioGroupItem value={range} id={`revenue-${range}`} />
                <Label htmlFor={`revenue-${range}`}>{range}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>Number of Employees</Label>
          <RadioGroup
            value={formData.numberOfEmployees}
            onValueChange={(value) => handleChange('numberOfEmployees', value)}
          >
            {employeeRanges.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <RadioGroupItem value={range} id={`employees-${range}`} />
                <Label htmlFor={`employees-${range}`}>{range}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>Primary Markets (select all that apply)</Label>
          <div className="grid grid-cols-2 gap-4">
            {markets.map((market) => (
              <div key={market} className="flex items-center space-x-2">
                <Checkbox
                  id={`market-${market}`}
                  checked={formData.primaryMarkets.includes(market)}
                  onCheckedChange={() => toggleMarket(market)}
                />
                <Label htmlFor={`market-${market}`}>{market}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

