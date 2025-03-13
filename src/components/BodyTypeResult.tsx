
import { Card } from "@/components/ui/card";
import { BodyType } from "@/types";
import { getBodyTypeDescription, getBodyTypeStyleTips } from "@/utils/bodyTypeUtils";
import { Check } from "lucide-react";

interface BodyTypeResultProps {
  bodyType: BodyType;
}

const BodyTypeResult = ({ bodyType }: BodyTypeResultProps) => {
  const description = getBodyTypeDescription(bodyType);
  const styleTips = getBodyTypeStyleTips(bodyType);
  
  // Capitalize bodyType for display
  const formattedBodyType = bodyType
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  if (bodyType === "unknown") {
    return (
      <Card className="w-full p-6 shadow-md bg-muted/50">
        <h2 className="text-xl font-semibold text-center mb-4">We Need More Information</h2>
        <p className="text-center text-muted-foreground mb-4">
          The measurements provided don't clearly indicate a specific body type. 
          Try adjusting your measurements for a more accurate result.
        </p>
      </Card>
    );
  }
  
  return (
    <Card className="w-full p-6 shadow-md bg-brand-100/50">
      <h2 className="text-2xl font-semibold text-center mb-2">
        <span className="text-brand-600">Your Body Type:</span> <span className="text-brand-300 font-bold">{formattedBodyType}</span>
      </h2>
      
      <p className="text-center text-muted-foreground mb-6">
        {description}
      </p>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Style Tips for Your Body Type:</h3>
        <ul className="space-y-2">
          {styleTips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-brand-300 mt-0.5 flex-shrink-0" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default BodyTypeResult;
