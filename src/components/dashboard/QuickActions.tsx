import { Package, FileText, Truck, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  onClick?: () => void;
}

const QuickAction = ({ icon, label, description, onClick }: QuickActionProps) => (
  <button
    onClick={onClick}
    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-200 text-left group"
  >
    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
      {icon}
    </div>
    <div>
      <p className="font-medium text-foreground">{label}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </button>
);

export const QuickActions = () => {
  const actions = [
    { 
      icon: <Package className="w-5 h-5" />, 
      label: "Add Inventory", 
      description: "Record new stock" 
    },
    { 
      icon: <FileText className="w-5 h-5" />, 
      label: "Create Order", 
      description: "New purchase order" 
    },
    { 
      icon: <Truck className="w-5 h-5" />, 
      label: "Track Shipment", 
      description: "Delivery status" 
    },
    { 
      icon: <BarChart3 className="w-5 h-5" />, 
      label: "View Reports", 
      description: "Sales analytics" 
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action, index) => (
        <QuickAction key={index} {...action} />
      ))}
    </div>
  );
};
