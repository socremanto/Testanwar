import QuoteRequestForm from '@/components/quote/QuoteRequestForm'

export default function QuoteRequestPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">TransMENA Quote Request Form</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Your Path to Exceptional Global Logistics Solutions
        </p>
        <div className="prose dark:prose-invert mb-8">
          <p>
            Welcome to TransMENA's Quote Request Form. As Your Trusted Partner in Global Trade and Logistics, 
            we're committed to providing you with tailored, competitive rates for all your cargo needs. 
            Our extensive network of over 1,900 members worldwide ensures that you receive the most efficient 
            and cost-effective solutions for your logistics, carrier, and customs requirements.
          </p>
        </div>
        <QuoteRequestForm />
      </div>
    </main>
  )
}

