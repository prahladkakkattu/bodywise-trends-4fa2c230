import { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface AdjustableSilhouetteProps {
  bustSize: number;
  underbustSize: number;
  className?: string;
}

export function AdjustableSilhouette({
  bustSize,
  underbustSize,
  className,
}: AdjustableSilhouetteProps) {
  const paths = useMemo(() => {
    // Base dimensions
    const baseWidth = 537;
    const baseHeight = 2040;
    
    // Calculate proportional adjustments
    const bustRatio = bustSize / 36; // 36 is baseline
    const waistRatio = underbustSize / 32; // 32 is baseline
    
    // Key points for the silhouette
    const shoulderWidth = baseWidth * bustRatio;
    const waistWidth = baseWidth * 0.7 * waistRatio;
    const hipWidth = baseWidth * 0.85;
    
    const centerX = baseWidth / 2;
    const headBottom = baseHeight * 0.15;
    const shoulderY = baseHeight * 0.2;
    const bustY = baseHeight * 0.35;
    const waistY = baseHeight * 0.5;
    const hipY = baseHeight * 0.65;
    const bottomY = baseHeight * 0.95;
    
    // Create the body outline path
    const bodyPath = `
      M ${centerX} ${headBottom}
      Q ${centerX - shoulderWidth * 0.4} ${shoulderY}, ${centerX - shoulderWidth * 0.45} ${shoulderY + 20}
      L ${centerX - shoulderWidth * 0.45} ${bustY - 50}
      Q ${centerX - shoulderWidth * 0.5} ${bustY}, ${centerX - waistWidth * 0.5} ${waistY}
      Q ${centerX - waistWidth * 0.5} ${waistY + 50}, ${centerX - hipWidth * 0.5} ${hipY}
      L ${centerX - hipWidth * 0.35} ${bottomY}
      L ${centerX + hipWidth * 0.35} ${bottomY}
      L ${centerX + hipWidth * 0.5} ${hipY}
      Q ${centerX + waistWidth * 0.5} ${waistY + 50}, ${centerX + waistWidth * 0.5} ${waistY}
      Q ${centerX + shoulderWidth * 0.5} ${bustY}, ${centerX + shoulderWidth * 0.45} ${bustY - 50}
      L ${centerX + shoulderWidth * 0.45} ${shoulderY + 20}
      Q ${centerX + shoulderWidth * 0.4} ${shoulderY}, ${centerX} ${headBottom}
      Z
    `;
    
    return {
      body: bodyPath,
      bustLine: `M ${centerX - shoulderWidth * 0.5} ${bustY} L ${centerX + shoulderWidth * 0.5} ${bustY}`,
      waistLine: `M ${centerX - waistWidth * 0.5} ${waistY} L ${centerX + waistWidth * 0.5} ${waistY}`,
      hipLine: `M ${centerX - hipWidth * 0.5} ${hipY} L ${centerX + hipWidth * 0.5} ${hipY}`,
    };
  }, [bustSize, underbustSize]);

  return (
    <svg
      viewBox="0 0 537 2040"
      className={cn("w-full h-full", className)}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Body silhouette */}
      <path
        d={paths.body}
        fill="hsl(var(--primary) / 0.1)"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
      />
      
      {/* Measurement lines */}
      <path
        d={paths.bustLine}
        stroke="hsl(var(--accent))"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
      <path
        d={paths.waistLine}
        stroke="hsl(var(--secondary))"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
      <path
        d={paths.hipLine}
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
      
      {/* Head circle */}
      <circle
        cx="268.5"
        cy="150"
        r="80"
        fill="hsl(var(--primary) / 0.1)"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
      />
    </svg>
  );
}
