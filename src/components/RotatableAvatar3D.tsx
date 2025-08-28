import { BodyMeasurement } from "@/types";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
}

const RotatableAvatar3D = ({ measurements, activeMeasurement }: RotatableAvatar3DProps) => {
  // Determine which bust image to use based on bust measurement
  const getBustImage = () => {
    if (!measurements) return "/lovable-uploads/fa789694-790e-4255-85c2-2d1984f709e2.png";
    
    // Use smaller bust for measurements <= 34 inches, larger for > 34 inches
    if (measurements.bust <= 34) {
      return "/lovable-uploads/8bceb4d8-70c6-4a54-acf5-9f7b2f5ddbfa.png";
    } else {
      return "/lovable-uploads/a9dd43a8-5581-438a-8a92-50636805c0e5.png";
    }
  };
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner relative">
      <img 
        src={getBustImage()} 
        alt="Body shape silhouette - front view"
        className="h-full max-h-60 lg:max-h-80 w-auto object-contain transition-all duration-300 relative z-10"
      />
      
      {/* Highlighting overlays */}
      {activeMeasurement && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Shoulders highlight */}
          {activeMeasurement === "shoulders" && (
            <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-32 h-8 bg-red-400/30 border-2 border-red-400 rounded-full animate-pulse" />
          )}
          
          {/* Bust highlight */}
          {activeMeasurement === "bust" && (
            <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-28 h-12 bg-teal-400/30 border-2 border-teal-400 rounded-full animate-pulse" />
          )}
          
          {/* Waist highlight */}
          {activeMeasurement === "waist" && (
            <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 w-20 h-8 bg-blue-400/30 border-2 border-blue-400 rounded-full animate-pulse" />
          )}
          
          {/* Hips highlight */}
          {activeMeasurement === "hips" && (
            <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 w-32 h-12 bg-green-400/30 border-2 border-green-400 rounded-full animate-pulse" />
          )}
        </div>
      )}
    </div>
  );
};

export default RotatableAvatar3D;