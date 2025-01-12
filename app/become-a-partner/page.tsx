import MembershipApplicationForm from '@/components/membership/MembershipApplicationForm'
import AgreementDownload from '@/components/membership/AgreementDownload'

export default function BecomeAPartnerPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Become a TransMENA Network Partner</h1>
      <p className="text-lg mb-8">
        Join our global network of successful businesses and unlock new opportunities in logistics and trade across the MENA region and beyond.
      </p>
      <AgreementDownload />
      <MembershipApplicationForm />
    </main>
  )
}

