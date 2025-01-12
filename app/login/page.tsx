import Image from 'next/image'
import LoginForm from '@/components/LoginForm'
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <Image
                  src="/login-hero.jpg"
                  alt="Global trade and logistics"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-2">Welcome Back to the TransMENA Network</h1>
                <p className="text-gray-600 mb-6">
                  Access your personalized dashboard to manage your trade operations, track shipments, and explore market insights.
                </p>
                <LoginForm />
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-2">Not a member yet?</h2>
                  <p className="text-gray-600 mb-4">
                    Join the TransMENA Network today and unlock exclusive benefits.
                  </p>
                  <Button asChild>
                    <a href="/register">Join Now</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

