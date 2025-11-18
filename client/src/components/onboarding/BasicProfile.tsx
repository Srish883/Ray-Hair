import { useState, forwardRef, useImperativeHandle } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const BasicProfile = forwardRef((props, ref) => {
  // Controlled states
  const [hairType, setHairType] = useState("");
  const [porosity, setPorosity] = useState("");
  const [scalpType, setScalpType] = useState("");

  const [washFrequency, setWashFrequency] = useState("");
  const [climate, setClimate] = useState("");

  // --- expose getData() to parent ---
  useImperativeHandle(ref, () => ({
    getData: () => {
      // Validation (you can loosen these if needed)
      if (!hairType) throw new Error("Hair type is required");
      if (!porosity) throw new Error("Porosity is required");
      if (!scalpType) throw new Error("Scalp type is required");

      return {
        hairType,
        porosity,
        scalpType,
        washFrequency,
        climate,
      };
    },
  }));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground mb-6">Basic Profile</h2>

      {/* Hair Type */}
      <div>
        <Label className="text-base font-medium mb-3 block">
          What is your hair type?
        </Label>

        <RadioGroup
          name="hairType"
          value={hairType}
          onValueChange={setHairType}
          className="grid grid-cols-2 gap-3"
        >
          {["straight", "wavy", "curly", "coily"].map((type) => (
            <div
              key={type}
              className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:border-primary cursor-pointer"
            >
              <RadioGroupItem value={type} id={type} />
              <Label htmlFor={type} className="cursor-pointer flex-1 capitalize">
                {type}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Porosity */}
      <div>
        <Label className="text-base font-medium mb-3 block">
          What is your hair porosity?
        </Label>

        <RadioGroup
          name="porosity"
          value={porosity}
          onValueChange={setPorosity}
          className="grid grid-cols-2 gap-3"
        >
          {[
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
            { value: "unknown", label: "I don't know" },
          ].map((item) => (
            <div
              key={item.value}
              className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:border-primary cursor-pointer"
            >
              <RadioGroupItem value={item.value} id={item.value} />
              <Label htmlFor={item.value} className="cursor-pointer flex-1">
                {item.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Scalp Type */}
      <div>
        <Label className="text-base font-medium mb-3 block">What is your scalp type?</Label>

        <RadioGroup
          name="scalpType"
          value={scalpType}
          onValueChange={setScalpType}
          className="grid grid-cols-2 gap-3"
        >
          {["dry", "oily", "normal", "sensitive"].map((type) => (
            <div
              key={type}
              className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:border-primary cursor-pointer"
            >
              <RadioGroupItem value={type} id={type} />
              <Label htmlFor={type} className="cursor-pointer flex-1 capitalize">
                {type}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Wash Frequency */}
      <div>
        <Label className="text-base font-medium mb-3 block">
          How often do you wash your hair?
        </Label>

        <Select value={washFrequency} onValueChange={setWashFrequency}>
          <SelectTrigger>
            <SelectValue placeholder="Select frequency" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="twice">2–3 times per week</SelectItem>
            <SelectItem value="weekly">Once a week</SelectItem>
            <SelectItem value="biweekly">Every 2 weeks</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Climate */}
      <div>
        <Label className="text-base font-medium mb-3 block">
          What is your climate/environment like?
        </Label>

        <Select value={climate} onValueChange={setClimate}>
          <SelectTrigger>
            <SelectValue placeholder="Select climate" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="humid">Humid</SelectItem>
            <SelectItem value="dry">Dry</SelectItem>
            <SelectItem value="cold">Cold</SelectItem>
            <SelectItem value="hot">Hot</SelectItem>
            <SelectItem value="urban">Urban</SelectItem>
            <SelectItem value="coastal">Coastal</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
});
