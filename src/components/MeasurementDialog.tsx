
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, User, X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface MeasurementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNext: () => void;
}

const MeasurementDialog = ({ open, onOpenChange, onNext }: MeasurementDialogProps) => {
  const [selectedMeasurement, setSelectedMeasurement] = useState<string>('Bust');
  const [fitPreference, setFitPreference] = useState<string>('');
  const [sizeSystem, setSizeSystem] = useState<string>('UK');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const measurements = ['Shoulders', 'Bust', 'Waist', 'Hips'];
  const fitOptions = ['Narrow', 'Average', 'Broad', 'Very Narrow', 'Very Broad'];
  const sizeNumbers = ['28', '30', '32', '34', '36', '38', '40', '42'];

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="fixed bottom-4 right-4 w-[440px] h-[70vh] max-h-[600px] p-0 border-none shadow-2xl bg-white rounded-[30px] overflow-hidden"
        style={{ 
          transform: 'none',
          maxWidth: '440px'
        }}
      >
        {/* Background overlay */}
        <div 
          className="absolute w-[390px] h-full left-0 top-0 opacity-60 rounded-[30px]"
          style={{ background: '#E7E4DF' }}
        />
        
        <div className="relative flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 flex-shrink-0">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-9 w-9 p-0 text-black hover:bg-black/10 z-10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-9 w-9 p-0 text-black hover:bg-black/10 z-10"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Title */}
          <div className="px-6 mb-4 flex-shrink-0">
            <div 
              className="w-full h-[80px] flex items-center justify-center text-center border border-black/20 rounded-lg bg-white/80"
              style={{ 
                fontFamily: 'Kumbh Sans, sans-serif',
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#000000'
              }}
            >
              Let's start by selecting your body dimensions
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-6 space-y-4 min-h-0">
            {/* Measurement buttons */}
            <div className="space-y-2">
              {measurements.map((measurement) => (
                <Button
                  key={measurement}
                  variant={selectedMeasurement === measurement ? "default" : "outline"}
                  className={`w-[115px] h-[35px] justify-center text-[20px] rounded-[10px] ${
                    selectedMeasurement === measurement 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-black border-gray-300'
                  }`}
                  style={{
                    fontFamily: 'Ubuntu Sans, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '-0.23px'
                  }}
                  onClick={() => setSelectedMeasurement(measurement)}
                >
                  {measurement}
                </Button>
              ))}
            </div>

            {/* Body silhouette section */}
            <div 
              className="w-full h-[200px] rounded-lg relative flex items-center justify-center"
              style={{ 
                background: '#9E9790',
                boxShadow: 'inset 0px 100px 60px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Body shape visualization */}
              <div className="relative w-20 h-32">
                <div className="w-full h-full bg-black/30 rounded-full opacity-80 relative">
                  {/* Measurement pointers */}
                  <div className="absolute right-0 top-4 w-4 h-0.5 bg-red-500 opacity-70"></div>
                  <div className="absolute right-0 top-8 w-4 h-0.5 bg-gray-400 opacity-60"></div>
                  <div className="absolute right-0 top-16 w-4 h-0.5 bg-gray-400 opacity-60"></div>
                  <div className="absolute right-0 top-20 w-4 h-0.5 bg-gray-400 opacity-60"></div>
                </div>
                {/* Logo */}
                <div className="absolute left-0 top-0 text-[10px] font-medium text-black/70">
                  StyleMyFit
                </div>
              </div>
            </div>

            {/* Fit preference question */}
            <div className="text-center mb-4">
              <h3 
                className="text-[18px] font-normal text-center"
                style={{
                  fontFamily: 'Ubuntu Sans, sans-serif',
                  letterSpacing: '-0.23px',
                  color: '#1E1E1E'
                }}
              >
                How would you like your fit?
              </h3>
            </div>

            {/* Fit preference buttons */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              {fitOptions.slice(0, 3).map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className={`h-[35px] text-[20px] rounded-[10px] ${
                    fitPreference === option 
                      ? 'bg-gray-800 text-white border-gray-800' 
                      : 'bg-white text-black border-gray-200'
                  }`}
                  style={{
                    fontFamily: 'Ubuntu Sans, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '-0.23px'
                  }}
                  onClick={() => setFitPreference(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {fitOptions.slice(3).map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className={`h-[30px] text-[16px] rounded-[10px] ${
                    fitPreference === option 
                      ? 'bg-gray-800 text-white border-gray-800' 
                      : 'bg-white text-black border-gray-200'
                  }`}
                  style={{
                    fontFamily: 'Ubuntu Sans, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '-0.23px'
                  }}
                  onClick={() => setFitPreference(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Size selection */}
            <div className="text-center mb-4">
              <div className="relative inline-flex items-center">
                <h3 
                  className="text-[18px] font-normal mr-4"
                  style={{
                    fontFamily: 'Ubuntu Sans, sans-serif',
                    letterSpacing: '-0.23px',
                    color: '#1E1E1E'
                  }}
                >
                  Select your size
                </h3>
                <div className="relative">
                  <div 
                    className="bg-white border border-gray-200 rounded-lg px-3 py-1 flex items-center cursor-pointer"
                  >
                    <span 
                      className="text-[18px] mr-2"
                      style={{
                        fontFamily: 'Ubuntu Sans, sans-serif',
                        color: '#1E1E1E'
                      }}
                    >
                      {sizeSystem}
                    </span>
                    <ChevronDown className="h-4 w-4 rotate-180" />
                  </div>
                </div>
              </div>
            </div>

            {/* Size number grid */}
            <div className="grid grid-cols-8 gap-2 mb-4">
              {sizeNumbers.map((size) => (
                <Button
                  key={size}
                  variant="outline"
                  className={`w-[35px] h-[35px] p-0 text-[20px] rounded-[10px] ${
                    selectedSizes.includes(size)
                      ? 'bg-gray-800 text-white border-gray-800'
                      : 'bg-white text-black border-gray-200'
                  }`}
                  style={{
                    fontFamily: 'Ubuntu Sans, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '-0.23px'
                  }}
                  onClick={() => handleSizeToggle(size)}
                >
                  {size}
                </Button>
              ))}
            </div>

            {/* Additional size rows */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              {['40', '42', '44', '46'].map((size) => (
                <Button
                  key={size}
                  variant="outline"
                  className={`w-[35px] h-[35px] p-0 text-[20px] rounded-[10px] ${
                    selectedSizes.includes(size)
                      ? 'bg-gray-800 text-white border-gray-800'
                      : 'bg-white text-black border-gray-200'
                  }`}
                  style={{
                    fontFamily: 'Ubuntu Sans, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '-0.23px'
                  }}
                  onClick={() => handleSizeToggle(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Next button */}
          <div className="p-6 flex-shrink-0">
            <Button 
              onClick={onNext}
              className="w-[150px] h-[49px] mx-auto block rounded-[20px] text-[20px] text-white"
              style={{
                background: '#6A645E',
                fontFamily: 'Ubuntu Sans, sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.23px'
              }}
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
