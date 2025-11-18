import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Calendar, TrendingUp, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hair.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Meet RAY'S Hair
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your digital hair care companion that tracks, analyzes, and optimizes your hair routine with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/onboarding">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 transition-opacity">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src={heroImage} 
                alt="Beautiful healthy hair" 
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Everything You Need for Healthier Hair
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            RAY'S Hair combines smart technology with personalized care to help you achieve your hair goals.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">AI Progress Tracker</h3>
              <p className="text-muted-foreground">
                Upload photos to track growth, texture, and scalp condition over time with AI analysis.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Timeline</h3>
              <p className="text-muted-foreground">
                Automatically generated weekly routine with wash days, treatments, and rest days.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Reminders</h3>
              <p className="text-muted-foreground">
                Never miss wash day or treatments with personalized notifications tailored to your routine.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Routine Optimization</h3>
              <p className="text-muted-foreground">
                Adapts your routine based on weather, humidity, and your hair's response to products.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary p-12 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Hair Care?
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of users who are achieving their hair goals with personalized, AI-powered guidance.
            </p>
            <Link to="/onboarding">
              <Button size="lg" variant="secondary" className="bg-background hover:bg-background/90">
                Get Started Free
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
