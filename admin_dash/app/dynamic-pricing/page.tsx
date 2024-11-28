"use client"
import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Slider } from "@/components/ui/slider"

const products = [
  { id: 1, name: "Tractor Model X", basePrice: 50000, currentPrice: 52000, demandFactor: 1.04 },
  { id: 2, name: "Harvester Y-2000", basePrice: 75000, currentPrice: 72000, demandFactor: 0.96 },
  { id: 3, name: "Seeder Pro", basePrice: 15000, currentPrice: 15750, demandFactor: 1.05 },
  { id: 4, name: "Irrigation System Z", basePrice: 8000, currentPrice: 7600, demandFactor: 0.95 },
  { id: 5, name: "Fertilizer Spreader", basePrice: 5000, currentPrice: 5250, demandFactor: 1.05 },
]

export default function DynamicPricing() {
  const [searchTerm, setSearchTerm] = useState("")
  const [pricingData, setPricingData] = useState(products)

  const filteredProducts = pricingData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDemandChange = (id: number, newDemand: number) => {
    setPricingData(pricingData.map(product => 
      product.id === id 
        ? { ...product, demandFactor: newDemand, currentPrice: Math.round(product.basePrice * newDemand) }
        : product
    ))
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dynamic Pricing Engine</h1>
      <div
className="flex justify-between">
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[300px]"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Base Price</TableHead>
            <TableHead>Current Price</TableHead>
            <TableHead>Demand Factor</TableHead>
            <TableHead>Adjust Demand</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.basePrice.toLocaleString()}</TableCell>
              <TableCell>${product.currentPrice.toLocaleString()}</TableCell>
              <TableCell>{product.demandFactor.toFixed(2)}</TableCell>
              <TableCell>
                <Slider
                  min={0.5}
                  max={1.5}
                  step={0.01}
                  value={[product.demandFactor]}
                  onValueChange={(value) => handleDemandChange(product.id, value[0])}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

