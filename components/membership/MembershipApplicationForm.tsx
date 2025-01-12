"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import CompanyInformation from './steps/CompanyInformation'
import ContactInformation from './steps/ContactInformation'
import BusinessProfile from './steps/BusinessProfile'
import BranchInformation from './steps/BranchInformation'
import MembershipInterest from './steps/MembershipInterest'
import SpecializedServices from './steps/SpecializedServices'
import References from './steps/References'
import AdditionalInformation from './steps/AdditionalInformation'
import TermsAndConditions from './steps/TermsAndConditions'
import StepIndicator from './StepIndicator'

const steps = [
  'Company Information',
  'Contact Information',
  'Business Profile',
  'Branch Information',
  'Membership Interest',
  'Specialized Services',
  'References',
  'Additional Information',
  'Terms & Conditions'
]

export default function MembershipApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    companyInfo: {},
    contactInfo: {},
    businessProfile: {},
    branchInfo: {},
    membershipInterest: {},
    specializedServices: {},
    references: {},
    additionalInfo: '',
    termsAccepted: false
  })

  const updateFormData = (step: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [step]: data
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async () => {
    // Implement form submission logic here
    console.log('Form submitted:', formData)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <CompanyInformation 
          data={formData.companyInfo} 
          updateData={(data) => updateFormData('companyInfo', data)} 
        />
      case 1:
        return <ContactInformation 
          data={formData.contactInfo} 
          updateData={(data) => updateFormData('contactInfo', data)} 
        />
      case 2:
        return <BusinessProfile 
          data={formData.businessProfile} 
          updateData={(data) => updateFormData('businessProfile', data)} 
        />
      case 3:
        return <BranchInformation 
          data={formData.branchInfo} 
          updateData={(data) => updateFormData('branchInfo', data)} 
        />
      case 4:
        return <MembershipInterest 
          data={formData.membershipInterest} 
          updateData={(data) => updateFormData('membershipInterest', data)} 
        />
      case 5:
        return <SpecializedServices 
          data={formData.specializedServices} 
          updateData={(data) => updateFormData('specializedServices', data)} 
        />
      case 6:
        return <References 
          data={formData.references} 
          updateData={(data) => updateFormData('references', data)} 
        />
      case 7:
        return <AdditionalInformation 
          data={formData.additionalInfo} 
          updateData={(data) => updateFormData('additionalInfo', data)} 
        />
      case 8:
        return <TermsAndConditions 
          data={formData.termsAccepted} 
          updateData={(data) => updateFormData('termsAccepted', data)} 
        />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <StepIndicator steps={steps} currentStep={currentStep} />
      <Card className="p-6">
        {renderStep()}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          {currentStep === steps.length - 1 ? (
            <Button onClick={handleSubmit}>Submit Application</Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </div>
      </Card>
    </div>
  )
}

