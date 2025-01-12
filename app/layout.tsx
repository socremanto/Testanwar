// app/layout.tsx
import './globals.css';  // Keep this import here
import { Inter } from 'next/font/google';
import RootLayoutClient from '@/app/components/RootLayoutClient';
import { ChatBot } from '@/components/ChatBot';

const inter = Inter({ subsets: ['latin'] });

// Metadata export (no need for "use client" here)
export const metadata = {
  title: 'TransMENA Network',
  description: 'Your Gateway to Seamless Logistics Collaboration Across MENA and Beyond',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add other necessary meta tags here */}
      </head>
      <body className={inter.className}>
        {/* Root Layout Client */}
        <RootLayoutClient>
          {children}
        </RootLayoutClient>

        {/* ChatBot component (conditionally rendered if needed) */}
        <ChatBot />
      </body>
    </html>
  );
}
