"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe, User } from 'lucide-react'
import { ThemeSwitcher } from './ThemeSwitcher'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'zh', name: '中文' },
  { code: 'pt', name: 'Português' },
]

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Shot%202025-01-12%20at%2012.28.10%20AM%20copy-3Kv9chaQpfmuW7vdLBy99V2Xt3xeUf.png"
            alt="TransMENA Network Logo"
            width={180}
            height={40}
            priority
          />
        </Link>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
          <Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link>
          <Link href="/partners" className="text-muted-foreground hover:text-foreground">Partners</Link>
          <Link href="/resources" className="text-muted-foreground hover:text-foreground">Resources</Link>
          <Link href="/events" className="text-muted-foreground hover:text-foreground">Events</Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link>
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => signOut()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" asChild>
              <Link href="/login">Member Login</Link>
            </Button>
          )}
          <Button variant="default" asChild className="ml-4">
            <Link href="/quote-request">Get Freight Quote</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code}>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeSwitcher />
        </div>
        <Button asChild><Link href="/become-a-partner" className="ml-4">Become a Partner</Link></Button>
      </nav>
    </header>
  )
}

