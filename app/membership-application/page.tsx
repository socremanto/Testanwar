import MembershipApplicationForm from '@/components/membership/MembershipApplicationForm'

export default function MembershipApplicationPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">TransMENA Network Membership Application</h1>
        <p className="text-gray-600 mb-8">
          Join our global network of successful businesses. Please complete all sections of the application form below.
        </p>
        <MembershipApplicationForm />
      </div>
    </main>
  )
}

