import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentActivities = [
  { user: "John Doe", action: "listed a new tractor", time: "2 minutes ago" },
  { user: "Jane Smith", action: "reported a listing", time: "15 minutes ago" },
  { user: "Bob Johnson", action: "contacted support", time: "1 hour ago" },
  { user: "Alice Brown", action: "made a purchase", time: "3 hours ago" },
  { user: "Charlie Wilson", action: "became a seller", time: "5 hours ago" },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://avatar.vercel.sh/${activity.user}.png`} alt={activity.user} />
            <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user}</p>
            <p className="text-sm text-muted-foreground">
              {activity.action}
            </p>
          </div>
          <div className="ml-auto font-medium text-sm text-muted-foreground">
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  )
}

