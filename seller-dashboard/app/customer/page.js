"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const customersData = [
  {
    id: 1,
    name: "Farm Solutions Inc.",
    email: "contact@farmsolutions.com",
    phone: "+1 (555) 123-4567",
    lastPurchase: "2023-06-15",
  },
  {
    id: 2,
    name: "Green Acres Farm",
    email: "info@greenacres.com",
    phone: "+1 (555) 987-6543",
    lastPurchase: "2023-06-20",
  },
  {
    id: 3,
    name: "Harvest Hills",
    email: "support@harvesthills.com",
    phone: "+1 (555) 246-8135",
    lastPurchase: "2023-06-25",
  },
]

export default function CustomersPage() {
  const [customers] = useState(customersData)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    // Here you would typically send the message to your backend
    console.log(`Sending message to ${selectedCustomer.name}: ${message}`)
    setMessage("")
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Customer List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <div>
                    <h3 className="font-semibold">{customer.name}</h3>
                    <p className="text-sm text-gray-500">{customer.email}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    Last Purchase: {customer.lastPurchase}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Chat</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedCustomer ? (
              <div className="space-y-4">
                <h3 className="font-semibold">{selectedCustomer.name}</h3>
                <p>{selectedCustomer.email}</p>
                <p>{selectedCustomer.phone}</p>
                <Textarea
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button onClick={handleSendMessage}>Send Message</Button>
              </div>
            ) : (
              <p>Select a customer to start chatting</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

