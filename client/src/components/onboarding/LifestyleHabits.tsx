import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const LifestyleHabits = () => {
  const hairGoalsList = [
    "Growth",
    "Volume",
    "Strength",
    "Shine",
    "Manageability",
    "Scalp Health",
  ];

  // Controlled component state
  const [heatToolUsage, setHeatToolUsage] = useState("rarely");
  const [waterType, setWaterType] = useState("not-sure");
  const [trimFrequency, setTrimFrequency] = useState("quarterly");
  const [hairGoals, setHairGoals] = useState<string[]>([]);
  const [protectiveStyles, setProtectiveStyles] = useState("sometimes");

  // Toggle checkbox
  const toggleGoal = (goal: string) => {
    setHairGoals((prev) =>
      prev.includes(goal)
        ? prev.filter((g) => g !== goal)
        : [...prev, goal]
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground mb-6">Lifestyle & Habits</h2>

      {/* Heat Tool Usage */}
      <div>
        <Label className="text-base font-medium mb-3 block">
          How often do you use heat tools?
        </Label>

        <Select value={heatToolUsage} onValueChange={setHeatToolUsage}>
          <SelectTrigger>
            <SelectValue placeholder="Select frequency" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Few times a week</SelectItem>
            <SelectItem value="rarely">Rarely</SelectItem>
            <SelectItem value="never">Never</SelectItem>
          </SelectContent>
        </Select>

        <input type="hidden" name="heatToolUsage" value={heatToolUsage} />
      </div>

      {/* Water Type */}
      <div>
        <Label className="text-base font-medium mb-3 block">
          What type of water do you wash with?
        </Label>

        <RadioGroup
          name="waterType"
          value={waterType}
          onValueChange={setWaterType}
          className="grid grid-cols-3 gap-3"
        >
          {["hard", "soft", "not-sure"].map((value) => (
            <div
              key={value}
              className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:border-primary cursor-pointer"
            >
              <RadioGroupItem value={value} id={value} />
              <Label htmlFor={value} className="cursor-pointer capitalize">
                {value.replace("-", " ")}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <input type="hidden" name="waterType" value={waterType} />
      </div>

      {/* Trim Frequency */}
      <div>
        <Label className="text-base font-medium mb-3 block">
          How often do you trim your hair?
        </Label>

        <Select value={trimFrequency} onValueChange={setTrimFrequency}>
          <SelectTrigger>
            <SelectValue placeholder="Choose..." />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Every 3 months</SelectItem>
            <SelectItem value="biannual">Every 6 months</SelectItem>
            <SelectItem value="rarely">Rarely</SelectItem>
          </SelectContent>
        </Select>

        <input type="hidden" name="trimFrequency" value={trimFrequency} />
      </div>

      {/* Hair Goals */}
      <div>
        <Label className="text-base font-medium mb-3 block">
          What are your main hair goals?
        </Label>

        <div className="grid grid-cols-2 gap-3">
          {hairGoalsList.map((goal) => (
            <div
              key={goal}
              className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:border-primary cursor-pointer"
            >
              <Checkbox
                checked={hairGoals.includes(goal)}
                onCheckedChange={() => toggleGoal(goal)}
                id={goal}
              />
              <Label htmlFor={goal} className="cursor-pointer flex-1">
                {goal}
              </Label>
            </div>
          ))}
        </div>

        <input type="hidden" name="hairGoals" value={JSON.stringify(hairGoals)} />
      </div>

      {/* Protective Styles */}
      <div>
        <Label className="text-base font-medium mb-3 block">
          Do you wear protective styles?
        </Label>

        <RadioGroup
          name="protectiveStyles"
          value={protectiveStyles}
          onValueChange={setProtectiveStyles}
          className="grid grid-cols-3 gap-3"
        >
          {["yes", "sometimes", "no"].map((value) => (
            <div
              key={value}
              className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:border-primary cursor-pointer"
            >
              <RadioGroupItem value={value} id={`ps-${value}`} />
              <Label htmlFor={`ps-${value}`} className="cursor-pointer capitalize">
                {value}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <input type="hidden" name="protectiveStyles" value={protectiveStyles} />
      </div>
    </div>
  );
};
