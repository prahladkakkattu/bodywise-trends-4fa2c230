
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
    <div className="flex gap-8 max-w-6xl mx-auto">
      {/* Measurements Form */}
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

    {/* Body Shape Avatar */}
    <div className="flex-shrink-0 hidden lg:flex flex-col items-center justify-center bg-muted/30 rounded-xl p-8 min-h-[600px] min-w-[300px]">
      <div className="text-center mb-6">
        <h3 className="text-lg font-medium text-muted-foreground mb-2">Body Shape Visualization</h3>
        <p className="text-sm text-muted-foreground">Track your measurements</p>
      </div>
      
      <div className="relative">
        {/* Body silhouette */}
        <div className="w-48 h-80 relative">
          <svg viewBox="0 0 120 200" className="w-full h-full text-muted-foreground/40 fill-current">
            {/* Female body silhouette */}
            <path d="M60 10 
                     C55 10, 50 15, 50 25
                     C45 30, 40 35, 38 45
                     C35 55, 40 65, 45 70
                     C40 80, 35 90, 38 100
                     C35 110, 40 120, 45 130
                     C50 140, 55 150, 60 160
                     C60 170, 58 180, 56 190
                     L64 190
                     C62 180, 60 170, 60 160
                     C65 150, 70 140, 75 130
                     C80 120, 85 110, 82 100
                     C85 90, 80 80, 75 70
                     C80 65, 85 55, 82 45
                     C80 35, 75 30, 70 25
                     C70 15, 65 10, 60 10 Z"/>
          </svg>
          
          {/* Measurement indicators */}
          <div className="absolute top-12 left-0 right-0 flex justify-between items-center opacity-60">
            <div className="w-2 h-0.5 bg-brand-300"></div>
            <span className="text-xs text-brand-300 bg-background px-1 rounded">SHOULDERS</span>
            <div className="w-2 h-0.5 bg-brand-300"></div>
          </div>
          
          <div className="absolute top-20 left-0 right-0 flex justify-between items-center opacity-60">
            <div className="w-2 h-0.5 bg-brand-300"></div>
            <span className="text-xs text-brand-300 bg-background px-1 rounded">BUST</span>
            <div className="w-2 h-0.5 bg-brand-300"></div>
          </div>
          
          <div className="absolute top-32 left-0 right-0 flex justify-between items-center opacity-60">
            <div className="w-2 h-0.5 bg-brand-300"></div>
            <span className="text-xs text-brand-300 bg-background px-1 rounded">WAIST</span>
            <div className="w-2 h-0.5 bg-brand-300"></div>
          </div>
          
          <div className="absolute top-44 left-0 right-0 flex justify-between items-center opacity-60">
            <div className="w-2 h-0.5 bg-brand-300"></div>
            <span className="text-xs text-brand-300 bg-background px-1 rounded">HIPS</span>
            <div className="w-2 h-0.5 bg-brand-300"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          Enter your measurements to see your body shape analysis
        </p>
      </div>
    </div>
  </div>
  );
};

export default MeasurementForm;
