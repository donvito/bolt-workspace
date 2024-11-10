import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, CheckCircle, AlertCircle } from "lucide-react";

const stats = [
  {
    title: "Team Members",
    value: "12",
    icon: Users,
    trend: "+2 this month",
  },
  {
    title: "Hours Tracked",
    value: "164",
    icon: Clock,
    trend: "This week",
  },
  {
    title: "Tasks Completed",
    value: "24",
    icon: CheckCircle,
    trend: "+8 today",
  },
  {
    title: "Pending Reviews",
    value: "5",
    icon: AlertCircle,
    trend: "Due today",
  },
];

export function StatsWidget() {
  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.trend}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}