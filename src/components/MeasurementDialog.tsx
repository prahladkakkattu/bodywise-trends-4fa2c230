
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface MeasurementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNext: () => void;
}

const MeasurementDialog = ({ open, onOpenChange, onNext }: MeasurementDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="fixed bottom-4 right-4 w-[380px] h-[680px] p-0 border-none shadow-2xl bg-white rounded-[30px] overflow-hidden"
        style={{ 
          transform: 'none',
          maxWidth: '380px'
        }}
      >
        <div className="relative flex flex-col h-full bg-gradient-to-br from-gray-100 to-gray-200">
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
          <div className="flex-1 flex flex-col items-center justify-center px-8 pb-16">
            {/* Logo */}
            <div className="text-center mb-12">
              <div className="mb-2">
                <span className="text-4xl font-bold text-black tracking-wider">
                  STYLEMY
                </span>
              </div>
              <div className="relative">
                <span className="text-4xl font-bold text-red-600 tracking-wider">
                  FIT
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600"></div>
              </div>
            </div>

            {/* Welcome text */}
            <div className="text-center mb-16 px-4">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                Welcome to Stylemyfit, your personal style assistant. Discover your perfect fit and style preferences with ease.
              </p>
            </div>

            {/* Next button */}
            <Button 
              onClick={onNext}
              className="bg-gray-600 hover:bg-gray-700 text-white px-12 py-3 rounded-full text-lg font-medium"
            >
              Next
            </Button>
          </div>

          {/* Footer logo and disclaimer */}
          <div className="absolute bottom-6 right-6 text-right">
            <div className="mb-2">
              <div className="text-gray-400 font-bold text-lg tracking-wider">STYLEMY</div>
              <div className="text-gray-400 font-bold text-lg tracking-wider relative">
                FIT
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-400"></div>
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
