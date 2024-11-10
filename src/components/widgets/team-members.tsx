import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    name: "Sarah Wilson",
    role: "Lead Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    status: "active",
  },
  {
    name: "Alex Thompson",
    role: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    status: "busy",
  },
  {
    name: "Mike Chen",
    role: "Backend Developer",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    status: "offline",
  },
];

export function TeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <Badge variant={
                member.status === "active" ? "default" :
                member.status === "busy" ? "destructive" : "secondary"
              }>
                {member.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}