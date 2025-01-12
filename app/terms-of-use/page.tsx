import { format } from 'date-fns'

export default function TermsOfUse() {
  const today = format(new Date(), 'MMMM d, yyyy')

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Terms of Use</h1>
      <p className="mb-4">Effective Date: {today}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using the TransMENA website [www.transmena.com] (the "Site"), you agree to comply with and be bound by these Terms of Use. If you do not agree, please do not use the Site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Use of the Site</h2>
        <p className="mb-4">You may use the Site for lawful purposes only. You agree not to:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Violate any applicable laws or regulations.</li>
          <li>Infringe on the rights of others.</li>
          <li>Use the Site for any unauthorized or commercial purpose.</li>
          <li>Introduce malware or engage in hacking attempts.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Intellectual Property</h2>
        <p className="mb-4">
          All content on the Site, including text, graphics, logos, and images, is the property of TransMENA or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or modify any content without our prior written consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Third-Party Links</h2>
        <p className="mb-4">
          The Site may contain links to third-party websites. We are not responsible for the content or practices of these websites. Use them at your own risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Disclaimer of Warranties</h2>
        <p className="mb-4">
          The Site is provided "as is" and "as available." We make no warranties, express or implied, regarding the accuracy, reliability, or availability of the Site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Limitation of Liability</h2>
        <p className="mb-4">
          TransMENA shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold TransMENA harmless from any claims, losses, or damages resulting from your use of the Site or violation of these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by the laws of Jordan. Any disputes shall be resolved in the courts of Amman.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms periodically. The updated version will be posted on the Site with the effective date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Contact Us</h2>
        <p className="mb-4">If you have questions about these Terms, please contact us at:</p>
        <p className="mb-2">Email: [legal@transmena.com]</p>
        <p>Address: [Insert Address]</p>
      </section>
    </main>
  )
}

