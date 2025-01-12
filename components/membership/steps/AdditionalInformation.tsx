"use client"

import { useState, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface AdditionalInformationProps {
  data: string
  updateData: (data: string) => void
}

export default function AdditionalInformation({ data, updateData }: AdditionalInformationProps) {
  const [additionalInfo, setAdditionalInfo] = useState('')

  useEffect(() => {
    if (data) {
      setAdditionalInfo(data)
    }
  }, [data])

  const handleChange = (value: string) => {
    setAdditionalInfo(value)
    updateData(value)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Additional Information</h2>
      <p className="text-gray-600 mb-4">
        Please provide any additional information that you believe would support your application:
      </p>
      <div>
        <Label htmlFor="additionalInfo">Additional Information</Label>
        <Textarea
          id="additionalInfo"
          value={additionalInfo}
          onChange={(e) => handleChange(e.target.value)}
          rows={6}
        />
      </div>
    </div>
  )
}

