
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { BodyType } from "@/types";

interface BodyShapeIconProps {
  bodyType: BodyType;
  size?: "sm" | "md" | "lg";
}

const BodyShapeIcon = ({ bodyType, size = "md" }: BodyShapeIconProps) => {
  const getBodyShapeImage = (type: BodyType) => {
    switch (type) {
      case "apple":
        return "/lovable-uploads/7941f89d-5e17-4443-b299-84a331e24ff9.png";
      case "rectangle":
        return "/lovable-uploads/86e13313-29a0-40c8-95b5-844fa2119cf6.png";
      case "pear":
        return "/lovable-uploads/6e605906-05a8-4fcf-ab87-a8e66e8589cf.png";
      case "hourglass":
        return "/lovable-uploads/7b81f6a2-a4aa-47a1-ace1-fcb17e58946a.png";
      case "inverted-triangle":
        return "/lovable-uploads/845b34bb-5bea-4ca6-af9b-8c2710b0aa37.png";
      default:
        return "/lovable-uploads/86e13313-29a0-40c8-95b5-844fa2119cf6.png";
    }
  };

  const getBodyShapeLabel = (type: BodyType) => {
    switch (type) {
      case "hourglass":
        return "Hourglass";
      case "pear":
        return "Pear";
      case "apple":
        return "Apple";
      case "rectangle":
        return "Rectangle";
      case "inverted-triangle":
        return "Inverted Triangle";
      default:
        return "Unknown";
    }
  };

  const getTooltipText = (type: BodyType) => {
    switch (type) {
      case "hourglass":
        return "Suitable for Hourglass bodyshape";
      case "pear":
        return "Suitable for Pear bodyshape";
      case "apple":
        return "Suitable for Apple bodyshape";
      case "rectangle":
        return "Suitable for Rectangle bodyshape";
      case "inverted-triangle":
        return "Suitable for Inverted Triangle bodyshape";
      default:
        return "Suitable for Unknown bodyshape";
    }
  };

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`inline-flex items-center justify-center cursor-help ${sizeClasses[size]}`}>
            <img 
              src={getBodyShapeImage(bodyType)}
              alt={getBodyShapeLabel(bodyType)}
              className="w-full h-full object-contain"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getTooltipText(bodyType)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BodyShapeIcon;
