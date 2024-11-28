"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const trendData = [
  { month: "Jan", tractors: 100, harvesters: 50, seeders: 75 },
  { month: "Feb", tractors: 120, harvesters: 55, seeders: 80 },
  { month: "Mar", tractors: 130, harvesters: 60, seeders: 85 },
  { month: "Apr", tractors: 140, harvesters: 65, seeders: 90 },
  { month: "May", tractors: 150, harvesters: 70, seeders: 95 },
  { month: "Jun", tractors: 160, harvesters: 75, seeders: 100 },
]

export default function MarketTrends() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Market Trend Analyzer</h1>
      <div className="flex justify-between items-center">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1m">Last Month</SelectItem>
            <SelectItem value="3m">Last 3 Months</SelectItem>
            <SelectItem value="6m">Last 6 Months</SelectItem>
            <SelectItem value="1y">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Equipment Demand Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={trendData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="tractors" stroke="#8884d8" />
              <Line type="monotone" dataKey="harvesters" stroke="#82ca9d" />
              <Line type="monotone" dataKey="seeders" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Viewed Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Tractors</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fastest Growing Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Seeders</div>
            <p className="text-xs text-muted-foreground">+25% growth rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time on Market</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 days</div>
            <p className="text-xs text-muted-foreground">-2 days from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Selling Brand</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">John Deere</div>
            <p className="text-xs text-muted-foreground">30% market share</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

