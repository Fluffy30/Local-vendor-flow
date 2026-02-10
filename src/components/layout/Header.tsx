import { Search, Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between pb-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            className="h-10 w-64 pl-10 pr-4 rounded-lg border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
          />
        </div>

        {/* Notifications */}
        <Button variant="outline" size="icon" className="relative">
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-warning text-warning-foreground text-[10px] font-bold flex items-center justify-center">
            3
          </span>
        </Button>

        {/* Add Product */}
        <Button variant="hero" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>
    </header>
  );
};
