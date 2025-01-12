import { Button } from "@/components/ui/button"

export default function ForGlobal() {
  return (
    <section id="for-global" className="bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">For Global Companies</h2>
            <p className="text-gray-700 mb-6">
              Partner with trusted MENA freight forwarders to grow your presence in the region. Unlock the potential of this dynamic market with TransMENA Network.
            </p>
            <Button size="lg">Join as Global Company</Button>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=300&width=400" alt="Global Logistics" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  )
}

