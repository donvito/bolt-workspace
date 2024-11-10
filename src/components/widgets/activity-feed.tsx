import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const activities = [
  {
    id: 1,
    user: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    action: "completed",
    target: "Website Redesign",
    time: "2 hours ago",
    images: [
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=300&h=200&fit=crop",
    ],
  },
  {
    id: 2,
    user: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    action: "commented on",
    target: "API Documentation",
    time: "4 hours ago",
    comment: "Great work! Just a few minor adjustments needed.",
  },
  {
    id: 3,
    user: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    },
    action: "started",
    target: "Mobile App Development",
    time: "5 hours ago",
  },
];

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader className="border-b bg-muted/50 py-2">
        <CardTitle>Activity Feed</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] p-3">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.user.avatar} />
                  <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user.name}</span>
                    {" "}
                    <span className="text-muted-foreground">{activity.action}</span>
                    {" "}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  {activity.comment && (
                    <p className="text-sm text-muted-foreground">
                      "{activity.comment}"
                    </p>
                  )}
                  {activity.images && (
                    <div className="flex gap-2 mt-2">
                      {activity.images.map((image, i) => (
                        <img
                          key={i}
                          src={image}
                          alt=""
                          className="rounded-md w-60 h-40 object-cover"
                        />
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}