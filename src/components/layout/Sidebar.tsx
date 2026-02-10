import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  Settings,
  Sparkles,
  Bell
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, badge, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
      active 
        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" 
        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    )}
  >
    {icon}
    <span className="flex-1 text-left">{label}</span>
    {badge !== undefined && badge > 0 && (
      <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-semibold rounded-full bg-warning text-warning-foreground">
        {badge}
      </span>
    )}
  </button>
);

interface SidebarProps {
  activeItem?: string;
  onNavigate?: (item: string) => void;
}

export const Sidebar = ({ activeItem = "dashboard", onNavigate }: SidebarProps) => {
  const navItems = [
    { id: "dashboard", icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard" },
    { id: "inventory", icon: <Package className="w-5 h-5" />, label: "Inventory", badge: 3 },
    { id: "orders", icon: <ShoppingCart className="w-5 h-5" />, label: "Orders" },
    { id: "analytics", icon: <TrendingUp className="w-5 h-5" />, label: "Analytics" },
    { id: "suppliers", icon: <Users className="w-5 h-5" />, label: "Suppliers" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar flex flex-col border-r border-sidebar-border">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sidebar-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-accent-foreground">LocalVendor</h1>
            <p className="text-xs text-sidebar-foreground opacity-70">Flow</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.id}
            badge={item.badge}
            onClick={() => onNavigate?.(item.id)}
          />
        ))}
      </nav>

      {/* AI Insights Promo */}
      <div className="p-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-sidebar-primary/20 to-sidebar-primary/5 border border-sidebar-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-sidebar-primary" />
            <span className="text-sm font-semibold text-sidebar-accent-foreground">AI Insights</span>
          </div>
          <p className="text-xs text-sidebar-foreground mb-3">
            Get smart restock suggestions based on your sales patterns.
          </p>
          <button className="w-full py-2 px-3 text-xs font-medium rounded-lg bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 transition-colors">
            View Suggestions
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="p-4 border-t border-sidebar-border space-y-1">
        <NavItem 
          icon={<Bell className="w-5 h-5" />} 
          label="Notifications" 
          badge={5}
        />
        <NavItem 
          icon={<Settings className="w-5 h-5" />} 
          label="Settings" 
        />
      </div>
    </aside>
  );
};
