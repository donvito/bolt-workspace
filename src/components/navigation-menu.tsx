import {
  NavigationMenu as Nav,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Calendar, LayoutGrid, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

interface NavigationMenuProps {
  onNavigate: (section: string) => void;
}

export function NavigationMenu({ onNavigate }: NavigationMenuProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Nav>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={navigationMenuTriggerStyle()}
                  onClick={() => onNavigate("calendar")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={navigationMenuTriggerStyle()}
                  onClick={() => onNavigate("components")}
                >
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  Components
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </Nav>

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
      </div>
    </div>
  );
}