import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: {
    value: number;
    label: string;
  };
  icon: React.ReactNode;
  iconBg?: string;
  delay?: number;
}

export const StatCard = ({ 
  title, 
  value, 
  change, 
  icon, 
  iconBg = "bg-primary/10",
  delay = 0 
}: StatCardProps) => {
  const isPositive = change && change.value >= 0;

  return (
    <div 
      className="stat-card border border-border animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-xl", iconBg)}>
          {icon}
        </div>
        {change && (
          <div className={cn(
            "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
            isPositive 
              ? "text-success bg-success/10" 
              : "text-destructive bg-destructive/10"
          )}>
            {isPositive ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            <span>{Math.abs(change.value)}%</span>
          </div>
        )}
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        {change && (
          <p className="text-xs text-muted-foreground mt-1">{change.label}</p>
        )}
      </div>
    </div>
  );
};
