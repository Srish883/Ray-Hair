import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const ProductRoutine = () => {
  // -----------------------------
  // Controlled Input State
  // -----------------------------
  const [shampoo, setShampoo] = useState("");
  const [conditioner, setConditioner] = useState("");
  const [leaveIns, setLeaveIns] = useState("");
  const [buildUpDryness, setBuildUpDryness] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground mb-6">
        Product Routine
      </h2>

      {/* Shampoo */}
      <div>
        <Label htmlFor="shampoo" className="text-base font-medium mb-2 block">
          What shampoo do you currently use?
        </Label>
        <Input
          id="shampoo"
          name="shampoo"
          placeholder="e.g., RAY's Hydrating Shampoo"
          className="w-full"
          value={shampoo}
          onChange={(e) => setShampoo(e.target.value)}
        />

        <input type="hidden" name="shampoo" value={shampoo} />
      </div>

      {/* Conditioner */}
      <div>
        <Label
          htmlFor="conditioner"
          className="text-base font-medium mb-2 block"
        >
          What conditioner or mask do you use?
        </Label>
        <Input
          id="conditioner"
          name="conditioner"
          placeholder="e.g., Deep Moisture Mask"
          className="w-full"
          value={conditioner}
          onChange={(e) => setConditioner(e.target.value)}
        />

        <input type="hidden" name="conditioner" value={conditioner} />
      </div>

      {/* Leave-ins */}
      <div>
        <Label
          htmlFor="leaveIns"
          className="text-base font-medium mb-2 block"
        >
          Do you use leave-ins or oils? Which ones?
        </Label>
        <Textarea
          id="leaveIns"
          name="leaveIns"
          placeholder="List any leave-in conditioners, serums, or oils you use"
          className="w-full min-h-[100px]"
          value={leaveIns}
          onChange={(e) => setLeaveIns(e.target.value)}
        />

        <input type="hidden" name="leaveIns" value={leaveIns} />
      </div>

      {/* Build-up or Dryness */}
      <div>
        <Label className="text-base font-medium mb-3 block">
          Do you notice buildup or dryness between washes?
        </Label>

        <RadioGroup
          name="buildUpDryness"
          value={buildUpDryness}
          onValueChange={setBuildUpDryness}
          className="space-y-3"
        >
          {[
            { value: "buildup", label: "Yes, product buildup" },
            { value: "dryness", label: "Yes, dryness" },
            { value: "both", label: "Both" },
            { value: "neither", label: "Neither" },
          ].map((item) => (
            <div
              key={item.value}
              className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:border-primary transition-colors cursor-pointer"
            >
              <RadioGroupItem value={item.value} id={item.value} />
              <Label htmlFor={item.value} className="cursor-pointer flex-1">
                {item.label}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <input type="hidden" name="buildUpDryness" value={buildUpDryness} />
      </div>

      {/* Additional Notes */}
      <div>
        <Label
          htmlFor="notes"
          className="text-base font-medium mb-2 block"
        >
          Any other product notes or concerns?
        </Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Share any additional information about your products or routine"
          className="w-full min-h-[100px]"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <input type="hidden" name="notes" value={notes} />
      </div>
    </div>
  );
};
