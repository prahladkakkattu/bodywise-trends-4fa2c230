import { BodyMeasurement } from "@/types";
import avatarImage from "@/assets/3d-avatar-fashion.png";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
  selectedAvatar?: string;
}
const RotatableAvatar3D = ({
  measurements,
  activeMeasurement,
  selectedAvatar = avatarImage
}: RotatableAvatar3DProps) => {
  return <div className="w-full h-full min-h-[300px] flex items-center justify-center rounded-lg shadow-inner relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Fashion Ramp Background */}
      <div className="absolute inset-0 z-0">
        {/* Runway */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(139, 92, 246, 0.1) 40%, rgba(168, 85, 247, 0.2) 100%)',
            clipPath: 'polygon(40% 0%, 60% 0%, 70% 100%, 30% 100%)',
          }}
        />
        
        {/* Animated Spotlights */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-400/30 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-pink-400/30 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse" 
          style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-violet-400/20 rounded-full blur-2xl animate-pulse" 
          style={{ animationDelay: '1.5s', animationDuration: '2.5s' }} />
        
        {/* Scanning light effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-[slide-down_4s_ease-in-out_infinite]" 
            style={{ 
              animation: 'slideDown 4s ease-in-out infinite',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
            }} />
        </div>
      </div>
      
      <img src={selectedAvatar} alt="Body shape silhouette - front view" className="h-full max-h-60 lg:max-h-80 w-auto object-contain transition-all duration-300 relative z-10 drop-shadow-2xl" />
    
      {/* Highlighting overlays */}
      {activeMeasurement && <div className="absolute inset-0 pointer-events-none">
        {/* Shoulders highlight */}
        {activeMeasurement === "shoulders" && <div className="absolute top-[18%] left-1/2 transform -translate-x-1/2 w-36 h-6 bg-red-400/30 border-2 border-red-400 rounded-full animate-pulse" />}
        
        {/* Bust highlight */}
        {activeMeasurement === "bust" && <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 w-24 h-10 bg-teal-400/30 border-2 border-teal-400 rounded-full animate-pulse" />}
        
        {/* Waist highlight */}
        {activeMeasurement === "waist" && <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-16 h-6 bg-blue-400/30 border-2 border-blue-400 rounded-full animate-pulse" />}
        
        {/* Hips highlight */}
        {activeMeasurement === "hips" && <div className="absolute top-[72%] left-1/2 transform -translate-x-1/2 w-28 h-10 bg-green-400/30 border-2 border-green-400 rounded-full animate-pulse" />}
      </div>}
    </div>;
};
export default RotatableAvatar3D;