import { Card, CardContent } from "@/components/ui/card"

export default function Testimonial() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="text-center p-6">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "TransMENA Network has transformed how we operate, connecting us to global partners with unmatched efficiency."
            </blockquote>
            <cite className="text-gray-900 font-semibold">- Client Name, Company</cite>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

