"use client"
import React, { useState } from "react"
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const verificationRequests = [
  { id: 1, seller: "Farm Equipment Co.", documentType: "Business License", status: "Pending" },
  { id: 2, seller: "Agri Machines Ltd.", documentType: "Tax Certificate", status: "Under Review" },
  { id: 3, seller: "Modern Farming Tools", documentType: "Identity Proof", status: "Approved" },
  { id: 4, seller: "Farm Solutions Inc.", documentType: "Business License", status: "Rejected" },
  { id: 5, seller: "Harvest Helpers", documentType: "Insurance Document", status: "Pending" },
]

export default function SellerVerification() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRequests = verificationRequests.filter(request =>
    request.seller.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleApprove = (id: number) => {
    toast.success(`Seller ID ${id} has been approved!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleReject = (id: number) => {
    toast.error(`Seller ID ${id} has been rejected!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="p-6 space-y-6 bg-white rounded-lg shadow-lg w-full max-w-full">
      <h1 className="text-3xl font-bold text-charcoal">Seller Verification</h1>
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search sellers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-xs border-charcoal"
        />
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Seller</TableHead>
            <TableHead>Document Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.seller}</TableCell>
              <TableCell>{request.documentType}</TableCell>
              <TableCell>
                <Badge variant={request.status === "Approved" ? "success" : 
                               request.status === "Rejected" ? "destructive" : 
                               "secondary"}>
                  {request.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" onClick={() => handleApprove(request.id)} className="text-green-500">Approve</Button>
                <Button variant="ghost" onClick={() => handleReject(request.id)} className="text-red-500">Reject</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ToastContainer />
    </div>
  )
}

