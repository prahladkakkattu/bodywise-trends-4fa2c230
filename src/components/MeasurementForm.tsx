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
import bodyAvatarImage from "@/assets/body-measurement-avatar.png";
import avatarModel3D from "@/assets/3d-avatar-model.png";
import RotatableAvatar3D from "./RotatableAvatar3D";
interface MeasurementFormProps {
  onBodyTypeChange: (bodyType: BodyType, measurements: BodyMeasurement) => void;
  isLoading: boolean;
}
const MeasurementForm = ({
  onBodyTypeChange,
  isLoading
}: MeasurementFormProps) => {
  const [unit, setUnit] = useState<"inches" | "cm">("inches");
  const [activeMeasurement, setActiveMeasurement] = useState<keyof BodyMeasurement | null>(null);
  const [showAvatar, setShowAvatar] = useState(false);
  const [measurements, setMeasurements] = useState<BodyMeasurement>({
    bust: 36,
    waist: 28,
    hips: 38,
    shoulders: 40,
    height: 65,
    weight: 140
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
  return <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-6xl w-full">
      {/* Measurement Form */}
      <Card className="flex-1 max-w-none lg:max-w-md p-4 lg:p-6 shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <Ruler className="h-5 w-5 text-brand-300" />
          <h2 className="text-2xl font-semibold">
            <span className="text-brand-600">Your</span> <span className="text-brand-300">Measurements</span>
          </h2>
        </div>
      
      <Tabs value={unit} onValueChange={value => setUnit(value as "inches" | "cm")} className="mb-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="inches">Inches</TabsTrigger>
          <TabsTrigger value="cm">CM</TabsTrigger>
        </TabsList>
      </Tabs>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="bust" className="text-sm font-medium">
                  Bust ({unit === "inches" ? "inches" : "cm"})
                </Label>
                <span className="text-sm text-muted-foreground">
                  {getDisplayValue(measurements.bust, "bust")}{unit === "inches" ? '"' : 'cm'}
                </span>
              </div>
              <Slider id="bust" value={[getDisplayValue(measurements.bust, "bust")]} min={unit === "inches" ? 20 : 51} max={unit === "inches" ? 60 : 152} step={0.5} onValueChange={value => handleChange("bust", getStoredValue(value[0], "bust"))} className="py-4" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="waist" className="text-sm font-medium">
                  Waist ({unit === "inches" ? "inches" : "cm"})
                </Label>
                <span className="text-sm text-muted-foreground">
                  {getDisplayValue(measurements.waist, "waist")}{unit === "inches" ? '"' : 'cm'}
                </span>
              </div>
              <Slider id="waist" value={[getDisplayValue(measurements.waist, "waist")]} min={unit === "inches" ? 20 : 51} max={unit === "inches" ? 60 : 152} step={0.5} onValueChange={value => handleChange("waist", getStoredValue(value[0], "waist"))} className="py-4" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="hips" className="text-sm font-medium">
                  Hips ({unit === "inches" ? "inches" : "cm"})
                </Label>
                <span className="text-sm text-muted-foreground">
                  {getDisplayValue(measurements.hips, "hips")}{unit === "inches" ? '"' : 'cm'}
                </span>
              </div>
              <Slider id="hips" value={[getDisplayValue(measurements.hips, "hips")]} min={unit === "inches" ? 20 : 51} max={unit === "inches" ? 60 : 152} step={0.5} onValueChange={value => handleChange("hips", getStoredValue(value[0], "hips"))} className="py-4" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="shoulders" className="text-sm font-medium">
                  Shoulders ({unit === "inches" ? "inches" : "cm"})
                </Label>
                <span className="text-sm text-muted-foreground">
                  {getDisplayValue(measurements.shoulders, "shoulders")}{unit === "inches" ? '"' : 'cm'}
                </span>
              </div>
              <Slider id="shoulders" value={[getDisplayValue(measurements.shoulders, "shoulders")]} min={unit === "inches" ? 20 : 51} max={unit === "inches" ? 60 : 152} step={0.5} onValueChange={value => handleChange("shoulders", getStoredValue(value[0], "shoulders"))} className="py-4" />
            </div>
            
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="weight" className="text-sm font-medium">
                  Weight ({unit === "inches" ? "lbs" : "kg"})
                </Label>
                <span className="text-sm text-muted-foreground font-semibold">
                  {getDisplayValue(measurements.weight, "weight")}{unit === "inches" ? 'lbs' : 'kg'}
                </span>
              </div>
              <Slider id="weight" value={[getDisplayValue(measurements.weight, "weight")]} min={unit === "inches" ? 80 : 36} max={unit === "inches" ? 300 : 136} step={1} onValueChange={value => handleChange("weight", getStoredValue(value[0], "weight"))} className="py-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="height" className="text-sm font-medium">
                  Height ({unit === "inches" ? "inches" : "cm"})
                </Label>
                <span className="text-sm text-muted-foreground font-semibold">
                  {unit === "inches" ? `${measurements.height}"` : `${inchesToCm(measurements.height)}cm`}
                </span>
              </div>
              <Slider id="height" value={[unit === "inches" ? measurements.height : inchesToCm(measurements.height)]} min={unit === "inches" ? 48 : 122} max={unit === "inches" ? 78 : 198} step={1} onValueChange={value => handleChange("height", unit === "inches" ? value[0] : cmToInches(value[0]))} className="py-2" />
            </div>
          </div>
        </div>
        
        {!showAvatar ? (
          <Button 
            type="button" 
            className="w-full" 
            onClick={() => setShowAvatar(true)}
          >
            Create Your 3D Avatar
          </Button>
        ) : (
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Analyzing..." : "Find My Style"}
          </Button>
        )}
        
        <p className="text-xs text-center text-muted-foreground">
          Your measurements are only used to determine your body shape and are never stored.
        </p>
      </form>
      </Card>

      {/* 3D Avatar Visualization */}
      <div className="flex-1 max-w-none lg:max-w-lg">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-brand-600 mb-2">
            {showAvatar ? "Your 3D Avatar" : "Preview"}
        </h3>
          <p className="text-sm text-muted-foreground">
            {showAvatar ? "Based on your measurements" : "Adjust measurements to see changes"}
        </p>
        </div>
        {showAvatar ? (
          <div className="flex justify-center items-center bg-gradient-to-b from-muted/20 to-background rounded-lg p-6">
            <img 
              src={avatarModel3D} 
              alt="3D Avatar Model" 
              className="max-h-[500px] w-auto object-contain"
            />
          </div>
        ) : (
          <div className="flex gap-4">
            <div className="h-64 lg:h-96 flex-1">
              <RotatableAvatar3D measurements={measurements} activeMeasurement={activeMeasurement} />
            </div>
            
            {/* Measurement Legend - Right Side */}
            <div className="flex flex-col justify-center space-y-3 text-xs min-w-[140px]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-0.5 bg-red-400 rounded"></div>
                <span>Shoulders: {getDisplayValue(measurements.shoulders, "shoulders")}{unit === "inches" ? '"' : 'cm'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-0.5 bg-teal-400 rounded"></div>
                <span>Bust: {getDisplayValue(measurements.bust, "bust")}{unit === "inches" ? '"' : 'cm'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-0.5 bg-blue-400 rounded"></div>
                <span>Waist: {getDisplayValue(measurements.waist, "waist")}{unit === "inches" ? '"' : 'cm'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-0.5 bg-green-400 rounded"></div>
                <span>Hips: {getDisplayValue(measurements.hips, "hips")}{unit === "inches" ? '"' : 'cm'}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>;
};
export default MeasurementForm;