"use client"

import { useState, useEffect } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface TermsAndConditionsProps {
  data: boolean
  updateData: (data: boolean) => void
}

export default function TermsAndConditions({ data, updateData }: TermsAndConditionsProps) {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    setAccepted(data)
  }, [data])

  const handleChange = (checked: boolean) => {
    setAccepted(checked)
    updateData(checked)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Terms and Conditions</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={accepted}
            onCheckedChange={(checked) => handleChange(checked as boolean)}
            required
          />
          <Label htmlFor="terms">
            I confirm that all information provided in this application is true and accurate to the best of my knowledge.
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreeTerms"
            checked={accepted}
            onCheckedChange={(checked) => handleChange(checked as boolean)}
            required
          />
          <Label htmlFor="agreeTerms">
            I have read and agree to TransMENA's terms and conditions.
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="consent"
            checked={accepted}
            onCheckedChange={(checked) => handleChange(checked as boolean)}
            required
          />
          <Label htmlFor="consent">
            I consent to TransMENA contacting me regarding my membership application and related services.
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="branchFee"
            checked={accepted}
            onCheckedChange={(checked) => handleChange(checked as boolean)}
            required
          />
          <Label htmlFor="branchFee">
            I understand that there is an additional fee of $500 per year for each additional branch registered with TransMENA.
          </Label>
        </div>
      </div>
    </div>
  )
}

