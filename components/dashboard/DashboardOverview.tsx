import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardOverview() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Welcome, [Member Name]!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Market Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">7 new</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Network Partners</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">120</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

