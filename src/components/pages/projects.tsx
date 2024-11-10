import { ProjectCard } from "@/components/widgets/project-card";
import { ProjectTimeline } from "@/components/widgets/project-timeline";
import { TeamMembers } from "@/components/widgets/team-members";

export function ProjectsPage() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Website Redesign"
          description="Modernize company website with new design system"
          progress={75}
          dueDate="2024-03-25"
          team={[
            { name: "Sarah W", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
            { name: "Alex T", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
          ]}
        />
        <ProjectCard
          title="Mobile App Development"
          description="Build native mobile app for iOS and Android"
          progress={45}
          dueDate="2024-04-15"
          team={[
            { name: "Mike C", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36" },
            { name: "Lisa R", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
          ]}
        />
        <ProjectCard
          title="API Integration"
          description="Integrate third-party services and APIs"
          progress={90}
          dueDate="2024-03-20"
          team={[
            { name: "John D", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
          ]}
        />
      </div>
      
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProjectTimeline />
        </div>
        <div>
          <TeamMembers />
        </div>
      </div>
    </div>
  );
}