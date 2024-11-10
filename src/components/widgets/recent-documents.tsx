import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const recentDocs = [
  {
    name: "Q1 Report.pdf",
    modified: "2 hours ago",
  },
  {
    name: "Meeting Notes.doc",
    modified: "Yesterday",
  },
  {
    name: "Project Timeline.xlsx",
    modified: "2 days ago",
  },
];

export function RecentDocuments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentDocs.map((doc, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{doc.modified}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}