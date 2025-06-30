
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, User, X } from "lucide-react";
import { useState } from "react";

interface MeasurementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNext: () => void;
}

const MeasurementDialog = ({ open, onOpenChange, onNext }: MeasurementDialogProps) => {
  const [selectedMeasurement, setSelectedMeasurement] = useState<string>('Shoulders');
  const [fitPreference, setFitPreference] = useState<string>('');
  const [shoulderType, setShoulderType] = useState<string>('');
  const [measurementValue, setMeasurementValue] = useState<number>(0);

  const measurements = ['Shoulders', 'Bust', 'Waist', 'Hips'];
  const fitOptions = ['Narrow', 'Average', 'Broad', 'Very Narrow', 'Very Broad'];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed bottom-4 right-4 w-80 h-[500px] max-w-none p-0 border-none shadow-2xl bg-white rounded-2xl translate-x-0 translate-y-0 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-fashion-teal">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-7 w-7 p-0 text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-white" />
              <span className="text-white font-medium text-sm">StyleMyFit</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-7 w-7 p-0 text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 p-3 space-y-4 overflow-y-auto">
            <div className="text-center">
              <h2 className="text-sm font-medium text-fashion-teal mb-3">
                Let's start by selecting your body dimensions
              </h2>
            </div>

            {/* Measurement Selection */}
            <div className="space-y-2">
              {measurements.map((measurement) => (
                <Button
                  key={measurement}
                  variant={selectedMeasurement === measurement ? "default" : "outline"}
                  className={`w-full justify-start text-xs h-8 ${
                    selectedMeasurement === measurement 
                      ? 'bg-fashion-coral hover:bg-fashion-coral/90 text-white' 
                      : 'bg-gray-50 hover:bg-gray-100 text-fashion-teal border-gray-200'
                  }`}
                  onClick={() => setSelectedMeasurement(measurement)}
                >
                  {measurement}
                </Button>
              ))}
            </div>

            {/* Body Silhouette */}
            <div className="flex justify-center py-2">
              <div className="relative">
                <div className="w-20 h-32 bg-fashion-teal rounded-full opacity-80 relative">
                  {/* Measurement indicators */}
                  <div className="absolute right-0 top-6 w-4 h-0.5 bg-fashion-coral"></div>
                  <div className="absolute right-0 top-10 w-4 h-0.5 bg-gray-400"></div>
                  <div className="absolute right-0 top-16 w-4 h-0.5 bg-gray-400"></div>
                  <div className="absolute right-0 top-20 w-4 h-0.5 bg-gray-400"></div>
                </div>
                <div className="absolute -top-2 -left-2 text-xs text-fashion-teal font-medium">
                  STYLEMY<br />FIT
                </div>
              </div>
            </div>

            {/* Fit Preference */}
            <div className="space-y-2">
              <h3 className="text-center text-fashion-teal font-medium text-xs">
                How would you like your fit?
              </h3>
              <div className="grid grid-cols-3 gap-1">
                {fitOptions.slice(0, 3).map((option) => (
                  <Button
                    key={option}
                    variant={fitPreference === option ? "default" : "outline"}
                    className={`text-xs h-7 ${
                      fitPreference === option 
                        ? 'bg-fashion-teal hover:bg-fashion-teal/90 text-white' 
                        : 'bg-gray-50 hover:bg-gray-100 text-fashion-teal border-gray-200'
                    }`}
                    onClick={() => setFitPreference(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-1">
                {fitOptions.slice(3).map((option) => (
                  <Button
                    key={option}
                    variant={fitPreference === option ? "default" : "outline"}
                    className={`text-xs h-7 ${
                      fitPreference === option 
                        ? 'bg-fashion-teal hover:bg-fashion-teal/90 text-white' 
                        : 'bg-gray-50 hover:bg-gray-100 text-fashion-teal border-gray-200'
                    }`}
                    onClick={() => setFitPreference(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            {/* Shoulder Type */}
            <div className="space-y-2">
              <h3 className="text-center text-fashion-teal font-medium text-xs">
                What best describes your shoulders?
              </h3>
              <div className="grid grid-cols-3 gap-1">
                {['Narrow', 'Average', 'Broad'].map((option) => (
                  <Button
                    key={option}
                    variant={shoulderType === option ? "default" : "outline"}
                    className={`text-xs h-7 ${
                      shoulderType === option 
                        ? 'bg-fashion-teal hover:bg-fashion-teal/90 text-white' 
                        : 'bg-gray-50 hover:bg-gray-100 text-fashion-teal border-gray-200'
                    }`}
                    onClick={() => setShoulderType(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            {/* Measurement Slider */}
            <div className="space-y-2">
              <h3 className="text-center text-fashion-coral font-medium text-xs">
                Adjust to your exact measurement
              </h3>
              <div className="px-2">
                <Slider
                  value={[measurementValue]}
                  onValueChange={(value) => setMeasurementValue(value[0])}
                  max={50}
                  step={1}
                  className="w-full"
                />
                <div className="text-center text-lg font-bold text-fashion-teal mt-1">
                  {measurementValue}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-50">
            <Button 
              onClick={onNext}
              className="w-full bg-fashion-teal hover:bg-fashion-teal/90 text-white rounded-full py-2 text-sm h-9"
            >
              Next
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeasurementDialog;
