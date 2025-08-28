import { BodyMeasurement } from "@/types";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
}

const RotatableAvatar3D = ({ measurements }: RotatableAvatar3DProps) => {
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
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner">
      <img 
        src={getBustImage()} 
        alt="Body shape silhouette - front view"
        className="h-full max-h-60 lg:max-h-80 w-auto object-contain transition-all duration-300"
      />
    </div>
  );
};

export default RotatableAvatar3D;