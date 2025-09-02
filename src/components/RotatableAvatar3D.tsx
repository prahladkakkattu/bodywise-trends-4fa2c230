import { BodyMeasurement } from "@/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CheckCircle, XCircle, Info } from "lucide-react";
import { determineBodyType, getBodyTypeDescription } from "@/utils/bodyTypeUtils";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
}

const RotatableAvatar3D = ({ measurements, activeMeasurement }: RotatableAvatar3DProps) => {
  const [selectedAvatar, setSelectedAvatar] = useState("/lovable-uploads/b00b9e96-74df-451c-9fb0-378ee5245709.png");
  const [showAlternatives, setShowAlternatives] = useState(false);

  const avatarOptions = [
    { src: "/lovable-uploads/b00b9e96-74df-451c-9fb0-378ee5245709.png", label: "Standard" },
    { src: "/lovable-uploads/2872d137-9eeb-4a2b-aea9-e9882bf555f8.png", label: "Curvy" },
    { src: "/lovable-uploads/afcc7e0c-90ec-47a7-919d-32633298ee26.png", label: "Petite" },
    { src: "/lovable-uploads/8643f61b-2202-4f5d-a1f9-7eae40132ed3.png", label: "Athletic" },
    { src: "/lovable-uploads/23f742dd-83aa-4a29-bd7a-5f6a14ccddfa.png", label: "Tall" }
  ];

  // Calculate body type from measurements
  const bodyType = measurements ? determineBodyType(measurements) : 'hourglass';
  const bodyTypeDescription = getBodyTypeDescription(bodyType);
  
  // Format body type for display
  const formattedBodyType = bodyType
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Tooltip content for all body shapes
  const allBodyShapeInfo = {
    "Hourglass": "Well-balanced bust and hips with a defined waist. Creates a classic feminine silhouette.",
    "Pear": "Narrower shoulders and bust, with fuller hips. The waist is typically well-defined.",
    "Apple": "Fuller midsection with narrower hips. Shoulders may be broader than hips.",
    "Rectangle": "Similar measurements for bust, waist, and hips. Straight up-and-down silhouette.",
    "Inverted Triangle": "Broader shoulders and bust with narrower hips. Athletic build with strong upper body."
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

  return (
    <TooltipProvider>
      <div className="space-y-3 w-full max-w-md mx-auto">
        {/* Body Shape Header */}
        <Card className="w-full p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 shadow-sm -mt-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                <h3 className="text-sm font-medium text-foreground">
                  Your Body Shape: <span className="text-primary font-semibold">{formattedBodyType}</span>
                </h3>
                 <Tooltip>
                   <TooltipTrigger asChild>
                     <Button variant="ghost" size="sm" className="p-1 h-auto hover:bg-primary/20">
                       <Info className="h-3 w-3 text-primary/70 hover:text-primary" />
                     </Button>
                   </TooltipTrigger>
                   <TooltipContent side="bottom" className="max-w-md p-4">
                     <div className="space-y-3">
                       <p className="font-semibold text-base border-b pb-2">All Body Shape Types:</p>
                       {Object.entries(allBodyShapeInfo).map(([shape, description]) => (
                         <div key={shape} className="space-y-1">
                           <span className="font-medium text-primary text-sm block">{shape}</span>
                           <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                         </div>
                       ))}
                     </div>
                   </TooltipContent>
                 </Tooltip>
              </div>
            </div>
            <p className="text-sm text-muted-foreground bg-background/50 p-2 rounded-md border-l-2 border-primary/30">
              {bodyTypeDescription}
            </p>
          </div>
        </Card>

        <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner relative">
        <img 
          src={selectedAvatar} 
          alt="Body shape silhouette - front view"
          className="h-full max-h-60 lg:max-h-80 w-auto object-contain transition-all duration-300 relative z-10"
        />
      
      {/* Highlighting overlays */}
      {activeMeasurement && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Shoulders highlight */}
          {activeMeasurement === "shoulders" && (
            <div className="absolute top-[18%] left-1/2 transform -translate-x-1/2 w-36 h-6 bg-red-400/30 border-2 border-red-400 rounded-full animate-pulse" />
          )}
          
          {/* Bust highlight */}
          {activeMeasurement === "bust" && (
            <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 w-24 h-10 bg-teal-400/30 border-2 border-teal-400 rounded-full animate-pulse" />
          )}
          
          {/* Waist highlight */}
          {activeMeasurement === "waist" && (
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-16 h-6 bg-blue-400/30 border-2 border-blue-400 rounded-full animate-pulse" />
          )}
          
          {/* Hips highlight */}
          {activeMeasurement === "hips" && (
            <div className="absolute top-[72%] left-1/2 transform -translate-x-1/2 w-28 h-10 bg-green-400/30 border-2 border-green-400 rounded-full animate-pulse" />
          )}
        </div>
      )}
    </div>

      {/* Feedback Section */}
      <Card className="w-full p-4 bg-white/80 backdrop-blur-sm">
        <div className="text-center space-y-3">
          <p className="text-sm font-medium text-foreground">We've made our best prediction, but here are some closely related options you might also identify with.</p>
          <div className="flex gap-2 justify-center">
            <Button
              onClick={() => handleAvatarFeedback(true)}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <CheckCircle className="h-4 w-4 text-green-600" />
              Yes, looks right
            </Button>
            <Button
              onClick={() => handleAvatarFeedback(false)}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <XCircle className="h-4 w-4 text-orange-600" />
              Not quite right
            </Button>
          </div>
        </div>
      </Card>

      {/* Alternative Avatar Selection */}
      {showAlternatives && (
        <Card className="w-full p-4 bg-white/80 backdrop-blur-sm">
          <div className="space-y-3">
            <p className="text-sm font-medium text-center text-foreground">Choose a body shape that better represents you:</p>
            <div className="grid grid-cols-3 gap-2">
              {avatarOptions.map((avatar, index) => (
                <button
                  key={index}
                  onClick={() => selectAvatar(avatar.src)}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg border transition-colors ${
                    selectedAvatar === avatar.src 
                      ? 'border-primary bg-primary/10 ring-2 ring-primary/20' 
                      : 'border-border hover:border-primary hover:bg-primary/5'
                  }`}
                >
                  <img
                    src={avatar.src}
                    alt={avatar.label}
                    className="w-12 h-16 object-contain"
                  />
                  <span className="text-xs text-muted-foreground">{avatar.label}</span>
                </button>
              ))}
            </div>
            <Button
              onClick={handleCancel}
              variant="ghost"
              size="sm"
              className="w-full mt-2"
            >
              Cancel
            </Button>
          </div>
        </Card>
      )}
    </div>
    </TooltipProvider>
  );
};

export default RotatableAvatar3D;