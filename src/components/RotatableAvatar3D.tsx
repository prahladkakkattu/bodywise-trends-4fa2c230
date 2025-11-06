import { BodyMeasurement } from "@/types";
interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
  selectedAvatar?: string;
}
const RotatableAvatar3D = ({
  measurements,
  activeMeasurement,
  selectedAvatar = "/lovable-uploads/avatar-white-dress.png"
}: RotatableAvatar3DProps) => {
  return <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner relative">
      <img src={selectedAvatar} alt="Body shape silhouette - front view" className="h-full max-h-60 lg:max-h-80 w-auto object-contain transition-all duration-300 relative z-10" />
    
      {/* Highlighting overlays */}
      {activeMeasurement && <div className="absolute inset-0 pointer-events-none">
        {/* Shoulders highlight */}
        {activeMeasurement === "shoulders" && <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-32 h-4 bg-red-400/30 border-2 border-red-400 rounded-full animate-pulse" />}
        
        {/* Bust highlight */}
        {activeMeasurement === "bust" && <div className="absolute top-[28%] left-1/2 transform -translate-x-1/2 w-28 h-8 bg-teal-400/30 border-2 border-teal-400 rounded-full animate-pulse" />}
        
        {/* Waist highlight */}
        {activeMeasurement === "waist" && <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2 w-20 h-4 bg-blue-400/30 border-2 border-blue-400 rounded-full animate-pulse" />}
        
        {/* Hips highlight */}
        {activeMeasurement === "hips" && <div className="absolute top-[62%] left-1/2 transform -translate-x-1/2 w-32 h-8 bg-green-400/30 border-2 border-green-400 rounded-full animate-pulse" />}
      </div>}
    </div>;
};
export default RotatableAvatar3D;