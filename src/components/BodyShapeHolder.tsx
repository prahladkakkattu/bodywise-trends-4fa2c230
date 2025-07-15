import { BodyType } from "@/types";
import BodyShapeIcon from "./BodyShapeIcon";

interface BodyShapeHolderProps {
  bodyTypes: BodyType[];
  className?: string;
}

const BodyShapeHolder = ({ bodyTypes, className = "" }: BodyShapeHolderProps) => {
  if (!bodyTypes.length) return null;

  return (
    <div className={`inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-sm border border-white/50 ${className}`}>
      <div className="flex gap-0.5">
        {bodyTypes.map((bodyType, index) => (
          <div 
            key={index} 
            className="bg-fashion-beige/20 rounded-full p-1 border border-fashion-beige/30"
          >
            <BodyShapeIcon bodyType={bodyType} size="sm" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyShapeHolder;