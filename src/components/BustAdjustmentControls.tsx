import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

interface BustAdjustmentControlsProps {
  bustSize: number;
  underbustSize: number;
  onBustChange: (bustSize: number, underbustSize: number) => void;
}

export function BustAdjustmentControls({
  bustSize,
  underbustSize,
  onBustChange,
}: BustAdjustmentControlsProps) {
  return (
    <div className="w-full max-w-md space-y-6 p-6 bg-card rounded-lg border">
      <div>
        <h3 className="text-lg font-semibold mb-4">Adjust Your Measurements</h3>
        <p className="text-sm text-muted-foreground">
          Fine-tune your body shape by adjusting bust and waist measurements
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bust" className="text-sm font-medium">
            Bust/Shoulder (inches)
          </Label>
          <div className="flex gap-4 items-center">
            <Slider
              id="bust"
              min={26}
              max={50}
              step={0.5}
              value={[bustSize]}
              onValueChange={([value]) => onBustChange(value, underbustSize)}
              className="flex-1"
            />
            <Input
              type="number"
              value={bustSize}
              onChange={(e) => onBustChange(Number(e.target.value), underbustSize)}
              className="w-20"
              min={26}
              max={50}
              step={0.5}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="underbust" className="text-sm font-medium">
            Waist/Underbust (inches)
          </Label>
          <div className="flex gap-4 items-center">
            <Slider
              id="underbust"
              min={26}
              max={50}
              step={0.5}
              value={[underbustSize]}
              onValueChange={([value]) => onBustChange(bustSize, value)}
              className="flex-1"
            />
            <Input
              type="number"
              value={underbustSize}
              onChange={(e) => onBustChange(bustSize, Number(e.target.value))}
              className="w-20"
              min={26}
              max={50}
              step={0.5}
            />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="text-sm space-y-1">
          <p className="text-muted-foreground">
            <span className="font-medium">Ratio:</span> {(bustSize / underbustSize).toFixed(2)}
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium">Difference:</span> {(bustSize - underbustSize).toFixed(1)}"
          </p>
        </div>
      </div>
    </div>
  );
}
