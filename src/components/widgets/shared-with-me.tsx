import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sharedItems = [
  {
    name: "Marketing Plan",
    sharedBy: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    date: "2 hours ago",
  },
  {
    name: "Design System",
    sharedBy: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    date: "Yesterday",
  },
];

export function SharedWithMe() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shared with Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sharedItems.map((item, i) => (
            <div key={i} className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={item.sharedBy.avatar} alt={item.sharedBy.name} />
                <AvatarFallback>
                  {item.sharedBy.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  Shared by {item.sharedBy.name} • {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}