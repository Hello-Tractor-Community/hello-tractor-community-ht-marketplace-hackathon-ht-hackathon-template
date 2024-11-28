"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    twoFactorAuth: false,
    autoRenewListings: true,
  })

  const handleSettingChange = (setting) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Change Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button>Update Account</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Email Notifications</Label>
            <Switch
              id="notifications"
              checked={settings.notifications}
              onCheckedChange={() => handleSettingChange("notifications")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
            <Switch
              id="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onCheckedChange={() => handleSettingChange("twoFactorAuth")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="autoRenewListings">Auto-renew Listings</Label>
            <Switch
              id="autoRenewListings"
              checked={settings.autoRenewListings}
              onCheckedChange={() => handleSettingChange("autoRenewListings")}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" placeholder="**** **** **** 1234" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input id="expiryDate" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="***" />
            </div>
          </div>
          <Button>Update Payment Information</Button>
        </CardContent>
      </Card>
    </div>
  )
}

