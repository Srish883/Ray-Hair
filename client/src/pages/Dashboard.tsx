import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Droplet, Sparkles, TrendingUp } from "lucide-react";
import { WeeklyTimeline } from "@/components/dashboard/WeeklyTimeline";
import { HairProfile } from "@/components/dashboard/HairProfile";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">RAY'S Hair</h1>
              <p className="text-sm text-muted-foreground">Your Hair Care Dashboard</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Sparkles className="w-4 h-4" />
              AI Insights
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Next Wash Day</p>
                <p className="text-lg font-semibold text-foreground">Tomorrow</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Droplet className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Hydration Level</p>
                <p className="text-lg font-semibold text-foreground">Good</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Routine Streak</p>
                <p className="text-lg font-semibold text-foreground">14 days</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Hair Health</p>
                <p className="text-lg font-semibold text-foreground">Improving</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weekly Timeline */}
          <div className="lg:col-span-2">
            <WeeklyTimeline />
          </div>

          {/* Hair Profile Sidebar */}
          <div>
            <HairProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
