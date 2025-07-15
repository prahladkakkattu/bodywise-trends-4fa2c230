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
        <BodyShapeIcon key={index} bodyType={bodyType} size="sm" />
      ))}
    </div>
  );
};

export default BodyShapeHolder;