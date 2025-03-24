
import { Card, CardContent } from "@/components/ui/card";
import { Ruler, CircleHelp } from "lucide-react";

const QuickMeasurementGuide = () => {
  return (
    <Card className="w-full max-w-xl shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <CircleHelp className="h-5 w-5 text-brand-300" />
          <h2 className="text-xl font-semibold">Measurement Guide</h2>
        </div>
        
        <p className="text-sm text-muted-foreground mb-6">
          No measuring tape? No problem! Here's how to get accurate measurements using everyday items.
        </p>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-brand-100 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
              <span className="text-brand-500 font-semibold">1</span>
            </div>
            <div>
              <h3 className="font-medium mb-1">Bust/Chest</h3>
              <p className="text-sm text-muted-foreground">
                Wrap a string around the fullest part of your chest. Mark where it meets, then measure against a ruler or phone (typical phone is 6 inches).
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-brand-100 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
              <span className="text-brand-500 font-semibold">2</span>
            </div>
            <div>
              <h3 className="font-medium mb-1">Waist</h3>
              <p className="text-sm text-muted-foreground">
                Use a belt or cord around your natural waistline (smallest part). Mark it and measure against a standard sheet of paper (11 inches wide).
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-brand-100 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
              <span className="text-brand-500 font-semibold">3</span>
            </div>
            <div>
              <h3 className="font-medium mb-1">Hips</h3>
              <p className="text-sm text-muted-foreground">
                Wrap string around the widest part of your hips. A standard doorknob is about 2.5 inches - you can use multiples to estimate.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-brand-100 rounded-full p-3 h-12 w-12 flex items-center justify-center shrink-0">
              <span className="text-brand-500 font-semibold">4</span>
            </div>
            <div>
              <h3 className="font-medium mb-1">Shoulders</h3>
              <p className="text-sm text-muted-foreground">
                Measure across your back from the end of one shoulder to the other. A standard credit card is 3.37 inches - use multiples to estimate.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center">
            <Ruler className="text-brand-300 h-5 w-5 mr-2" />
            <p className="text-sm font-medium">Tip: For even better results, take photos of yourself from the front and side to help determine your overall body shape.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickMeasurementGuide;
