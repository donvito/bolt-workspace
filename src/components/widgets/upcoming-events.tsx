import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

const events = [
  {
    title: "Team Meeting",
    date: "Today, 2:00 PM",
    type: "work",
  },
  {
    title: "Project Review",
    date: "Tomorrow, 10:00 AM",
    type: "work",
  },
  {
    title: "Client Presentation",
    date: "Mar 25, 3:30 PM",
    type: "important",
  },
  {
    title: "Team Lunch",
    date: "Mar 26, 12:00 PM",
    type: "personal",
  },
];

export function UpcomingEvents() {
  return (
    <Card className="h-full shadow-md">
      <CardHeader className="border-b bg-muted/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Your schedule for the next few days</CardDescription>
          </div>
          <Button size="icon" variant="outline" className="h-8 w-8">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-4 rounded-lg border bg-card p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {event.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {event.date}
                </p>
              </div>
              <Badge
                variant={
                  event.type === "important"
                    ? "destructive"
                    : event.type === "work"
                    ? "default"
                    : "secondary"
                }
                className="capitalize"
              >
                {event.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}