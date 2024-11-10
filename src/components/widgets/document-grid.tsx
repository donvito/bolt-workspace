import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileIcon, ImageIcon, FileSpreadsheetIcon, FileTextIcon } from "lucide-react";

const documents = [
  {
    name: "Project Proposal",
    type: "doc",
    icon: FileTextIcon,
    modified: "2 hours ago",
  },
  {
    name: "Design Assets",
    type: "image",
    icon: ImageIcon,
    modified: "Yesterday",
  },
  {
    name: "Budget Report",
    type: "spreadsheet",
    icon: FileSpreadsheetIcon,
    modified: "2 days ago",
  },
  {
    name: "Contract",
    type: "pdf",
    icon: FileIcon,
    modified: "1 week ago",
  },
];

export function DocumentGrid() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((doc, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 rounded-lg border p-4"
            >
              <doc.icon className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="font-medium">{doc.name}</p>
                <p className="text-sm text-muted-foreground">
                  Modified {doc.modified}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}