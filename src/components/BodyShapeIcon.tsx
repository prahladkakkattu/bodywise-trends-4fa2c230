
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { BodyType } from "@/types";

interface BodyShapeIconProps {
  bodyType: BodyType;
  size?: "sm" | "md" | "lg";
}

const BodyShapeIcon = ({ bodyType, size = "md" }: BodyShapeIconProps) => {
  const getBodyShapeIcon = (type: BodyType) => {
    switch (type) {
      case "hourglass":
        return "⧗"; // Hourglass symbol
      case "pear":
        return "🍐"; // Pear emoji
      case "apple":
        return "🍎"; // Apple emoji
      case "rectangle":
        return "▬"; // Rectangle symbol
      case "inverted-triangle":
        return "🔺"; // Triangle symbol
      default:
        return "?";
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

  const getBodyShapeColor = (type: BodyType) => {
    switch (type) {
      case "hourglass":
        return "bg-fashion-coral";
      case "pear":
        return "bg-green-600";
      case "apple":
        return "bg-blue-600";
      case "rectangle":
        return "bg-purple-600";
      case "inverted-triangle":
        return "bg-orange-600";
      default:
        return "bg-gray-600";
    }
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2 py-1", 
    lg: "text-base px-3 py-2"
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={`inline-flex items-center justify-center rounded-full text-white font-medium ${getBodyShapeColor(bodyType)} ${sizeClasses[size]} cursor-help`}>
            {getBodyShapeIcon(bodyType)}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getBodyShapeLabel(bodyType)} Body Shape</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BodyShapeIcon;
