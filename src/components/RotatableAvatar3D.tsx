import { BodyMeasurement } from "@/types";
import { useMemo } from "react";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
}

const RotatableAvatar3D = ({ measurements, activeMeasurement }: RotatableAvatar3DProps) => {
  // Calculate scaling factors based on measurements
  const scalingFactors = useMemo(() => {
    if (!measurements) return { shoulders: 1, bust: 1, waist: 1, hips: 1 };
    
    // Base measurements for normalization (typical average measurements)
    const baseMeasurements = { shoulders: 40, bust: 36, waist: 28, hips: 38 };
    
    return {
      shoulders: Math.max(0.7, Math.min(1.5, measurements.shoulders / baseMeasurements.shoulders)),
      bust: Math.max(0.7, Math.min(1.4, measurements.bust / baseMeasurements.bust)),
      waist: Math.max(0.6, Math.min(1.3, measurements.waist / baseMeasurements.waist)),
      hips: Math.max(0.7, Math.min(1.5, measurements.hips / baseMeasurements.hips)),
    };
  }, [measurements]);

  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner relative">
      <div className="relative h-full max-h-60 lg:max-h-80 w-auto transition-all duration-300">
        {/* SVG Body Avatar with Dynamic Scaling */}
        <svg 
          width="160" 
          height="280" 
          viewBox="0 0 160 280" 
          className="h-full w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head */}
          <ellipse 
            cx="80" 
            cy="25" 
            rx="18" 
            ry="22" 
            fill="hsl(var(--muted-foreground))" 
            opacity="0.8"
          />
          
          {/* Shoulders */}
          <rect 
            x={80 - (30 * scalingFactors.shoulders)}
            y="45" 
            width={60 * scalingFactors.shoulders}
            height="15" 
            rx="7" 
            fill="hsl(var(--muted-foreground))" 
            opacity="0.8"
            className={`transition-all duration-300 ${activeMeasurement === 'shoulders' ? 'fill-red-400' : ''}`}
          />
          
          {/* Bust Area */}
          <ellipse 
            cx="80" 
            cy="85" 
            rx={25 * scalingFactors.bust}
            ry="20" 
            fill="hsl(var(--muted-foreground))" 
            opacity="0.8"
            className={`transition-all duration-300 ${activeMeasurement === 'bust' ? 'fill-teal-400' : ''}`}
          />
          
          {/* Waist */}
          <rect 
            x={80 - (15 * scalingFactors.waist)}
            y="115" 
            width={30 * scalingFactors.waist}
            height="25" 
            rx="15" 
            fill="hsl(var(--muted-foreground))" 
            opacity="0.8"
            className={`transition-all duration-300 ${activeMeasurement === 'waist' ? 'fill-blue-400' : ''}`}
          />
          
          {/* Hips */}
          <ellipse 
            cx="80" 
            cy="160" 
            rx={28 * scalingFactors.hips}
            ry="25" 
            fill="hsl(var(--muted-foreground))" 
            opacity="0.8"
            className={`transition-all duration-300 ${activeMeasurement === 'hips' ? 'fill-green-400' : ''}`}
          />
          
          {/* Legs */}
          <rect x="60" y="185" width="15" height="80" rx="7" fill="hsl(var(--muted-foreground))" opacity="0.8" />
          <rect x="85" y="185" width="15" height="80" rx="7" fill="hsl(var(--muted-foreground))" opacity="0.8" />
          
          {/* Arms */}
          <rect x="45" y="60" width="12" height="60" rx="6" fill="hsl(var(--muted-foreground))" opacity="0.8" />
          <rect x="103" y="60" width="12" height="60" rx="6" fill="hsl(var(--muted-foreground))" opacity="0.8" />
        </svg>

        {/* Measurement Indicators */}
        {activeMeasurement && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Shoulders indicator */}
            {activeMeasurement === "shoulders" && (
              <div className="absolute top-[16%] left-1/2 transform -translate-x-1/2">
                <div className="bg-red-400/20 border-2 border-red-400 rounded-full animate-pulse px-3 py-1">
                  <span className="text-xs font-semibold text-red-700">Shoulders</span>
                </div>
              </div>
            )}
            
            {/* Bust indicator */}
            {activeMeasurement === "bust" && (
              <div className="absolute top-[28%] left-1/2 transform -translate-x-1/2">
                <div className="bg-teal-400/20 border-2 border-teal-400 rounded-full animate-pulse px-3 py-1">
                  <span className="text-xs font-semibold text-teal-700">Bust</span>
                </div>
              </div>
            )}
            
            {/* Waist indicator */}
            {activeMeasurement === "waist" && (
              <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-400/20 border-2 border-blue-400 rounded-full animate-pulse px-3 py-1">
                  <span className="text-xs font-semibold text-blue-700">Waist</span>
                </div>
              </div>
            )}
            
            {/* Hips indicator */}
            {activeMeasurement === "hips" && (
              <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2">
                <div className="bg-green-400/20 border-2 border-green-400 rounded-full animate-pulse px-3 py-1">
                  <span className="text-xs font-semibold text-green-700">Hips</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RotatableAvatar3D;