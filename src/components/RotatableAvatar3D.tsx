import { BodyMeasurement } from "@/types";
import { useState } from "react";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
  onAvatarSelect?: (index: number) => void;
}

const RotatableAvatar3D = ({ measurements, activeMeasurement, onAvatarSelect }: RotatableAvatar3DProps) => {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  
  const bodyShapeImages = [
    "/lovable-uploads/3f0aa350-f276-4d70-a0a9-37c98c766c38.png",
    "/lovable-uploads/b7c98bdb-f70a-4222-996b-190272574906.png", 
    "/lovable-uploads/7da019fb-2ed5-4b11-98f3-c2d2cc604397.png",
    "/lovable-uploads/9c769a7a-0de5-4fae-94e5-e057d64a9770.png",
    "/lovable-uploads/0eca5ceb-5eeb-4a02-a9eb-df7eb0ccbcfd.png"
  ];

  const handleAvatarClick = (index: number) => {
    setSelectedAvatar(index);
    onAvatarSelect?.(index);
  };

  const SingleAvatar = ({ src, index }: { src: string; index: number }) => (
    <div 
      className={`relative flex-1 min-w-0 cursor-pointer transition-all duration-300 rounded-lg p-2 ${
        selectedAvatar === index 
          ? 'bg-primary/10 ring-2 ring-primary shadow-lg scale-105' 
          : 'hover:bg-slate-100/50 hover:scale-102'
      }`}
      onClick={() => handleAvatarClick(index)}
    >
      <img 
        src={src}
        alt={`Body shape variation ${index + 1}`}
        className="h-full max-h-48 lg:max-h-64 w-auto object-contain mx-auto transition-all duration-300"
      />
      
      {/* Selection indicator */}
      {selectedAvatar === index && (
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      )}
      
      {/* Highlighting overlays */}
      {activeMeasurement && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Shoulders highlight */}
          {activeMeasurement === "shoulders" && (
            <div className="absolute top-[18%] left-1/2 transform -translate-x-1/2 w-8 lg:w-12 h-2 bg-red-400/30 border border-red-400 rounded-full animate-pulse" />
          )}
          
          {/* Bust highlight */}
          {activeMeasurement === "bust" && (
            <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 w-6 lg:w-10 h-4 bg-teal-400/30 border border-teal-400 rounded-full animate-pulse" />
          )}
          
          {/* Waist highlight */}
          {activeMeasurement === "waist" && (
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-4 lg:w-6 h-3 bg-blue-400/30 border border-blue-400 rounded-full animate-pulse" />
          )}
          
          {/* Hips highlight */}
          {activeMeasurement === "hips" && (
            <div className="absolute top-[72%] left-1/2 transform -translate-x-1/2 w-7 lg:w-11 h-4 bg-green-400/30 border border-green-400 rounded-full animate-pulse" />
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full h-full min-h-[300px] bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner p-4">
      <div className="flex justify-center items-center gap-2 h-full">
        {bodyShapeImages.map((src, index) => (
          <SingleAvatar key={index} src={src} index={index} />
        ))}
      </div>
    </div>
  );
};

export default RotatableAvatar3D;