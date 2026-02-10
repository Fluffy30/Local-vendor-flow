import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import { InsightCard } from "@/components/dashboard/InsightCard";
import { InventoryTable } from "@/components/dashboard/InventoryTable";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { 
  DollarSign, 
  Package, 
  ShoppingCart, 
  TrendingUp,
  Sparkles
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeItem="dashboard" />
      
      <main className="ml-64 p-8">
        <Header 
          title="Dashboard" 
          subtitle="Welcome back! Here's what's happening with your store today."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Today's Sales"
            value="UGX 2.4M"
            change={{ value: 12.5, label: "vs yesterday" }}
            icon={<DollarSign className="w-5 h-5 text-primary" />}
            iconBg="bg-primary/10"
            delay={0}
          />
          <StatCard
            title="Total Products"
            value="1,234"
            change={{ value: 3.2, label: "new this week" }}
            icon={<Package className="w-5 h-5 text-info" />}
            iconBg="bg-info/10"
            delay={100}
          />
          <StatCard
            title="Pending Orders"
            value="28"
            change={{ value: -5.1, label: "less than avg" }}
            icon={<ShoppingCart className="w-5 h-5 text-warning" />}
            iconBg="bg-warning/10"
            delay={200}
          />
          <StatCard
            title="Low Stock Items"
            value="12"
            icon={<TrendingUp className="w-5 h-5 text-destructive" />}
            iconBg="bg-destructive/10"
            delay={300}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Table */}
          <div className="col-span-2">
            <InventoryTable />
          </div>

          {/* Right Column - Insights & Actions */}
          <div className="space-y-6">
            {/* AI Insights */}
            <div className="bg-card rounded-xl border border-border shadow-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">AI Insights</h3>
              </div>
              <div className="space-y-4">
                <InsightCard
                  type="warning"
                  title="Low Stock Alert"
                  description="Premium Rice 5kg is running low. Based on sales velocity, reorder within 3 days."
                  action={{ label: "Create Order" }}
                  delay={0}
                />
                <InsightCard
                  type="opportunity"
                  title="High Demand Detected"
                  description="Tropical Juice sales up 35% this week. Consider increasing stock."
                  action={{ label: "View Trend" }}
                  delay={100}
                />
                <InsightCard
                  type="restock"
                  title="Auto-Reorder Suggestion"
                  description="3 items qualify for automatic reorder based on your rules."
                  action={{ label: "Review Items" }}
                  delay={200}
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-xl border border-border shadow-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <QuickActions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
