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
    
      {/* Measurement lines and labels */}
      {measurements && <div className="absolute inset-0 pointer-events-none">
        {/* Shoulders measurement line */}
        {measurements.shoulders && (
          <div className={`absolute top-[15%] left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center ${activeMeasurement === "shoulders" ? "animate-pulse" : ""}`}>
            <div className="w-48 h-0.5 bg-red-400 relative animate-fade-in">
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-red-400 bg-white rounded-full" />
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-red-400 bg-white rounded-full" />
              <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-red-400 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                Shoulders: {measurements.shoulders}"
              </div>
            </div>
          </div>
        )}
        
        {/* Bust measurement line */}
        <div className={`absolute top-[28%] left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center ${activeMeasurement === "bust" ? "animate-pulse" : ""}`}>
          <div className="w-40 h-0.5 bg-teal-400 relative animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-teal-400 bg-white rounded-full" />
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-teal-400 bg-white rounded-full" />
            <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-teal-400 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
              Bust: {measurements.bust}"
            </div>
          </div>
        </div>
        
        {/* Waist measurement line */}
        <div className={`absolute top-[48%] left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center ${activeMeasurement === "waist" ? "animate-pulse" : ""}`}>
          <div className="w-32 h-0.5 bg-blue-400 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-blue-400 bg-white rounded-full" />
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-blue-400 bg-white rounded-full" />
            <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-blue-400 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
              Waist: {measurements.waist}"
            </div>
          </div>
        </div>
        
        {/* Hips measurement line */}
        <div className={`absolute top-[62%] left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center ${activeMeasurement === "hips" ? "animate-pulse" : ""}`}>
          <div className="w-44 h-0.5 bg-green-400 relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-green-400 bg-white rounded-full" />
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-green-400 bg-white rounded-full" />
            <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-green-400 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
              Hips: {measurements.hips}"
            </div>
          </div>
        </div>
      </div>}
    </div>;
};
export default RotatableAvatar3D;