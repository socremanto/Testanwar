import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MarketInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Trade Trends</h3>
            <p>Latest reports and analysis</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Regulatory Updates</h3>
            <p>Changes in trade laws and policies</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Partner Network</h3>
            <p>Directory of trusted partners</p>
          </div>
          <div className="flex space-x-4">
            <Button>Download Reports</Button>
            <Button variant="outline">Explore Partners</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

