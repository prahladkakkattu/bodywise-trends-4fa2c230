import { BodyType } from "@/types";
import BodyShapeIcon from "./BodyShapeIcon";

interface BodyShapeHolderProps {
  bodyTypes: BodyType[];
  className?: string;
}

const BodyShapeHolder = ({ bodyTypes, className = "" }: BodyShapeHolderProps) => {
  if (!bodyTypes.length) return null;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {bodyTypes.map((bodyType, index) => (
        <div 
          key={index} 
          className="bg-white/90 backdrop-blur-sm rounded p-1 shadow-sm border border-white/50"
        >
          <BodyShapeIcon bodyType={bodyType} size="sm" />
        </div>
      ))}
    </div>
  );
};

export default BodyShapeHolder;