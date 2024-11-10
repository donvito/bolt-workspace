import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  MessageSquarePlus,
  PlusCircle,
  UserPlus,
} from "lucide-react";

export function QuickActions() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="border-b bg-muted/50 py-3">
        <CardTitle className="text-sm">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="py-3">
        <div className="grid grid-cols-4 gap-2">
          <Button variant="ghost" size="sm" className="h-auto flex-col py-2 px-1">
            <PlusCircle className="h-4 w-4 mb-1" />
            <span className="text-[10px]">New Task</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="h-auto flex-col py-2 px-1">
            <MessageSquarePlus className="h-4 w-4 mb-1" />
            <span className="text-[10px]">Meeting</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="h-auto flex-col py-2 px-1">
            <FileText className="h-4 w-4 mb-1" />
            <span className="text-[10px]">Document</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="h-auto flex-col py-2 px-1">
            <UserPlus className="h-4 w-4 mb-1" />
            <span className="text-[10px]">Invite</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}