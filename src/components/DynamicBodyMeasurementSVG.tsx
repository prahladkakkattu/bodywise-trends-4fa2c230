import React from 'react';
import { BodyMeasurement } from '@/types';

interface DynamicBodyMeasurementSVGProps {
  measurements?: BodyMeasurement;
  showFrontView?: boolean;
}

const DynamicBodyMeasurementSVG: React.FC<DynamicBodyMeasurementSVGProps> = ({ 
  measurements,
  showFrontView = true 
}) => {
  // Base dimensions for scaling
  const baseHeight = 400;
  const baseWidth = 200;
  
  // Calculate scaling factors based on measurements
  const heightScale = measurements?.height ? Math.max(0.8, Math.min(1.2, measurements.height / 170)) : 1;
  const bustScale = measurements?.bust ? Math.max(0.8, Math.min(1.3, measurements.bust / 36)) : 1;
  const waistScale = measurements?.waist ? Math.max(0.7, Math.min(1.3, measurements.waist / 28)) : 1;
  const hipScale = measurements?.hips ? Math.max(0.8, Math.min(1.3, measurements.hips / 38)) : 1;
  
  // Calculate positions based on proportions
  const shoulderWidth = 80 * bustScale;
  const bustWidth = 75 * bustScale;
  const waistWidth = 50 * waistScale;
  const hipWidth = 85 * hipScale;
  
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-inner">
      <svg
        width={baseWidth}
        height={baseHeight * heightScale}
        viewBox={`0 0 ${baseWidth} ${baseHeight}`}
        className="max-h-[350px] w-auto"
      >
        {/* Grid lines for measurement reference */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Body silhouette - Front view */}
        <g transform={`translate(${baseWidth/2}, 40)`}>
          {/* Head */}
          <ellipse cx="0" cy="0" rx="25" ry="35" fill="#64748b" opacity="0.8"/>
          
          {/* Neck */}
          <rect x="-8" y="30" width="16" height="15" fill="#64748b" opacity="0.8"/>
          
          {/* Shoulders */}
          <ellipse cx="0" cy="55" rx={shoulderWidth/2} ry="12" fill="#64748b" opacity="0.8"/>
          
          {/* Bust area */}
          <ellipse cx="0" cy="90" rx={bustWidth/2} ry="25" fill="#64748b" opacity="0.9"/>
          
          {/* Waist */}
          <ellipse cx="0" cy="140" rx={waistWidth/2} ry="20" fill="#1f2937" opacity="0.9"/>
          
          {/* Hips */}
          <ellipse cx="0" cy="180" rx={hipWidth/2} ry="30" fill="#1f2937" opacity="0.9"/>
          
          {/* Thighs */}
          <ellipse cx="-20" cy="230" rx="18" ry="40" fill="#1f2937" opacity="0.9"/>
          <ellipse cx="20" cy="230" rx="18" ry="40" fill="#1f2937" opacity="0.9"/>
          
          {/* Lower legs */}
          <ellipse cx="-20" cy="300" rx="15" ry="50" fill="#1f2937" opacity="0.9"/>
          <ellipse cx="20" cy="300" rx="15" ry="50" fill="#1f2937" opacity="0.9"/>
          
          {/* Arms */}
          <ellipse cx="-45" cy="110" rx="12" ry="60" fill="#64748b" opacity="0.8"/>
          <ellipse cx="45" cy="110" rx="12" ry="60" fill="#64748b" opacity="0.8"/>
        </g>
        
        {/* Measurement lines and labels */}
        {measurements && (
          <g className="measurement-lines">
            {/* Bust measurement line */}
            <line x1="20" y1="130" x2={baseWidth - 20} y2="130" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <text x="25" y="125" fontSize="10" fill="#3b82f6" fontWeight="bold">
              {measurements.bust}"
            </text>
            
            {/* Waist measurement line */}
            <line x1="20" y1="180" x2={baseWidth - 20} y2="180" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <text x="25" y="175" fontSize="10" fill="#ef4444" fontWeight="bold">
              {measurements.waist}"
            </text>
            
            {/* Hip measurement line */}
            <line x1="20" y1="220" x2={baseWidth - 20} y2="220" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <text x="25" y="215" fontSize="10" fill="#10b981" fontWeight="bold">
              {measurements.hips}"
            </text>
            
            {/* Height line */}
            <line x1="10" y1="40" x2="10" y2={40 + (baseHeight - 80) * heightScale} stroke="#8b5cf6" strokeWidth="2"/>
            <text x="15" y="200" fontSize="10" fill="#8b5cf6" fontWeight="bold" transform="rotate(90 15 200)">
              {measurements.height}"
            </text>
          </g>
        )}
        
        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                  refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default DynamicBodyMeasurementSVG;