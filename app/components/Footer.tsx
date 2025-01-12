import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">TransMENA Network</h3>
            <p className="text-sm">Connecting MENA Logistics to the World</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link href="/partners" className="hover:text-foreground">Network Partners</Link></li>
              <li><Link href="/resources" className="hover:text-foreground">Resources</Link></li>
              <li><Link href="/events" className="hover:text-foreground">Events</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-foreground">Terms of Use</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-foreground"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-foreground"><Twitter size={24} /></a>
              <a href="#" className="hover:text-foreground"><Facebook size={24} /></a>
              <a href="#" className="hover:text-foreground"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm">
          © {new Date().getFullYear()} TransMENA Network. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

