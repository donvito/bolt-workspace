import { CalendarWidget } from "@/components/widgets/calendar-widget";
import { StatsWidget } from "@/components/widgets/stats-widget";
import { ActivityFeed } from "@/components/widgets/activity-feed";
import { TaskBoard } from "@/components/widgets/task-board";
import { TeamChat } from "@/components/widgets/team-chat";
import { QuickActions } from "@/components/widgets/quick-actions";

export function DashboardPage() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StatsWidget />
      </div>
      
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <QuickActions />
          <ActivityFeed />
        </div>
        
        <div className="space-y-4">
          <TaskBoard />
          <CalendarWidget />
          <TeamChat />
        </div>
      </div>
    </div>
  );
}