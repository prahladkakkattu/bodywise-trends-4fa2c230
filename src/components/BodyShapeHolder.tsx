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
      {/* Gradient overlay for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/60 pointer-events-none" />
      
      {bodyTypes.map((bodyType, index) => (
        <div key={index} className="relative z-10">
          <BodyShapeIcon bodyType={bodyType} size="sm" />
        </div>
      ))}
    </div>
  );
};

export default BodyShapeHolder;