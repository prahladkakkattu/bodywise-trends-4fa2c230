
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { BodyMeasurement, BodyType } from "@/types";
import { determineBodyType } from "@/utils/bodyTypeUtils";
import { Ruler } from "lucide-react";

interface MeasurementFormProps {
  onBodyTypeChange: (bodyType: BodyType, measurements: BodyMeasurement) => void;
  isLoading: boolean;
}

const MeasurementForm = ({ onBodyTypeChange, isLoading }: MeasurementFormProps) => {
  const [measurements, setMeasurements] = useState<BodyMeasurement>({
    bust: 36,
    waist: 28,
    hips: 38,
    shoulders: 40,
    height: 65,
  });

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
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bust" className="text-sm font-medium">
                Bust (inches)
              </Label>
              <div className="flex items-center">
                <Input
                  id="bust"
                  type="number"
                  className="measurement-input"
                  value={measurements.bust}
                  onChange={(e) => handleChange("bust", Number(e.target.value))}
                  min={20}
                  max={60}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="waist" className="text-sm font-medium">
                Waist (inches)
              </Label>
              <div className="flex items-center">
                <Input
                  id="waist"
                  type="number"
                  className="measurement-input"
                  value={measurements.waist}
                  onChange={(e) => handleChange("waist", Number(e.target.value))}
                  min={20}
                  max={60}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="hips" className="text-sm font-medium">
                Hips (inches)
              </Label>
              <div className="flex items-center">
                <Input
                  id="hips"
                  type="number"
                  className="measurement-input"
                  value={measurements.hips}
                  onChange={(e) => handleChange("hips", Number(e.target.value))}
                  min={20}
                  max={60}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="shoulders" className="text-sm font-medium">
                Shoulders (inches)
              </Label>
              <div className="flex items-center">
                <Input
                  id="shoulders"
                  type="number"
                  className="measurement-input"
                  value={measurements.shoulders}
                  onChange={(e) => handleChange("shoulders", Number(e.target.value))}
                  min={20}
                  max={60}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="height" className="text-sm font-medium">
                Height (inches)
              </Label>
              <span className="text-sm text-muted-foreground">{measurements.height}"</span>
            </div>
            <Slider
              id="height"
              value={[measurements.height || 65]}
              min={48}
              max={78}
              step={1}
              onValueChange={(value) => handleChange("height", value[0])}
              className="py-4"
            />
          </div>
        </div>
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Analyzing..." : "Find My Style"}
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          Your measurements are only used to determine your body type and are never stored.
        </p>
      </form>
    </Card>
  );
};

export default MeasurementForm;
