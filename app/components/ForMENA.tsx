import { Button } from "@/components/ui/button"

export default function ForMENA() {
  return (
    <section id="for-mena" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">For MENA Companies</h2>
            <p className="text-gray-700 mb-6">
              Connect with global logistics partners to expand your services and reach new markets. TransMENA Network helps you grow your business and take it to the next level.
            </p>
            <Button size="lg">Join as MENA Company</Button>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img src="/placeholder.svg?height=300&width=400" alt="MENA Logistics" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  )
}

