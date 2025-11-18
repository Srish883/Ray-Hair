import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

export const HairProfile = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Hair Profile</h2>
          <Button variant="ghost" size="sm">
            <Edit className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Hair Type</p>
            <Badge variant="secondary">Wavy</Badge>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Porosity</p>
            <Badge variant="secondary">Medium</Badge>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Scalp Type</p>
            <Badge variant="secondary">Normal</Badge>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Climate</p>
            <Badge variant="secondary">Humid</Badge>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Hair Goals</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Growth</Badge>
              <Badge variant="outline">Volume</Badge>
              <Badge variant="outline">Shine</Badge>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-card">
        <h3 className="font-semibold text-foreground mb-3">Current Products</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
            <div>
              <p className="font-medium text-foreground">RAY's Hydrating Shampoo</p>
              <p className="text-muted-foreground">2x per week</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
            <div>
              <p className="font-medium text-foreground">Deep Moisture Mask</p>
              <p className="text-muted-foreground">Weekly</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
            <div>
              <p className="font-medium text-foreground">RAY's Serum</p>
              <p className="text-muted-foreground">Daily on ends</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-card bg-gradient-hero">
        <h3 className="font-semibold text-foreground mb-2">AI Insight</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Your hair health has improved by 23% this month! Keep up the consistency with your routine.
        </p>
        <Button variant="outline" size="sm" className="w-full">
          View Full Analysis
        </Button>
      </Card>
    </div>
  );
};
