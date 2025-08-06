
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { BodyMeasurement, BodyType } from "@/types";
import { determineBodyType } from "@/utils/bodyTypeUtils";
import { Ruler } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MeasurementFormProps {
  onBodyTypeChange: (bodyType: BodyType, measurements: BodyMeasurement) => void;
  isLoading: boolean;
}

const MeasurementForm = ({ onBodyTypeChange, isLoading }: MeasurementFormProps) => {
  const [unit, setUnit] = useState<"inches" | "cm">("inches");
  const [measurements, setMeasurements] = useState<BodyMeasurement>({
    bust: 36,
    waist: 28,
    hips: 38,
    shoulders: 40,
    height: 65,
    weight: 140,
  });

  // Conversion functions
  const inchesToCm = (inches: number) => Math.round(inches * 2.54);
  const cmToInches = (cm: number) => Math.round(cm / 2.54);
  const lbsToKg = (lbs: number) => Math.round(lbs * 0.453592);
  const kgToLbs = (kg: number) => Math.round(kg / 0.453592);

  const getDisplayValue = (value: number, field: string) => {
    if (unit === "cm") {
      if (field === "weight") return lbsToKg(value);
      return inchesToCm(value);
    }
    return value;
  };

  const getStoredValue = (value: number, field: string) => {
    if (unit === "cm") {
      if (field === "weight") return kgToLbs(value);
      return cmToInches(value);
    }
    return value;
  };

  const handleChange = (name: keyof BodyMeasurement, value: number) => {
    setMeasurements(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bodyType = determineBodyType(measurements);
    onBodyTypeChange(bodyType, measurements);
  };

  return (
    <Card className="w-full max-w-xl p-6 shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Ruler className="h-5 w-5 text-brand-300" />
        <h2 className="text-2xl font-semibold">
          <span className="text-brand-600">Your</span> <span className="text-brand-300">Measurements</span>
        </h2>
      </div>
      
      <Tabs value={unit} onValueChange={(value) => setUnit(value as "inches" | "cm")} className="mb-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="inches">Inches</TabsTrigger>
          <TabsTrigger value="cm">CM</TabsTrigger>
        </TabsList>
      </Tabs>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bust" className="text-sm font-medium">
                Bust ({unit === "inches" ? "inches" : "cm"})
              </Label>
              <div className="flex items-center">
                <Input
                  id="bust"
                  type="number"
                  className="measurement-input"
                  value={getDisplayValue(measurements.bust, "bust")}
                  onChange={(e) => handleChange("bust", getStoredValue(Number(e.target.value), "bust"))}
                  min={unit === "inches" ? 20 : 51}
                  max={unit === "inches" ? 60 : 152}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="waist" className="text-sm font-medium">
                Waist ({unit === "inches" ? "inches" : "cm"})
              </Label>
              <div className="flex items-center">
                <Input
                  id="waist"
                  type="number"
                  className="measurement-input"
                  value={getDisplayValue(measurements.waist, "waist")}
                  onChange={(e) => handleChange("waist", getStoredValue(Number(e.target.value), "waist"))}
                  min={unit === "inches" ? 20 : 51}
                  max={unit === "inches" ? 60 : 152}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="hips" className="text-sm font-medium">
                Hips ({unit === "inches" ? "inches" : "cm"})
              </Label>
              <div className="flex items-center">
                <Input
                  id="hips"
                  type="number"
                  className="measurement-input"
                  value={getDisplayValue(measurements.hips, "hips")}
                  onChange={(e) => handleChange("hips", getStoredValue(Number(e.target.value), "hips"))}
                  min={unit === "inches" ? 20 : 51}
                  max={unit === "inches" ? 60 : 152}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="shoulders" className="text-sm font-medium">
                Shoulders ({unit === "inches" ? "inches" : "cm"})
              </Label>
              <div className="flex items-center">
                <Input
                  id="shoulders"
                  type="number"
                  className="measurement-input"
                  value={getDisplayValue(measurements.shoulders, "shoulders")}
                  onChange={(e) => handleChange("shoulders", getStoredValue(Number(e.target.value), "shoulders"))}
                  min={unit === "inches" ? 20 : 51}
                  max={unit === "inches" ? 60 : 152}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="weight" className="text-sm font-medium">
              Weight ({unit === "inches" ? "lbs" : "kg"})
            </Label>
            <div className="flex items-center">
              <Input
                id="weight"
                type="number"
                className="measurement-input"
                value={getDisplayValue(measurements.weight, "weight")}
                onChange={(e) => handleChange("weight", getStoredValue(Number(e.target.value), "weight"))}
                min={unit === "inches" ? 80 : 36}
                max={unit === "inches" ? 300 : 136}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="height" className="text-sm font-medium">
                Height ({unit === "inches" ? "inches" : "cm"})
              </Label>
              <span className="text-sm text-muted-foreground">
                {unit === "inches" ? `${measurements.height}"` : `${inchesToCm(measurements.height)}cm`}
              </span>
            </div>
            <Slider
              id="height"
              value={[unit === "inches" ? measurements.height : inchesToCm(measurements.height)]}
              min={unit === "inches" ? 48 : 122}
              max={unit === "inches" ? 78 : 198}
              step={1}
              onValueChange={(value) => handleChange("height", unit === "inches" ? value[0] : cmToInches(value[0]))}
              className="py-4"
            />
          </div>
        </div>
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Analyzing..." : "Find My Style"}
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          Your measurements are only used to determine your body shape and are never stored.
        </p>
      </form>
    </Card>
  );
};

export default MeasurementForm;
