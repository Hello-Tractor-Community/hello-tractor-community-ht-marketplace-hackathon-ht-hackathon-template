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
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const listings = [
  { id: 1, title: "John Deere Tractor", seller: "Farm Equipment Co.", aiScore: 95, status: "Approved" },
  { id: 2, title: "Suspicious Farm Tool", seller: "Unknown Seller", aiScore: 30, status: "Flagged" },
  { id: 3, title: "Harvester 3000", seller: "Agri Machines Ltd.", aiScore: 85, status: "Under Review" },
  { id: 4, title: "Fertilizer Pack", seller: "Green Farms Inc.", aiScore: 60, status: "Under Review" },
  { id: 5, title: "Irrigation System", seller: "Water Solutions", aiScore: 98, status: "Approved" },
]

export default function AIModeration() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredListings = listings.filter(listing =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.seller.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">AI-Powered Listing Moderation</h1>
      <div className="flex justify-between">
        <Input
          placeholder="Search listings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[300px]"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Seller</TableHead>
            <TableHead>AI Confidence Score</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredListings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell>{listing.title}</TableCell>
              <TableCell>{listing.seller}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Progress value={listing.aiScore} className="w-[60%]" />
                  <span>{listing.aiScore}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={listing.status === "Approved" ? "success" : 
                               listing.status === "Flagged" ? "destructive" : 
                               "secondary"}>
                  {listing.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost">Review</Button>
                <Button variant="ghost" className="text-green-500">Approve</Button>
                <Button variant="ghost" className="text-red-500">Flag</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

