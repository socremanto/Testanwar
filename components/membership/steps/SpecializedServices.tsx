"use client"

import { useState, useEffect } from 'react'
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = {
  logisticsSolutions: [
    'Air Freight',
    'Sea Freight',
    'Land Transportation',
    'Rail Freight',
    'Multimodal transportation management',
    'Warehousing and distribution',
    'Supply chain optimization',
    'Track and trace technology',
    'Inventory management',
    'Last-mile delivery solutions',
    'Cross-border e-commerce logistics'
  ],
  carrierServices: [
    'Airlines',
    'Shipowners',
    'Container Shipping Lines',
    'Trucking Transportation',
    'Specialized cargo handling'
  ],
  customsBrokerage: [
    'Customs clearance and documentation',
    'Tariff classification',
    'Duty and tax calculation',
    'Compliance management',
    'Free Trade Agreement utilization',
    'Import/Export license assistance',
    'Bonded warehousing',
    'Temporary import/export processing'
  ]
}

interface SpecializedServicesProps {
  data: any
  updateData: (data: any) => void
}

export default function SpecializedServices({ data, updateData }: SpecializedServicesProps) {
  const [formData, setFormData] = useState({
    logisticsSolutions: [] as string[],
    carrierServices: [] as string[],
    customsBrokerage: [] as string[]
  })

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setFormData(data)
    }
  }, [data])

  const handleChange = (category: string, service: string) => {
    const newServices = formData[category as keyof typeof formData].includes(service)
      ? formData[category as keyof typeof formData].filter(s => s !== service)
      : [...formData[category as keyof typeof formData], service]
    
    const newData = { ...formData, [category]: newServices }
    setFormData(newData)
    updateData(newData)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Specialized Services</h2>
      <p className="text-gray-600 mb-4">
        Please indicate your interest in our specialized services:
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Logistics Solutions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.logisticsSolutions.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={`logistics-${service}`}
                  checked={formData.logisticsSolutions.includes(service)}
                  onCheckedChange={() => handleChange('logisticsSolutions', service)}
                />
                <Label htmlFor={`logistics-${service}`}>{service}</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Carrier Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.carrierServices.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={`carrier-${service}`}
                  checked={formData.carrierServices.includes(service)}
                  onCheckedChange={() => handleChange('carrierServices', service)}
                />
                <Label htmlFor={`carrier-${service}`}>{service}</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customs Brokerage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.customsBrokerage.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={`customs-${service}`}
                  checked={formData.customsBrokerage.includes(service)}
                  onCheckedChange={() => handleChange('customsBrokerage', service)}
                />
                <Label htmlFor={`customs-${service}`}>{service}</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

