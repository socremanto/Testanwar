interface StepIndicatorProps {
  steps: string[]
  currentStep: number
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="relative flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                ${index <= currentStep ? 'bg-primary border-primary text-primary-foreground' : 'border-gray-300 text-gray-500'}`}>
                {index + 1}
              </div>
              <span className="text-xs mt-2 hidden md:block">{step}</span>
            </div>
          ))}
          <div className="absolute top-4 left-0 right-0 h-0.5 -translate-y-1/2 transform">
            <div className="h-full bg-gray-200" />
            <div 
              className="absolute h-full bg-primary transition-all duration-500" 
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

