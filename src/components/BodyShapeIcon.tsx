
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
        return "/lovable-uploads/ba1c269f-6b5c-4956-843b-01a19529bf8f.png"; // Apple/oval shape
      case "rectangle":
        return "/lovable-uploads/466b805a-012e-474b-9fef-42d90cdacff2.png"; // Rectangle shape
      case "pear":
        return "/lovable-uploads/4db74749-7d68-41b5-9548-503eb365212d.png"; // Pear/triangle shape
      case "hourglass":
        return "/lovable-uploads/fc8516fe-6316-4407-8719-7cbbad7dc09d.png"; // Hourglass shape
      case "inverted-triangle":
        return "/lovable-uploads/e7bff7ff-17bb-4b0c-9725-57299ebf9e10.png"; // Inverted triangle shape
      default:
        return "/lovable-uploads/466b805a-012e-474b-9fef-42d90cdacff2.png"; // Default to rectangle
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
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
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
