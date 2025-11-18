import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export const ProgressTracking = () => {
  const [satisfaction, setSatisfaction] = useState([7]);
  const [reminders, setReminders] = useState(true);
  const [dryingMethod, setDryingMethod] = useState("air");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Progress Tracking</h2>

      {/* Satisfaction Slider */}
      <div className="space-y-3">
        <Label className="text-base font-medium">
          How satisfied are you with your current routine?
        </Label>

        <Slider
          name="satisfaction"
          value={satisfaction}
          onValueChange={setSatisfaction}
          max={10}
          min={1}
          step={1}
        />
        {/* Hidden field for form submission */}
        <input type="hidden" name="satisfaction" value={satisfaction[0]} />

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Not satisfied</span>
          <span className="font-semibold text-foreground">{satisfaction[0]}/10</span>
          <span>Very satisfied</span>
        </div>
      </div>

      {/* Smart Reminders */}
      <div className="flex items-center justify-between border border-border rounded-lg p-4">
        <div>
          <Label className="text-base font-medium">Smart Reminders</Label>
          <p className="text-sm text-muted-foreground">
            Get notifications for wash days and treatments
          </p>
        </div>

        <Switch
          checked={reminders}
          onCheckedChange={setReminders}
          name="reminders"
        />

        {/* Hidden field for boolean */}
        <input type="hidden" name="reminders" value={reminders ? "true" : "false"} />
      </div>

      {/* Drying Method */}
      <div className="space-y-3">
        <Label className="text-base font-medium">How do you usually dry your hair?</Label>

        <RadioGroup
          name="drying_method"
          value={dryingMethod}
          onValueChange={setDryingMethod}
          className="space-y-3"
        >
          {[
            { id: "air", label: "Air dry" },
            { id: "towel", label: "Towel dry" },
            { id: "blowdryer", label: "Blow dryer" },
            { id: "diffuser", label: "Diffuser" },
          ].map((method) => (
            <div
              key={method.id}
              className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:border-primary transition cursor-pointer"
            >
              <RadioGroupItem id={method.id} value={method.id} />
              <Label htmlFor={method.id} className="cursor-pointer flex-1">
                {method.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Photo Upload */}
      <div className="space-y-3">
        <Label className="text-base font-medium">Upload a current photo (optional)</Label>

        <label className="block">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoUpload}
            name="progress_photo"
          />

          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
            {!photoPreview ? (
              <>
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-2">
                  Click to upload or drag and drop
                </p>
              </>
            ) : (
              <img
                src={photoPreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg mx-auto mb-3"
              />
            )}
            <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
          </div>
        </label>
      </div>
    </div>
  );
};
