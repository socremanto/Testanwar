import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Logistics?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join TransMENA Network today and unlock new opportunities in the MENA region and beyond.
        </p>
        <Button size="lg" variant="secondary" className="mr-4">Sign Up Now</Button>
        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">Contact Sales</Button>
      </div>
    </section>
  )
}

