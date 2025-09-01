import { BodyMeasurement } from "@/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
}

const RotatableAvatar3D = ({ measurements, activeMeasurement }: RotatableAvatar3DProps) => {
  const [showFeedback, setShowFeedback] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState("/lovable-uploads/fa789694-790e-4255-85c2-2d1984f709e2.png");
  const [showAlternatives, setShowAlternatives] = useState(false);

  const avatarOptions = [
    { src: "/lovable-uploads/fa789694-790e-4255-85c2-2d1984f709e2.png", label: "Standard" },
    { src: "/lovable-uploads/86e13313-29a0-40c8-95b5-844fa2119cf6.png", label: "Curvy" },
    { src: "/lovable-uploads/33ebd579-7d29-4f90-815d-e29ef0d3ff34.png", label: "Petite" },
    { src: "/lovable-uploads/5bb3e4fc-3a75-419e-a173-8ebc2607d65e.png", label: "Athletic" },
    { src: "/lovable-uploads/2cd58b40-2fc6-4a4c-8b33-f3c9929017bf.png", label: "Tall" },
    { src: "/lovable-uploads/31e65978-e2f8-432f-a950-8587ae4d1309.png", label: "Plus Size" }
  ];

  const handleAvatarFeedback = (isCorrect: boolean) => {
    if (isCorrect) {
      setShowFeedback(false);
    } else {
      setShowAlternatives(true);
      setShowFeedback(false);
    }
  };

  const selectAvatar = (avatarSrc: string) => {
    setSelectedAvatar(avatarSrc);
    setShowAlternatives(false);
  };

  return (
    <div className="space-y-4">
      <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner relative">
        <img 
          src={selectedAvatar} 
          alt="Body shape silhouette - front view"
          className="h-full max-h-72 lg:max-h-96 w-auto object-contain transition-all duration-300 relative z-10 scale-110"
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
      {showFeedback && (
        <Card className="p-4 bg-white/80 backdrop-blur-sm">
          <div className="text-center space-y-3">
            <p className="text-sm font-medium text-foreground">Does this avatar represent your body shape?</p>
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
      )}

      {/* Alternative Avatar Selection */}
      {showAlternatives && (
        <Card className="p-4 bg-white/80 backdrop-blur-sm">
          <div className="space-y-3">
            <p className="text-sm font-medium text-center text-foreground">Choose a body shape that better represents you:</p>
            <div className="grid grid-cols-3 gap-2">
              {avatarOptions.map((avatar, index) => (
                <button
                  key={index}
                  onClick={() => selectAvatar(avatar.src)}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <img
                    src={avatar.src}
                    alt={avatar.label}
                    className="w-16 h-20 object-contain"
                  />
                  <span className="text-xs text-muted-foreground">{avatar.label}</span>
                </button>
              ))}
            </div>
            <Button
              onClick={() => setShowAlternatives(false)}
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
  );
};

export default RotatableAvatar3D;