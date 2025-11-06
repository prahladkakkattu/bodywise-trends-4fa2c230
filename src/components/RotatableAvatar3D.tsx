import { BodyMeasurement } from "@/types";
import { useState } from "react";
import { X } from "lucide-react";

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
  activeMeasurement?: keyof BodyMeasurement | null;
  selectedAvatar?: string;
}

const measurementInstructions = {
  shoulders: {
    title: "How to Measure Shoulders",
    steps: [
      "Stand naturally with arms relaxed at your sides",
      "Measure across your back from the edge of one shoulder to the other",
      "The measurement should be straight across the widest part",
      "Tip: Have someone help you for accurate measurement"
    ],
    icon: "📏"
  },
  bust: {
    title: "How to Measure Bust",
    steps: [
      "Wear a non-padded bra for accurate results",
      "Wrap tape around the fullest part of your bust",
      "Keep the tape parallel to the floor all around",
      "The tape should be snug but not tight"
    ],
    icon: "📐"
  },
  waist: {
    title: "How to Measure Waist",
    steps: [
      "Find your natural waistline (narrowest part)",
      "Wrap tape around your waist, not too tight",
      "Keep the tape parallel to the floor",
      "Breathe normally and don't suck in"
    ],
    icon: "📏"
  },
  hips: {
    title: "How to Measure Hips",
    steps: [
      "Stand with feet together",
      "Measure around the fullest part of your hips",
      "This is usually 7-9 inches below your waist",
      "Keep the tape parallel to the floor"
    ],
    icon: "📐"
  }
};
const RotatableAvatar3D = ({
  measurements,
  activeMeasurement,
  selectedAvatar = "/lovable-uploads/avatar-white-dress.png"
}: RotatableAvatar3DProps) => {
  const [selectedInstruction, setSelectedInstruction] = useState<keyof BodyMeasurement | null>(null);

  const handleMeasurementClick = (measurement: keyof BodyMeasurement) => {
    setSelectedInstruction(selectedInstruction === measurement ? null : measurement);
  };
  return <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner relative">
      <img src={selectedAvatar} alt="Body shape silhouette - front view" className="h-full max-h-60 lg:max-h-80 w-auto object-contain transition-all duration-300 relative z-10" />
    
      {/* Measurement lines and labels */}
      {measurements && <div className="absolute inset-0">
        {/* Shoulders measurement line */}
        {measurements.shoulders && (
          <div className={`absolute top-[15%] left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center ${activeMeasurement === "shoulders" ? "animate-pulse" : ""}`}>
            <div 
              className="w-48 h-0.5 bg-red-400 relative animate-fade-in cursor-pointer pointer-events-auto hover:scale-105 transition-transform"
              onClick={() => handleMeasurementClick("shoulders")}
            >
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-red-400 bg-white rounded-full hover:scale-125 transition-transform" />
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-red-400 bg-white rounded-full hover:scale-125 transition-transform" />
              <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-red-400 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                Shoulders: {measurements.shoulders}" 👆
              </div>
            </div>
            
            {/* Instruction popup for shoulders */}
            {selectedInstruction === "shoulders" && (
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl p-4 w-64 z-50 animate-scale-in border-2 border-red-400 pointer-events-auto">
                <button 
                  onClick={() => setSelectedInstruction(null)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="text-2xl mb-2">{measurementInstructions.shoulders.icon}</div>
                <h3 className="font-semibold text-sm mb-2 text-red-600">{measurementInstructions.shoulders.title}</h3>
                <ol className="space-y-1.5 text-xs text-gray-700">
                  {measurementInstructions.shoulders.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="font-semibold text-red-500">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
        
        {/* Bust measurement line */}
        <div className={`absolute top-[28%] left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center ${activeMeasurement === "bust" ? "animate-pulse" : ""}`}>
          <div 
            className="w-40 h-0.5 bg-teal-400 relative animate-fade-in cursor-pointer pointer-events-auto hover:scale-105 transition-transform" 
            style={{ animationDelay: "0.1s" }}
            onClick={() => handleMeasurementClick("bust")}
          >
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-teal-400 bg-white rounded-full hover:scale-125 transition-transform" />
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-teal-400 bg-white rounded-full hover:scale-125 transition-transform" />
            <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-teal-400 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
              Bust: {measurements.bust}" 👆
            </div>
          </div>
          
          {/* Instruction popup for bust */}
          {selectedInstruction === "bust" && (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl p-4 w-64 z-50 animate-scale-in border-2 border-teal-400 pointer-events-auto">
              <button 
                onClick={() => setSelectedInstruction(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="text-2xl mb-2">{measurementInstructions.bust.icon}</div>
              <h3 className="font-semibold text-sm mb-2 text-teal-600">{measurementInstructions.bust.title}</h3>
              <ol className="space-y-1.5 text-xs text-gray-700">
                {measurementInstructions.bust.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-semibold text-teal-500">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
        
        {/* Waist measurement line */}
        <div className={`absolute top-[48%] left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center ${activeMeasurement === "waist" ? "animate-pulse" : ""}`}>
          <div 
            className="w-32 h-0.5 bg-blue-400 relative animate-fade-in cursor-pointer pointer-events-auto hover:scale-105 transition-transform" 
            style={{ animationDelay: "0.2s" }}
            onClick={() => handleMeasurementClick("waist")}
          >
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-blue-400 bg-white rounded-full hover:scale-125 transition-transform" />
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-blue-400 bg-white rounded-full hover:scale-125 transition-transform" />
            <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-blue-400 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
              Waist: {measurements.waist}" 👆
            </div>
          </div>
          
          {/* Instruction popup for waist */}
          {selectedInstruction === "waist" && (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl p-4 w-64 z-50 animate-scale-in border-2 border-blue-400 pointer-events-auto">
              <button 
                onClick={() => setSelectedInstruction(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="text-2xl mb-2">{measurementInstructions.waist.icon}</div>
              <h3 className="font-semibold text-sm mb-2 text-blue-600">{measurementInstructions.waist.title}</h3>
              <ol className="space-y-1.5 text-xs text-gray-700">
                {measurementInstructions.waist.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-semibold text-blue-500">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
        
        {/* Hips measurement line */}
        <div className={`absolute top-[62%] left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center ${activeMeasurement === "hips" ? "animate-pulse" : ""}`}>
          <div 
            className="w-44 h-0.5 bg-green-400 relative animate-fade-in cursor-pointer pointer-events-auto hover:scale-105 transition-transform" 
            style={{ animationDelay: "0.3s" }}
            onClick={() => handleMeasurementClick("hips")}
          >
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-green-400 bg-white rounded-full hover:scale-125 transition-transform" />
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-green-400 bg-white rounded-full hover:scale-125 transition-transform" />
            <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-green-400 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
              Hips: {measurements.hips}" 👆
            </div>
          </div>
          
          {/* Instruction popup for hips */}
          {selectedInstruction === "hips" && (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl p-4 w-64 z-50 animate-scale-in border-2 border-green-400 pointer-events-auto">
              <button 
                onClick={() => setSelectedInstruction(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="text-2xl mb-2">{measurementInstructions.hips.icon}</div>
              <h3 className="font-semibold text-sm mb-2 text-green-600">{measurementInstructions.hips.title}</h3>
              <ol className="space-y-1.5 text-xs text-gray-700">
                {measurementInstructions.hips.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-semibold text-green-500">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>}
    </div>;
};
export default RotatableAvatar3D;