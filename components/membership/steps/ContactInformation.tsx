"use client"

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2 } from 'lucide-react'

interface ContactInformationProps {
  data: any
  updateData: (data: any) => void
}

export default function ContactInformation({ data, updateData }: ContactInformationProps) {
  const [formData, setFormData] = useState({
    primaryContact: {
      name: '',
      position: '',
      email: '',
      phone: ''
    },
    companyAddress: '',
    additionalContacts: [
      { name: '', position: '', email: '', phone: '' },
      { name: '', position: '', email: '', phone: '' }
    ]
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

  const handleContactChange = (index: number, field: string, value: string) => {
    const newContacts = [...formData.additionalContacts]
    newContacts[index] = { ...newContacts[index], [field]: value }
    handleChange('additionalContacts', newContacts)
  }

  const handlePrimaryContactChange = (field: string, value: string) => {
    const newPrimaryContact = { ...formData.primaryContact, [field]: value }
    handleChange('primaryContact', newPrimaryContact)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contact Information</h2>

      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">Primary Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="primaryName">Name</Label>
                <Input
                  id="primaryName"
                  value={formData.primaryContact.name}
                  onChange={(e) => handlePrimaryContactChange('name', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="primaryPosition">Position/Title</Label>
                <Input
                  id="primaryPosition"
                  value={formData.primaryContact.position}
                  onChange={(e) => handlePrimaryContactChange('position', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="primaryEmail">Email Address</Label>
                <Input
                  id="primaryEmail"
                  type="email"
                  value={formData.primaryContact.email}
                  onChange={(e) => handlePrimaryContactChange('email', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="primaryPhone">Phone Number</Label>
                <Input
                  id="primaryPhone"
                  type="tel"
                  value={formData.primaryContact.phone}
                  onChange={(e) => handlePrimaryContactChange('phone', e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <Label htmlFor="companyAddress">Company Address</Label>
          <Input
            id="companyAddress"
            value={formData.companyAddress}
            onChange={(e) => handleChange('companyAddress', e.target.value)}
            required
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Additional Contacts</h3>
          {formData.additionalContacts.map((contact, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`contact${index}Name`}>Name</Label>
                    <Input
                      id={`contact${index}Name`}
                      value={contact.name}
                      onChange={(e) => handleContactChange(index, 'name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`contact${index}Position`}>Position</Label>
                    <Input
                      id={`contact${index}Position`}
                      value={contact.position}
                      onChange={(e) => handleContactChange(index, 'position', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`contact${index}Email`}>Email</Label>
                    <Input
                      id={`contact${index}Email`}
                      type="email"
                      value={contact.email}
                      onChange={(e) => handleContactChange(index, 'email', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`contact${index}Phone`}>Phone</Label>
                    <Input
                      id={`contact${index}Phone`}
                      type="tel"
                      value={contact.phone}
                      onChange={(e) => handleContactChange(index, 'phone', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

