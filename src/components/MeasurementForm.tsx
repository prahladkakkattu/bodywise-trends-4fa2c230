import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { BodyMeasurement, BodyType } from "@/types";
import { determineBodyType, getBodyTypeDescription } from "@/utils/bodyTypeUtils";
import { Ruler, CheckCircle, XCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bodyAvatarImage from "@/assets/body-measurement-avatar.png";
import avatarModel3D from "@/assets/3d-avatar-model.png";
import RotatableAvatar3D from "./RotatableAvatar3D";
import QuickMeasurementGuide from "./QuickMeasurementGuide";
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
  const [isCreatingAvatar, setIsCreatingAvatar] = useState(false);
  const [showAvatarImage, setShowAvatarImage] = useState(false);
  const [showMeasurementLegend, setShowMeasurementLegend] = useState(false);
  const [showBodyTypeInfo, setShowBodyTypeInfo] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentBodyType, setCurrentBodyType] = useState<BodyType | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState("/lovable-uploads/b00b9e96-74df-451c-9fb0-378ee5245709.png");
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [measurements, setMeasurements] = useState<BodyMeasurement>({
    bust: 36,
    waist: 28,
    hips: 38,
    shoulders: 40,
    height: 65,
    weight: 140
  });

  const avatarOptions = [{
    src: "/lovable-uploads/b00b9e96-74df-451c-9fb0-378ee5245709.png",
    label: "Standard"
  }, {
    src: "/lovable-uploads/2872d137-9eeb-4a2b-aea9-e9882bf555f8.png",
    label: "Curvy"
  }, {
    src: "/lovable-uploads/afcc7e0c-90ec-47a7-919d-32633298ee26.png",
    label: "Petite"
  }, {
    src: "/lovable-uploads/8643f61b-2202-4f5d-a1f9-7eae40132ed3.png",
    label: "Athletic"
  }, {
    src: "/lovable-uploads/23f742dd-83aa-4a29-bd7a-5f6a14ccddfa.png",
    label: "Tall"
  }];

  // Calculate body type when avatar is shown
  useEffect(() => {
    if (showAvatar) {
      const bodyType = determineBodyType(measurements);
      setCurrentBodyType(bodyType);
    }
  }, [showAvatar, measurements]);

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

  const handleAvatarFeedback = (isCorrect: boolean) => {
    if (!isCorrect) {
      setShowAlternatives(true);
    }
  };

  const selectAvatar = (avatarSrc: string) => {
    setSelectedAvatar(avatarSrc);
    setShowAlternatives(false);
  };

  const handleCancel = () => {
    setShowAlternatives(false);
  };

  const handleCreateAvatar = () => {
    setIsCreatingAvatar(true);
    // Reset animation states
    setShowAvatarImage(false);
    setShowMeasurementLegend(false);
    setShowBodyTypeInfo(false);
    setShowFeedback(false);
    
    setTimeout(() => {
      setIsCreatingAvatar(false);
      setShowAvatar(true);
      
      // Stagger the animations
      setTimeout(() => setShowAvatarImage(true), 100);
      setTimeout(() => setShowMeasurementLegend(true), 500);
      setTimeout(() => setShowBodyTypeInfo(true), 900);
      setTimeout(() => setShowFeedback(true), 1300);
    }, 3000);
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
              <Slider id="bust" value={[getDisplayValue(measurements.bust, "bust")]} min={unit === "inches" ? 20 : 51} max={unit === "inches" ? 60 : 152} step={0.5} onValueChange={value => handleChange("bust", getStoredValue(value[0], "bust"))} disabled={showAvatar} className="py-4" />
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
              <Slider id="waist" value={[getDisplayValue(measurements.waist, "waist")]} min={unit === "inches" ? 20 : 51} max={unit === "inches" ? 60 : 152} step={0.5} onValueChange={value => handleChange("waist", getStoredValue(value[0], "waist"))} disabled={showAvatar} className="py-4" />
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
              <Slider id="hips" value={[getDisplayValue(measurements.hips, "hips")]} min={unit === "inches" ? 20 : 51} max={unit === "inches" ? 60 : 152} step={0.5} onValueChange={value => handleChange("hips", getStoredValue(value[0], "hips"))} disabled={showAvatar} className="py-4" />
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
              <Slider id="shoulders" value={[getDisplayValue(measurements.shoulders, "shoulders")]} min={unit === "inches" ? 20 : 51} max={unit === "inches" ? 60 : 152} step={0.5} onValueChange={value => handleChange("shoulders", getStoredValue(value[0], "shoulders"))} disabled={showAvatar} className="py-4" />
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
              <Slider id="weight" value={[getDisplayValue(measurements.weight, "weight")]} min={unit === "inches" ? 80 : 36} max={unit === "inches" ? 300 : 136} step={1} onValueChange={value => handleChange("weight", getStoredValue(value[0], "weight"))} disabled={showAvatar} className="py-2" />
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
              <Slider id="height" value={[unit === "inches" ? measurements.height : inchesToCm(measurements.height)]} min={unit === "inches" ? 48 : 122} max={unit === "inches" ? 78 : 198} step={1} onValueChange={value => handleChange("height", unit === "inches" ? value[0] : cmToInches(value[0]))} disabled={showAvatar} className="py-2" />
            </div>
          </div>
        </div>
        
        {!showAvatar ? (
          <Button type="button" className="w-full" onClick={handleCreateAvatar} disabled={isCreatingAvatar}>
            {isCreatingAvatar ? "Creating..." : "Create Your 3D Avatar"}
          </Button>
        ) : (
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setShowAvatar(false)} className="flex-1">
              Reset Measurements
            </Button>
            <Button onClick={handleSubmit} className="flex-1" disabled={isLoading}>
              {isLoading ? "Analyzing..." : "Find My Style"}
            </Button>
          </div>
        )}
        
        <p className="text-xs text-center text-muted-foreground">
          Your measurements are only used to determine your body shape and are never stored.
        </p>
      </form>
      
      {/* Measurement Guide */}
      <div className="mt-6">
        <QuickMeasurementGuide />
      </div>
        </Card>

      {/* 3D Avatar Visualization */}
      <div className="flex-1 max-w-none lg:max-w-lg">
        {isCreatingAvatar ? (
          <div className="h-full flex flex-col items-center justify-center space-y-6 p-8">
            <div className="relative w-32 h-32">
              {/* Outer spinning ring */}
              <div className="absolute inset-0 border-4 border-brand-200/30 rounded-full animate-[spin_3s_linear_infinite]"></div>
              {/* Middle spinning ring */}
              <div className="absolute inset-2 border-4 border-brand-300/50 rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
              {/* Inner spinning ring */}
              <div className="absolute inset-4 border-4 border-brand-400 rounded-full animate-[spin_1.5s_linear_infinite]"></div>
              {/* Center pulsing dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-brand-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="text-center space-y-2 animate-fade-in">
              <h3 className="text-xl font-semibold text-brand-600">Creating Your Avatar</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Analyzing your measurements and stitching together your personalized 3D model...
              </p>
            </div>
            
            {/* Progress indicators */}
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-brand-400 rounded-full animate-[bounce_1s_ease-in-out_infinite]"></div>
              <div className="w-2 h-2 bg-brand-400 rounded-full animate-[bounce_1s_ease-in-out_0.2s_infinite]"></div>
              <div className="w-2 h-2 bg-brand-400 rounded-full animate-[bounce_1s_ease-in-out_0.4s_infinite]"></div>
            </div>
          </div>
        ) : showAvatar ? <div className="space-y-4 w-full">
            {/* 3D Avatar - First to appear */}
            <div className={`flex justify-center items-center bg-gradient-to-b from-muted/20 to-background rounded-lg p-6 transition-all duration-500 ${showAvatarImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <img src={avatarModel3D} alt="3D Avatar Model" className="max-h-[500px] w-auto object-contain" />
            </div>
            
            {/* Measurement Legend - Second to appear */}
            {showMeasurementLegend && (
              <div className="flex flex-wrap justify-center gap-4 text-xs animate-fade-in">
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
            )}
            
            {/* Body Type Description - Third to appear */}
            {showBodyTypeInfo && currentBodyType && currentBodyType !== "unknown" && (
              <Card className="p-4 bg-brand-100/50 animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">
                  <span className="text-brand-600">Your Body Shape:</span>{" "}
                  <span className="text-brand-300 font-bold">
                    {currentBodyType.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  {getBodyTypeDescription(currentBodyType)}
                </p>
              </Card>
            )}
            
            {/* Feedback Section - Fourth to appear */}
            {showFeedback && (
              <Card className="w-full p-4 bg-white/80 backdrop-blur-sm animate-fade-in">
                <div className="text-center space-y-3">
                  <p className="text-sm font-medium text-foreground">Does this avatar represent your body shape?</p>
                  <div className="flex gap-2 justify-center">
                    <Button onClick={() => handleAvatarFeedback(true)} variant="outline" size="sm" className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Yes, looks right
                    </Button>
                    <Button onClick={() => handleAvatarFeedback(false)} variant="outline" size="sm" className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-orange-600" />
                      Not quite right
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Alternative Avatar Selection */}
            {showAlternatives && <Card className="w-full p-4 bg-white/80 backdrop-blur-sm">
              <div className="space-y-3">
                <p className="text-sm font-medium text-center text-foreground">Choose a body shape that better represents you:</p>
                <div className="grid grid-cols-3 gap-2">
                  {avatarOptions.map((avatar, index) => <button key={index} onClick={() => selectAvatar(avatar.src)} className={`flex flex-col items-center gap-1 p-2 rounded-lg border transition-colors ${selectedAvatar === avatar.src ? 'border-primary bg-primary/10 ring-2 ring-primary/20' : 'border-border hover:border-primary hover:bg-primary/5'}`}>
                    <img src={avatar.src} alt={avatar.label} className="w-12 h-16 object-contain" />
                    <span className="text-xs text-muted-foreground">{avatar.label}</span>
                  </button>)}
                </div>
                <Button onClick={handleCancel} variant="ghost" size="sm" className="w-full mt-2">
                  Cancel
                </Button>
              </div>
            </Card>}
          </div> : <div className="space-y-4">
            <div className="h-64 lg:h-96 w-full">
              <RotatableAvatar3D measurements={measurements} activeMeasurement={activeMeasurement} selectedAvatar={selectedAvatar} />
            </div>
            
            {/* Measurement Legend - Below Avatar */}
            <div className="flex flex-wrap justify-center gap-4 text-xs">
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
          </div>}
      </div>
    </div>;
};
export default MeasurementForm;