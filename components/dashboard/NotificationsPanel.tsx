"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from 'lucide-react'

const mockNotifications = [
  { id: 1, message: "New market insight available." },
  { id: 2, message: "Shipment #12345 has cleared customs." },
  { id: 3, message: "Reminder: Update your profile information." },
]

export default function NotificationsPanel() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Notifications</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bell className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      {isOpen && (
        <CardContent>
          <ul className="space-y-2">
            {mockNotifications.map((notification) => (
              <li key={notification.id} className="bg-gray-100 p-2 rounded">
                {notification.message}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )
}

