import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Calendar,
  FileText,
  FolderKanban,
  LayoutDashboard,
  Moon,
  Settings,
  Sun,
  Zap,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

interface MainNavProps {
  currentPage: string;
  onNavigate: (page: "dashboard" | "calendar" | "projects" | "documents" | "analytics" | "settings") => void;
}

export function MainNav({ currentPage, onNavigate }: MainNavProps) {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-6 flex-1">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Bolt Workspace</span>
          </div>
          <nav className="flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate(item.id as any)}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
}