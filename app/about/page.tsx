import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Who We Are: Pioneering Logistics Collaboration in MENA</h1>
      <p className="text-lg mb-6">
        At TransMENA Network, we specialize in connecting the Middle East and North Africa (MENA) to the global logistics ecosystem. Our mission is to simplify cross-border trade, enhance supply chain efficiency, and foster collaboration between regional and international partners.
      </p>
      <p className="text-lg mb-6">
        With decades of combined expertise, we understand the unique challenges and opportunities in MENA logistics. By leveraging cutting-edge technology and a vast network of trusted partners, we deliver tailored solutions that drive growth and innovation.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Regional Expertise: Deep knowledge of MENA markets.</li>
        <li>Global Reach: Partnerships spanning continents.</li>
        <li>Innovative Solutions: Advanced tools for seamless logistics management.</li>
        <li>Commitment to Excellence: Delivering results with integrity and reliability.</li>
      </ul>
      <div className="space-x-4">
        <Button size="lg" asChild>
          <a href="/partners">Learn More About Our Network</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="/contact">Join the TransMENA Network</a>
        </Button>
      </div>
    </main>
  )
}

