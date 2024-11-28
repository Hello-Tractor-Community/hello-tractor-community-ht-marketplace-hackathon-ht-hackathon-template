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
import { UserFilter } from "@/components/user-filter"

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "User", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Active" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User", status: "Suspended" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "User", status: "Active" },
]

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [users, setUsers] = useState(initialUsers)
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "User", status: "Active" })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { ...newUser, id: users.length + 1 }])
      setNewUser({ name: "", email: "", role: "User", status: "Active" }) // Reset form
      setIsModalOpen(false) // Close modal
    }
  }

  return (
    <div className="p-6 space-y-6 bg-white rounded-lg shadow-lg w-full">
      <h1 className="text-3xl font-bold text-charcoal">User Management</h1>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[300px] border-charcoal"
          />
          <UserFilter />
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="bg-sunset-blaze text-white">Add User</Button>
      </div>

      {/* User Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Button variant="ghost">Edit</Button>
                <Button variant="ghost" className="text-red-500">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add New User</h2>
            <div className="flex flex-col space-y-4">
              <Input
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="border-charcoal"
              />
              <Input
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="border-charcoal"
              />
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                className="border-charcoal p-2 rounded"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <select
                value={newUser.status}
                onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                className="border-charcoal p-2 rounded"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
              <Button onClick={handleAddUser} className="bg-sunset-blaze text-white">Add User</Button>
              <Button onClick={() => setIsModalOpen(false)} className="text-gray-500">Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

