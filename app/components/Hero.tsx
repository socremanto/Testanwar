import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center py-20 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TransMena%20photo-btmpLgMTcQZBtYRLWJqU4ynD5qySsM.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Your Gateway to Seamless Logistics Collaboration Across MENA and Beyond</h1>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Bridging the Middle East, North Africa, and the World Through Innovative Logistics Solutions
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="default" asChild>
              <a href="/services">Explore Our Services</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/partners">Join the Network</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">Contact Us Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

