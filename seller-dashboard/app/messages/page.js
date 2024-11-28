"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const messagesData = [
  {
    id: 1,
    from: "Farm Solutions Inc.",
    subject: "Inquiry about John Deere 5075E",
    preview: "Hello, I'm interested in the John Deere 5075E you have listed. Is it still available?",
    date: "2023-06-28",
    read: false,
  },
  {
    id: 2,
    from: "Green Acres Farm",
    subject: "Kubota L3901 Negotiation",
    preview: "Thank you for your offer. We'd like to discuss the price further. Are you open to negotiation?",
    date: "2023-06-27",
    read: true,
  },
  {
    id: 3,
    from: "Harvest Hills",
    subject: "New Holland T4.75 Inspection Request",
    preview: "We're very interested in the New Holland T4.75. Would it be possible to schedule an inspection?",
    date: "2023-06-26",
    read: false,
  },
]

export default function MessagesPage() {
  const [messages, setMessages] = useState(messagesData)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [reply, setReply] = useState("")

  const handleSelectMessage = (message) => {
    setSelectedMessage(message)
    setMessages(messages.map(m => m.id === message.id ? {...m, read: true} : m))
  }

  const handleSendReply = () => {
    // Here you would typically send the reply to your backend
    console.log(`Sending reply to ${selectedMessage.from}: ${reply}`)
    setReply("")
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Messages</h2>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Inbox</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-100 ${
                    message.read ? "" : "font-bold"
                  }`}
                  onClick={() => handleSelectMessage(message)}
                >
                  <div>
                    <h3 className="font-semibold">{message.from}</h3>
                    <p className="text-sm">{message.subject}</p>
                  </div>
                  <p className="text-sm text-gray-500">{message.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Message Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedMessage ? (
              <div className="space-y-4">
                <h3 className="font-semibold">{selectedMessage.from}</h3>
                <p className="font-medium">{selectedMessage.subject}</p>
                <p>{selectedMessage.preview}</p>
                <Textarea
                  placeholder="Type your reply here..."
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
                <Button onClick={handleSendReply}>Send Reply</Button>
              </div>
            ) : (
              <p>Select a message to view details</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

