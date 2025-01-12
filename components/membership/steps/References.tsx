"use client"

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

interface ReferencesProps {
  data: any
  updateData: (data: any) => void
}

export default function References({ data, updateData }: ReferencesProps) {
  const [formData, setFormData] = useState({
    references: [
      { companyName: '', contactPerson: '', email: '', phone: '' },
      { companyName: '', contactPerson: '', email: '', phone: '' },
      { companyName: '', contactPerson: '', email: '', phone: '' }
    ]
  })

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setFormData(data)
    }
  }, [data])

  const handleChange = (index: number, field: string, value: string) => {
    const newReferences = [...formData.references]
    newReferences[index] = { ...newReferences[index], [field]: value }
    const newData = { ...formData, references: newReferences }
    setFormData(newData)
    updateData(newData)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">References</h2>
      <p className="text-gray-600 mb-4">
        Please provide three business references:
      </p>

      {formData.references.map((reference, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">Reference {index + 1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`companyName${index}`}>Company Name</Label>
                <Input
                  id={`companyName${index}`}
                  value={reference.companyName}
                  onChange={(e) => handleChange(index, 'companyName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor={`contactPerson${index}`}>Contact Person</Label>
                <Input
                  id={`contactPerson${index}`}
                  value={reference.contactPerson}
                  onChange={(e) => handleChange(index, 'contactPerson', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor={`email${index}`}>Email</Label>
                <Input
                  id={`email${index}`}
                  type="email"
                  value={reference.email}
                  onChange={(e) => handleChange(index, 'email', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor={`phone${index}`}>Phone</Label>
                <Input
                  id={`phone${index}`}
                  type="tel"
                  value={reference.phone}
                  onChange={(e) => handleChange(index, 'phone', e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

