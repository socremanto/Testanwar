import { format } from 'date-fns'

export default function PrivacyPolicy() {
  const today = format(new Date(), 'MMMM d, yyyy')

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Privacy Policy</h1>
      <p className="mb-4">Effective Date: {today}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Introduction</h2>
        <p className="mb-4">
          TransMENA ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.transmena.com] (the "Site"). Please read this policy carefully. By using the Site, you agree to the terms of this Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Information We Collect</h2>
        <p className="mb-4">We may collect the following types of information:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Personal Information: Name, email address, phone number, company name, and other details you provide when contacting us or joining our network.</li>
          <li>Usage Data: Information about your interaction with the Site, such as IP address, browser type, pages visited, and time spent on the Site.</li>
          <li>Cookies and Tracking Technologies: Data collected through cookies, web beacons, and similar technologies (see our Cookie Policy for details).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">How We Use Your Information</h2>
        <p className="mb-4">We use your information for the following purposes:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>To provide and improve our services.</li>
          <li>To communicate with you about your inquiries or requests.</li>
          <li>To send newsletters, updates, and marketing materials (with your consent).</li>
          <li>To analyze Site usage and enhance user experience.</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Sharing Your Information</h2>
        <p className="mb-4">We do not sell or rent your personal information. We may share your information with:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Trusted third-party service providers who assist us in operating the Site and delivering services.</li>
          <li>Legal authorities if required by law or to protect our rights.</li>
          <li>Business partners in connection with joint offerings or services (with your consent).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of receiving marketing communications.</li>
          <li>Withdraw consent for data processing (where applicable).</li>
        </ul>
        <p className="mb-4">To exercise these rights, contact us at [privacy@transmena.com].</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">International Data Transfers</h2>
        <p className="mb-4">
          Your information may be transferred to and processed in countries outside your residence. We ensure adequate safeguards are in place to protect your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. The updated version will be posted on the Site with the effective date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Contact Us</h2>
        <p className="mb-4">If you have questions about this Privacy Policy, please contact us at:</p>
        <p className="mb-2">Email: [privacy@transmena.com]</p>
        <p>Address: [Insert Address]</p>
      </section>
    </main>
  )
}

