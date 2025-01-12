"use client"; // Ensure this is a client component

import { SessionProvider } from 'next-auth/react';
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        {children}
        <Footer />
      </div>
    </SessionProvider>
  );
}
