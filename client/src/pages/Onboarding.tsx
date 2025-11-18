import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { BasicProfile } from "@/components/onboarding/BasicProfile";
import { LifestyleHabits } from "@/components/onboarding/LifestyleHabits";
import { ProductRoutine } from "@/components/onboarding/ProductRoutine";
import { ProgressTracking } from "@/components/onboarding/ProgressTracking";
import { getFormData, makeRequest } from "@/lib/utils";


const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const totalSteps = 4;

  const data = useRef<Record<string, unknown>>({});

  const handleNext = () => {
    if (currentStep < totalSteps) {
      const form = document.querySelector("form")
      const formData = getFormData(form)

      data.current = { ...data.current, ...formData };

      setCurrentStep(currentStep + 1);
    } else {
      makeRequest(
      '/api/survey/submit', {
        method: 'POST',
        data: data.current
        }
      )
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicProfile />;
      case 2:
        return <LifestyleHabits />;
      case 3:
        return <ProductRoutine />;
      case 4:
        return <ProgressTracking />;
      default:
        return <BasicProfile />;
    }
  };

  const stepTitles = [
    "Basic Profile",
    "Lifestyle & Habits",
    "Product Routine",
    "Progress Tracking"
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Let's Build Your Hair Profile
          </h1>
          <p className="text-muted-foreground">
            Step {currentStep} of {totalSteps}: {stepTitles[currentStep - 1]}
          </p>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="p-6 md:p-8 mb-6 shadow-card">
          <form onSubmit={(e) => e.preventDefault()}>
            {renderStep()}
          </form>
        </Card>

        <div className="flex justify-between gap-4">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="w-32"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            className="w-32 bg-gradient-primary hover:opacity-90"
          >
            {currentStep === totalSteps ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
