import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccountManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Profile Settings</h3>
            <p>Update personal and company information</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Billing & Payments</h3>
            <p>View invoices and payment history</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Security Settings</h3>
            <p>Change password and enable two-factor authentication</p>
          </div>
          <div className="flex space-x-4">
            <Button>Edit Profile</Button>
            <Button variant="outline">View Invoices</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

