import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface TeamMember {
  name: string;
  avatar: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  dueDate: string;
  team: TeamMember[];
}

export function ProjectCard({ title, description, progress, dueDate, team }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {team.map((member, i) => (
              <Avatar key={i} className="border-2 border-background w-8 h-8">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">Due {new Date(dueDate).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  );
}