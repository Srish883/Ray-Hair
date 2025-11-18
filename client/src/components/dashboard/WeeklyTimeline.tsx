import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplet, Sparkles, Wind, Sun } from "lucide-react";

const weekData = [
  {
    day: "Monday",
    date: "Nov 11",
    routine: "Wash Day",
    products: ["RAY's Hydrating Shampoo", "Deep Moisture Mask"],
    notes: "Massage scalp for 2 mins",
    icon: Droplet,
    color: "primary"
  },
  {
    day: "Tuesday",
    date: "Nov 12",
    routine: "Rest Day",
    products: ["RAY's Serum"],
    notes: "Apply to ends only",
    icon: Sun,
    color: "secondary"
  },
  {
    day: "Wednesday",
    date: "Nov 13",
    routine: "Treatment",
    products: ["Scalp Exfoliation"],
    notes: "Track oil level & scalp comfort",
    icon: Sparkles,
    color: "accent"
  },
  {
    day: "Thursday",
    date: "Nov 14",
    routine: "Moisture Boost",
    products: ["Leave-in Spray"],
    notes: "Take photo for progress",
    icon: Droplet,
    color: "primary"
  },
  {
    day: "Friday",
    date: "Nov 15",
    routine: "Style",
    products: ["Heat Protectant", "RAY's Styling Cream"],
    notes: "",
    icon: Wind,
    color: "secondary"
  },
  {
    day: "Saturday",
    date: "Nov 16",
    routine: "Rest",
    products: [],
    notes: "Auto reminder for hydration check",
    icon: Sun,
    color: "muted"
  },
  {
    day: "Sunday",
    date: "Nov 17",
    routine: "Nourish",
    products: ["RAY's Hair Oil"],
    notes: "Overnight treatment",
    icon: Sparkles,
    color: "accent"
  }
];

export const WeeklyTimeline = () => {
  return (
    <Card className="p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Weekly Timeline</h2>
        <Badge variant="secondary">This Week</Badge>
      </div>

      <div className="space-y-4">
        {weekData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index}
              className="flex gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">{item.day}</h3>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                  <Badge variant="outline" className="ml-auto">
                    {item.routine}
                  </Badge>
                </div>
                
                {item.products.length > 0 && (
                  <div className="text-sm text-muted-foreground mb-1">
                    {item.products.join(" + ")}
                  </div>
                )}
                
                {item.notes && (
                  <p className="text-sm text-muted-foreground italic">
                    {item.notes}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
