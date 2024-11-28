"use client"

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
import { ListingFilter } from "../../components/listing-filter"

const listings = [
  { id: 1, title: "John Deere Tractor", seller: "Farm Equipment Co.", price: 50000, status: "Active" },
  { id: 2, title: "Kubota Harvester", seller: "AgriMachines Ltd.", price: 75000, status: "Pending" },
  { id: 3, title: "Case IH Sprayer", seller: "Modern Farming Tools", price: 30000, status: "Active" },
  { id: 4, title: "New Holland Baler", seller: "Farm Solutions Inc.", price: 25000, status: "Inactive" },
  { id: 5, title: "Massey Ferguson Combine", seller: "Harvest Helpers", price: 100000, status: "Active" },
]

export default function ListingManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredListings = listings.filter(listing =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.seller.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Listing Management</h1>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search listings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[300px]"
          />
          <ListingFilter />
        </div>
        <Button>Add Listing</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Seller</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredListings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell>{listing.title}</TableCell>
              <TableCell>{listing.seller}</TableCell>
              <TableCell>${listing.price.toLocaleString()}</TableCell>
              <TableCell>{listing.status}</TableCell>
              <TableCell>
                <Button variant="ghost">Edit</Button>
                <Button variant="ghost" className="text-red-500">Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

