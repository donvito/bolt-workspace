import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineItems = [
  {
    date: "Mar 20",
    title: "Website Redesign",
    description: "Phase 1 completion",
    status: "completed",
  },
  {
    date: "Mar 22",
    title: "API Integration",
    description: "Backend integration milestone",
    status: "in-progress",
  },
  {
    date: "Mar 25",
    title: "Mobile App",
    description: "UI/UX design review",
    status: "upcoming",
  },
];

export function ProjectTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {timelineItems.map((item, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="min-w-16 text-sm text-muted-foreground">{item.date}</div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{item.title}</p>
                  <Badge variant={
                    item.status === "completed" ? "default" :
                    item.status === "in-progress" ? "secondary" : "outline"
                  }>
                    {item.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}