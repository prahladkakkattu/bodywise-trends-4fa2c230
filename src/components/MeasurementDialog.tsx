
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface MeasurementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNext: () => void;
}

const MeasurementDialog = ({ open, onOpenChange, onNext }: MeasurementDialogProps) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="fixed bottom-4 right-4 w-[420px] h-[700px] p-0 border-none shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 rounded-[30px] overflow-hidden"
        style={{ 
          transform: 'none',
          maxWidth: '420px'
        }}
      >
        <div className="relative flex flex-col h-full">
          {/* Header with back arrow */}
          <div className="flex items-start justify-start p-6 pt-8 relative z-10">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-10 w-10 p-0 text-black hover:bg-black/10"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col items-center px-8 pb-8">
            {/* Logo */}
            <div className="text-center mb-12">
              <div className="mb-2">
                <span className="text-4xl font-bold text-black tracking-wider" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  STYLEMY
                </span>
              </div>
              <div className="relative">
                <span className="text-4xl font-bold text-red-600 tracking-wider" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  FIT
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 bg-gradient-to-r from-red-600 to-red-700" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 3px)'
                }}></div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="w-full max-w-[280px] space-y-8">
              {/* Height Field */}
              <div className="space-y-3">
                <label className="text-2xl font-light text-gray-800">Height</label>
                <div className="relative">
                  <Input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full h-12 bg-white/80 border-none rounded-full px-4 text-gray-600 text-center text-lg"
                    placeholder=""
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    cm
                  </div>
                </div>
              </div>

              {/* Weight Field */}
              <div className="space-y-3">
                <label className="text-2xl font-light text-gray-800">Weight</label>
                <div className="relative">
                  <Input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full h-12 bg-white/80 border-none rounded-full px-4 text-gray-600 text-center text-lg"
                    placeholder=""
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    kg
                  </div>
                </div>
              </div>

              {/* Age Field */}
              <div className="space-y-3">
                <label className="text-2xl font-light text-gray-800">Age</label>
                <div className="relative">
                  <Input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full h-12 bg-white/80 border-none rounded-full px-4 text-gray-600 text-center text-lg"
                    placeholder=""
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    years
                  </div>
                </div>
              </div>
            </div>

            {/* Sign in text */}
            <div className="mt-8 mb-8">
              <p className="text-red-600 text-base">
                Already have an account? Sign in.
              </p>
            </div>

            {/* Next button */}
            <Button 
              onClick={onNext}
              className="bg-gray-600 hover:bg-gray-700 text-white px-12 py-3 rounded-full text-lg font-medium w-40 h-12"
            >
              Next
            </Button>
          </div>

          {/* Footer logo and disclaimer */}
          <div className="absolute bottom-6 right-6 text-right">
            <div className="mb-2">
              <div className="text-gray-400 font-bold text-lg tracking-wider" style={{ fontFamily: 'Arial Black, sans-serif' }}>STYLEMY</div>
              <div className="text-gray-400 font-bold text-lg tracking-wider relative" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                FIT
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-400" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.3) 1px, rgba(255,255,255,0.3) 2px)'
                }}></div>
              </div>
            </div>
            <div className="text-xs text-gray-400 leading-tight max-w-[140px] mt-2">
              StyleMy Fit logo are trademarks or registered trademarks of StyleMy Fit, LLC. Or its subsidiaries in the United Kingdom and other countries. Other brands and names may be claimed as the property of others.
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/20 opacity-50"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeasurementDialog;
