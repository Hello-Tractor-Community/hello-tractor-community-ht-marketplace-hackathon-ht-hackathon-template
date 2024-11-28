// import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "../components/sidebar"
import { Toaster } from "@/components/ui/toaster"
// import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AgriTrade - Seller Dashboard",
  description: "Secondary marketplace for agricultural equipment",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
            <div className="flex h-screen overflow-hidden">
              <Sidebar />
              <main className="flex-1 overflow-y-auto bg-background p-8">
                {children}
              </main>
            </div>
            <Toaster />
          {/* </ThemeProvider> */}
        </body>
      </html>
    
  )
}

