import { Metadata } from 'next'
import DashboardOverview from '@/components/dashboard/DashboardOverview'
import TradeOperations from '@/components/dashboard/TradeOperations'
import MarketInsights from '@/components/dashboard/MarketInsights'
import AccountManagement from '@/components/dashboard/AccountManagement'
import SupportResources from '@/components/dashboard/SupportResources'
import NotificationsPanel from '@/components/dashboard/NotificationsPanel'

export const metadata: Metadata = {
  title: 'TransMENA Network Dashboard',
  description: 'Manage your trade operations, track shipments, and explore market insights.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DashboardOverview />
            <TradeOperations />
            <MarketInsights />
            <AccountManagement />
            <SupportResources />
          </div>
          <div className="lg:col-span-1">
            <NotificationsPanel />
          </div>
        </div>
      </main>
    </div>
  )
}

