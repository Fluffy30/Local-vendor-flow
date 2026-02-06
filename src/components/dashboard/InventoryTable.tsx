import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  reorderLevel: number;
  price: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

const mockProducts: Product[] = [
  { id: "1", name: "Tropical Juice 500ml", sku: "TJ-500", category: "Beverages", stock: 145, reorderLevel: 50, price: 2500, status: "in-stock" },
  { id: "2", name: "Premium Rice 5kg", sku: "PR-5KG", category: "Grains", stock: 23, reorderLevel: 30, price: 25000, status: "low-stock" },
  { id: "3", name: "Cooking Oil 1L", sku: "CO-1L", category: "Cooking", stock: 0, reorderLevel: 20, price: 8500, status: "out-of-stock" },
  { id: "4", name: "Sugar 1kg", sku: "SG-1KG", category: "Baking", stock: 67, reorderLevel: 40, price: 4500, status: "in-stock" },
  { id: "5", name: "Bread Flour 2kg", sku: "BF-2KG", category: "Baking", stock: 12, reorderLevel: 25, price: 7500, status: "low-stock" },
];

const statusConfig = {
  "in-stock": { label: "In Stock", className: "bg-success/10 text-success border-success/20" },
  "low-stock": { label: "Low Stock", className: "bg-warning/10 text-warning border-warning/20" },
  "out-of-stock": { label: "Out of Stock", className: "bg-destructive/10 text-destructive border-destructive/20" },
};

export const InventoryTable = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden animate-fade-in">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Inventory Overview</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {mockProducts.length} products · {mockProducts.filter(p => p.status === "low-stock").length} need attention
            </p>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowUpDown className="w-4 h-4" />
            Sort
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                Product
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                Category
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                Stock
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                Price
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                Status
              </th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockProducts.map((product, index) => {
              const status = statusConfig[product.status];
              return (
                <tr 
                  key={product.id} 
                  className="hover:bg-muted/30 transition-colors animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-foreground">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.sku}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{product.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className={cn(
                        "font-medium",
                        product.stock <= product.reorderLevel ? "text-warning" : "text-foreground"
                      )}>
                        {product.stock} units
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Reorder at {product.reorderLevel}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-foreground">
                      {formatCurrency(product.price)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge 
                      variant="outline" 
                      className={cn("font-medium", status.className)}
                    >
                      {status.label}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
