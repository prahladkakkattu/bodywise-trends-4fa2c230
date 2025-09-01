import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BodyType, BodyMeasurement } from "@/types";
import { Check } from "lucide-react";

interface BodyShapeSelectionProps {
  measurements: BodyMeasurement;
  onBodyTypeSelect: (bodyType: BodyType, measurements: BodyMeasurement) => void;
  isLoading: boolean;
}

const bodyShapeData = [
  {
    type: 'apple' as BodyType,
    title: 'Apple',
    description: 'Wider upper body, broader shoulders and bust',
    svgPath: "M50 20 C55 20, 60 25, 60 30 L60 55 C60 65, 55 70, 50 70 L50 85 C52 90, 52 95, 50 100 L50 120 L45 120 L45 100 C43 95, 43 90, 45 85 L45 70 C40 70, 35 65, 35 55 L35 30 C35 25, 40 20, 45 20 L50 20 Z"
  },
  {
    type: 'pear' as BodyType,
    title: 'Pear',
    description: 'Narrower shoulders, wider hips and thighs',
    svgPath: "M50 20 C52 20, 54 22, 54 25 L54 50 C54 55, 52 60, 50 60 L50 70 C55 70, 60 75, 60 80 L60 100 C60 110, 55 120, 45 120 C40 120, 35 110, 35 100 L35 80 C35 75, 40 70, 45 70 L45 60 C43 60, 41 55, 41 50 L41 25 C41 22, 43 20, 45 20 L50 20 Z"
  },
  {
    type: 'hourglass' as BodyType,
    title: 'Hourglass',
    description: 'Balanced shoulders and hips with defined waist',
    svgPath: "M50 20 C55 20, 60 25, 60 30 L60 45 C60 50, 55 55, 50 55 C45 55, 40 50, 40 45 L40 30 C40 25, 45 20, 50 20 Z M50 65 C45 65, 40 70, 40 75 L40 90 C40 100, 45 110, 50 110 C55 110, 60 100, 60 90 L60 75 C60 70, 55 65, 50 65 Z"
  },
  {
    type: 'rectangle' as BodyType,
    title: 'Rectangle',
    description: 'Straight up and down, similar shoulder and hip width',
    svgPath: "M50 20 C52 20, 54 22, 54 25 L54 100 C54 105, 52 110, 50 110 C48 110, 46 105, 46 100 L46 25 C46 22, 48 20, 50 20 Z"
  },
  {
    type: 'inverted-triangle' as BodyType,
    title: 'Inverted Triangle',
    description: 'Broader shoulders, narrower hips',
    svgPath: "M50 20 C58 20, 65 25, 65 30 L65 50 C65 55, 60 60, 55 60 L55 70 C53 70, 51 72, 51 75 L51 100 C51 105, 49 110, 47 110 C45 110, 43 105, 43 100 L43 75 C43 72, 41 70, 39 70 L39 60 C34 60, 29 55, 29 50 L29 30 C29 25, 36 20, 44 20 L50 20 Z"
  }
];

const BodyShapeSelection = ({ measurements, onBodyTypeSelect, isLoading }: BodyShapeSelectionProps) => {
  const [selectedBodyType, setSelectedBodyType] = useState<BodyType | null>(null);

  const handleSelection = (bodyType: BodyType) => {
    setSelectedBodyType(bodyType);
  };

  const handleConfirm = () => {
    if (selectedBodyType) {
      onBodyTypeSelect(selectedBodyType, measurements);
    }
  };

  return (
    <Card className="w-full p-6 shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-2">Which body shape looks most like you?</h2>
        <p className="text-muted-foreground">
          Select the silhouette that best matches your body shape
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {bodyShapeData.map((shape) => (
          <div
            key={shape.type}
            className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedBodyType === shape.type
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50"
            }`}
            onClick={() => handleSelection(shape.type)}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="relative w-20 h-24 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 130"
                  className="w-full h-full"
                  fill="currentColor"
                >
                  <path d={shape.svgPath} className="fill-foreground/80" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-medium text-sm">{shape.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-tight">
                  {shape.description}
                </p>
              </div>
              {selectedBodyType === shape.type && (
                <div className="absolute top-2 right-2">
                  <Check className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handleConfirm}
          disabled={!selectedBodyType || isLoading}
          size="lg"
          className="min-w-[200px]"
        >
          {isLoading ? "Analyzing..." : "Confirm Selection"}
        </Button>
      </div>
    </Card>
  );
};

export default BodyShapeSelection;