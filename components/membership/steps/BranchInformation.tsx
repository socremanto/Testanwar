"use client"

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Trash2 } from 'lucide-react'

interface BranchInformationProps {
  data: any
  updateData: (data: any) => void
}

export default function BranchInformation({ data, updateData }: BranchInformationProps) {
  const [formData, setFormData] = useState({
    numberOfBranches: 0,
    branches: [] as any[]
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

  const addBranch = () => {
    const newBranches = [...formData.branches, {
      name: '',
      address: '',
      primaryContact: '',
      email: '',
      phone: ''
    }]
    handleChange('branches', newBranches)
    handleChange('numberOfBranches', newBranches.length)
  }

  const removeBranch = (index: number) => {
    const newBranches = formData.branches.filter((_, i) => i !== index)
    handleChange('branches', newBranches)
    handleChange('numberOfBranches', newBranches.length)
  }

  const updateBranch = (index: number, field: string, value: string) => {
    const newBranches = [...formData.branches]
    newBranches[index] = { ...newBranches[index], [field]: value }
    handleChange('branches', newBranches)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Branch Information</h2>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-sm text-blue-800">
          Please note: There is an additional fee of $500 per office per year for each branch registered with TransMENA.
          This fee covers extended network benefits, localized support, and enhanced global reach for your business.
        </p>
      </div>

      <Button onClick={addBranch} className="mb-4">
        <Plus className="w-4 h-4 mr-2" />
        Add Branch
      </Button>

      <div className="space-y-4">
        {formData.branches.map((branch: any, index: number) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Branch {index + 1}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeBranch(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`branch${index}Name`}>Branch Name</Label>
                  <Input
                    id={`branch${index}Name`}
                    value={branch.name}
                    onChange={(e) => updateBranch(index, 'name', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor={`branch${index}Address`}>Address</Label>
                  <Input
                    id={`branch${index}Address`}
                    value={branch.address}
                    onChange={(e) => updateBranch(index, 'address', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor={`branch${index}Contact`}>Primary Contact</Label>
                  <Input
                    id={`branch${index}Contact`}
                    value={branch.primaryContact}
                    onChange={(e) => updateBranch(index, 'primaryContact', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor={`branch${index}Email`}>Email</Label>
                  <Input
                    id={`branch${index}Email`}
                    type="email"
                    value={branch.email}
                    onChange={(e) => updateBranch(index, 'email', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor={`branch${index}Phone`}>Phone</Label>
                  <Input
                    id={`branch${index}Phone`}
                    type="tel"
                    value={branch.phone}
                    onChange={(e) => updateBranch(index, 'phone', e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

