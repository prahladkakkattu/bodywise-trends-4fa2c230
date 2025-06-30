
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface WelcomeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNext: () => void;
}

const WelcomeDialog = ({ open, onOpenChange, onNext }: WelcomeDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm mx-auto bg-fashion-beige/5 border-none shadow-lg">
        <DialogHeader className="space-y-0 pb-0">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8 p-0"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <span className="text-2xl font-bold text-fashion-teal tracking-wider">
                  STYLEMY
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl font-bold text-fashion-coral tracking-wider border-b-2 border-fashion-coral pb-1">
                  FIT
                </span>
                <div className="ml-2 h-4 w-8 bg-fashion-coral/20 rounded"></div>
              </div>
            </div>
            
            <div className="py-8">
              <p className="text-fashion-teal/80 text-base leading-relaxed px-4">
                Welcome to Stylemyfit, your personal style assistant. Discover your perfect fit and style preferences with ease.
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                onClick={onNext}
                className="bg-fashion-teal/80 hover:bg-fashion-teal text-white px-8 py-2 rounded-full"
              >
                Next
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <div className="absolute bottom-4 right-4">
          <div className="text-right text-xs text-fashion-teal/40 space-y-1">
            <div className="font-bold tracking-wider">STYLEMY</div>
            <div className="font-bold tracking-wider border-b border-fashion-teal/40 pb-1">FIT</div>
            <div className="text-[10px] leading-tight max-w-[120px]">
              StyleMy Fit logo are trademarks or registered trademarks of StyleMy Fit, LLC. Or its subsidiaries in the United Kingdom and other countries. Other brands and names may be claimed as the property of others.
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;
