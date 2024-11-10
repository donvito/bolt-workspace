import { DocumentGrid } from "@/components/widgets/document-grid";
import { RecentDocuments } from "@/components/widgets/recent-documents";
import { SharedWithMe } from "@/components/widgets/shared-with-me";

export function DocumentsPage() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DocumentGrid />
        </div>
        <div className="space-y-4">
          <RecentDocuments />
          <SharedWithMe />
        </div>
      </div>
    </div>
  );
}