import { MainNav } from "@/components/main-nav";
import { DashboardPage } from "@/components/pages/dashboard";
import { ProjectsPage } from "@/components/pages/projects";
import { DocumentsPage } from "@/components/pages/documents";
import { AnalyticsPage } from "@/components/pages/analytics";
import { SettingsPage } from "@/components/pages/settings";
import { CalendarPage } from "@/components/pages/calendar";
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ChatProvider } from "@/components/providers/chat-provider";

type Page = "dashboard" | "calendar" | "projects" | "documents" | "analytics" | "settings";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />;
      case "calendar":
        return <CalendarPage />;
      case "projects":
        return <ProjectsPage />;
      case "documents":
        return <DocumentsPage />;
      case "analytics":
        return <AnalyticsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ChatProvider>
        <div className="min-h-screen bg-background">
          <MainNav currentPage={currentPage} onNavigate={setCurrentPage} />
          <main className="container mx-auto py-4 px-2">
            {renderPage()}
          </main>
        </div>
        <Toaster />
      </ChatProvider>
    </ThemeProvider>
  );
}