import { Badge } from "@/components/ui/badge";

interface Event {
  title: string;
  type: string;
}

interface EventListProps {
  events: Event[];
  date: string;
}

export function EventList({ events, date }: EventListProps) {
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "important":
        return "destructive";
      case "work":
        return "default";
      case "personal":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-4 mt-6 pt-6 border-t">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">
          Events for {new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </h3>
        <Badge variant="outline" className="text-xs">
          {events.length} {events.length === 1 ? 'event' : 'events'}
        </Badge>
      </div>
      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
          >
            <span className="text-sm font-medium">{event.title}</span>
            <Badge variant={getBadgeVariant(event.type)}>
              {event.type}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}