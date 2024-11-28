"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const salesData = [
  {
    id: 1,
    product: "John Deere 5075E",
    buyer: "Farm Solutions Inc.",
    price: 45000,
    date: "2023-06-15",
    status: "Completed",
  },
  {
    id: 2,
    product: "Kubota L3901",
    buyer: "Green Acres Farm",
    price: 23500,
    date: "2023-06-20",
    status: "Pending",
  },
  {
    id: 3,
    product: "New Holland T4.75",
    buyer: "Harvest Hills",
    price: 38000,
    date: "2023-06-25",
    status: "Negotiating",
  },
]

export default function SalesPage() {
  const [sales] = useState(salesData)
  const [showroom, setShowroom] = useState({
    images: [
      "/image",
      "/image",
      "/image",
    ],
    currentImage: 0,
  })

  const nextImage = () => {
    setShowroom((prev) => ({
      ...prev,
      currentImage: (prev.currentImage + 1) % prev.images.length,
    }))
  }

  const prevImage = () => {
    setShowroom((prev) => ({
      ...prev,
      currentImage:
        (prev.currentImage - 1 + prev.images.length) % prev.images.length,
    }))
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Sales & Showroom</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Virtual Showroom</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <img
              src={showroom.images[showroom.currentImage]}
              alt={`Showroom image ${showroom.currentImage + 1}`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <Button
              className="absolute top-1/2 left-4 transform -translate-y-1/2"
              onClick={prevImage}
            >
              Previous
            </Button>
            <Button
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
              onClick={nextImage}
            >
              Next
            </Button>
          </div>
          <div className="mt-4">
            <Label htmlFor="image-upload">Upload New Image</Label>
            <Input id="image-upload" type="file" className="mt-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Product</th>
                  <th className="text-left p-2">Buyer</th>
                  <th className="text-left p-2">Price</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((sale) => (
                  <tr key={sale.id} className="border-b">
                    <td className="p-2">{sale.product}</td>
                    <td className="p-2">{sale.buyer}</td>
                    <td className="p-2">${sale.price.toLocaleString()}</td>
                    <td className="p-2">{sale.date}</td>
                    <td className="p-2">{sale.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

