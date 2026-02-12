import { cn } from "@/lib/utils";
import { AlertTriangle, TrendingUp, Package, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

type InsightType = "warning" | "opportunity" | "restock" | "trending";

interface InsightCardProps {
  type: InsightType;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick?: () => void;
  };
  delay?: number;
}

const insightConfig: Record<InsightType, { 
  icon: ''; 
  borderColor: string;
  iconBg: string;
}> = {
  warning: {
    icon: '',
    borderColor: "border-l-warning",
    iconBg: "bg-warning/10",
  },
  opportunity: {
    icon: '',
    borderColor: "border-l-success",
    iconBg: "bg-success/10",
  },
  restock: {
    icon: '',
    borderColor: "border-l-info",
    iconBg: "bg-info/10",
  },
  trending: {
    icon: '',
    borderColor: "border-l-primary",
    iconBg: "bg-primary/10",
  },
};

export const InsightCard = ({ 
  type, 
  title, 
  description, 
  action,
  delay = 0 
}: InsightCardProps) => {
  const config = insightConfig[type];

  return (
    <div 
      className={cn(
        "insight-card border border-border animate-slide-in-right",
        config.borderColor
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex gap-4">
        <div className={cn("p-2.5 rounded-lg shrink-0", config.iconBg)}>
          {config.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground text-sm mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          {action && (
            <Button 
              variant="subtle" 
              size="sm" 
              className="mt-3"
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
