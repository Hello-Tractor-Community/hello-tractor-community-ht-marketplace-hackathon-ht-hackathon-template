import { SidebarProvider } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/admin-sidebar"
import "./globals.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

