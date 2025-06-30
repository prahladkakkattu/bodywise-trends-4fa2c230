
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, User } from "lucide-react";
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
      <DialogContent className="fixed bottom-4 right-4 w-96 h-[600px] max-w-none p-0 border-none shadow-xl bg-white rounded-lg translate-x-0 translate-y-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8 p-0"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <User className="h-6 w-6 text-gray-600" />
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-6 overflow-y-auto">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-800 mb-6">
                Let's start by selecting your body dimensions
              </h2>
            </div>

            {/* Measurement Selection */}
            <div className="space-y-3">
              {measurements.map((measurement) => (
                <Button
                  key={measurement}
                  variant={selectedMeasurement === measurement ? "default" : "outline"}
                  className={`w-full justify-start ${
                    selectedMeasurement === measurement 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setSelectedMeasurement(measurement)}
                >
                  {measurement}
                </Button>
              ))}
            </div>

            {/* Body Silhouette */}
            <div className="flex justify-center py-4">
              <div className="relative">
                <div className="w-32 h-48 bg-gray-800 rounded-full opacity-80 relative">
                  {/* Measurement indicators */}
                  <div className="absolute right-0 top-8 w-8 h-0.5 bg-red-500"></div>
                  <div className="absolute right-0 top-16 w-8 h-0.5 bg-gray-400"></div>
                  <div className="absolute right-0 top-24 w-8 h-0.5 bg-gray-400"></div>
                  <div className="absolute right-0 top-32 w-8 h-0.5 bg-gray-400"></div>
                </div>
                <div className="absolute top-0 left-0 text-xs text-gray-600 font-medium">
                  STYLEMY<br />FIT
                </div>
              </div>
            </div>

            {/* Fit Preference */}
            <div className="space-y-3">
              <h3 className="text-center text-gray-700 font-medium">
                How would you like your fit?
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {fitOptions.slice(0, 3).map((option) => (
                  <Button
                    key={option}
                    variant={fitPreference === option ? "default" : "outline"}
                    className={`text-sm ${
                      fitPreference === option 
                        ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setFitPreference(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {fitOptions.slice(3).map((option) => (
                  <Button
                    key={option}
                    variant={fitPreference === option ? "default" : "outline"}
                    className={`text-sm ${
                      fitPreference === option 
                        ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setFitPreference(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            {/* Shoulder Type */}
            <div className="space-y-3">
              <h3 className="text-center text-gray-700 font-medium">
                What best describes your shoulders?
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {['Narrow', 'Average', 'Broad'].map((option) => (
                  <Button
                    key={option}
                    variant={shoulderType === option ? "default" : "outline"}
                    className={`text-sm ${
                      shoulderType === option 
                        ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setShoulderType(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            {/* Measurement Slider */}
            <div className="space-y-3">
              <h3 className="text-center text-red-600 font-medium">
                Adjust to your exact measurement
              </h3>
              <div className="px-4">
                <Slider
                  value={[measurementValue]}
                  onValueChange={(value) => setMeasurementValue(value[0])}
                  max={50}
                  step={1}
                  className="w-full"
                />
                <div className="text-center text-2xl font-bold text-gray-800 mt-2">
                  {measurementValue}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <Button 
              onClick={onNext}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-full py-3"
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
