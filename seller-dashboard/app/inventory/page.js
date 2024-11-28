"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "../../hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InventoryPage() {
  const [inventory, setInventory] = useState([])
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    price: "",
    condition: "",
    year: "",
    age: "",
    usage: "",
    maintenance: "",
  })
  const [aiSuggestion, setAiSuggestion] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    fetchInventory()
  }, [])

  const fetchInventory = async () => {
    const response = await fetch('/api/inventory')
    const data = await response.json()
    setInventory(data)
  }

  const handleAddItem = async () => {
    const response = await fetch('/api/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })

    if (response.ok) {
      const addedItem = await response.json()
      setInventory([...inventory, addedItem])
      setNewItem({
        name: "",
        category: "",
        price: "",
        condition: "",
        year: "",
        age: "",
        usage: "",
        maintenance: "",
      })
      toast({
        title: "Item added",
        description: "Your new item has been added to the inventory.",
      })
    } else {
      toast({
        title: "Error",
        description: "There was an error adding the item. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleAiSuggest = async (action) => {
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action, data: selectedItem }),
    })

    if (response.ok) {
      const data = await response.json()
      setAiSuggestion(data)
    } else {
      toast({
        title: "Error",
        description: "There was an error getting AI suggestions. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Item</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Item</DialogTitle>
              <DialogDescription>
                Enter the details of the new item to add to your inventory.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {Object.keys(newItem).map((key) => (
                <div key={key} className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={key} className="text-right">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Label>
                  <Input
                    id={key}
                    value={newItem[key]}
                    onChange={(e) =>
                      setNewItem({ ...newItem, [key]: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddItem}>
                Add Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Inventory List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Condition</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventory.map((item) => (
                  <TableRow key={item._id} onClick={() => setSelectedItem(item)} className="cursor-pointer">
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>${parseFloat(item.price).toLocaleString()}</TableCell>
                    <TableCell>{item.condition}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedItem ? (
              <div className="space-y-4">
                <h3 className="font-semibold">{selectedItem.name}</h3>
                <div className="space-x-2">
                  <Button onClick={() => handleAiSuggest('suggestPrice')}>Suggest Price</Button>
                  <Button onClick={() => handleAiSuggest('assessCondition')}>Assess Condition</Button>
                  <Button onClick={() => handleAiSuggest('forecastDemand')}>Forecast Demand</Button>
                </div>
                {aiSuggestion && (
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p>{aiSuggestion.suggestion || aiSuggestion.assessment || aiSuggestion.forecast}</p>
                  </div>
                )}
              </div>
            ) : (
              <p>Select an item to get AI insights</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

