"use client"

import { BarChart, Users, Package, FileText, MessageSquare, Settings, ShieldAlert, LayoutDashboard, Award, Zap, Scale, Leaf, Gift, Calendar } from 'lucide-react'
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarTrigger, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton
} from "@/components/ui/sidebar"
import Image from 'next/image'
import Image1 from "@/public/HT_LOGO_RGB_Orange.png"

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/" },
  { icon: Users, label: "User Management", href: "/users" },
  { icon: Award, label: "Seller Verification", href: "/seller-verification" },
  { icon: Package, label: "Listing Management", href: "/listings" },
  { icon: ShieldAlert, label: "Content Moderation", href: "/moderation" },
  { icon: Zap, label: "Dynamic Pricing", href: "/dynamic-pricing" },
  { icon: Scale, label: "Dispute Resolution", href: "/disputes" },
  { icon: BarChart, label: "Market Trends", href: "/market-trends" },
  { icon: Leaf, label: "Sustainability Tracker", href: "/sustainability" },
  { icon: Gift, label: "Rewards System", href: "/rewards" },
  { icon: Calendar, label: "Campaign Manager", href: "/campaigns" },
  { icon: Settings, label: "Platform Settings", href: "/settings" },
]

export function AdminSidebar() {
  return (
    <Sidebar className="bg-charcoal text-white w-64 shadow-lg">
      <SidebarHeader>
        <Image src={Image1} alt="AgriTrade Logo" className="h-24 w-auto mx-auto" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <a href={item.href} className="flex items-center p-6 hover:bg-sunset-blaze rounded-lg transition duration-200">
                  <item.icon className="w-5 h-5 " />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="flex justify-center py-4">
        <SidebarTrigger className="bg-sunset-blaze text-white rounded-full p-2 hover:bg-hibiscus transition duration-200" />
      </SidebarFooter>
    </Sidebar>
  )
}

