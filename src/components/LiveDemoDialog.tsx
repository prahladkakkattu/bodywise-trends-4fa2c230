
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

interface LiveDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LiveDemoDialog = ({ open, onOpenChange }: LiveDemoDialogProps) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log({ height, weight, age });
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[350px] sm:w-[400px] bg-fashion-beige/95 bottom-0 top-auto h-auto rounded-tr-lg shadow-lg border-t border-r">
        <SheetHeader>
          <SheetTitle className="sr-only">Live Demo</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col gap-6 pt-2">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/e180d18c-55a7-42a8-ac5e-cb13e7517e1a.png"
              alt="StyleMyFit Logo"
              className="h-8"
            />
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center justify-between">
              <label htmlFor="height" className="text-lg font-medium text-fashion-teal">Height</label>
              <Input
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-32 bg-white"
                placeholder="cm"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label htmlFor="weight" className="text-lg font-medium text-fashion-teal">Weight</label>
              <Input
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-32 bg-white"
                placeholder="kg"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label htmlFor="age" className="text-lg font-medium text-fashion-teal">Age</label>
              <Input
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-32 bg-white"
                placeholder="years"
              />
            </div>
            
            <div className="text-fashion-coral text-center mt-5">
              <span>Already have an account? </span>
              <Link to="/" className="underline font-medium">Sign in.</Link>
            </div>
            
            <div className="flex justify-center pt-2">
              <Button
                type="submit"
                className="bg-[#666] hover:bg-[#555] text-white w-full max-w-[160px]"
              >
                Next
              </Button>
            </div>
          </form>
          
          <div className="text-xs text-[#666] text-center mt-6 mb-2">
            <img 
              src="/lovable-uploads/e180d18c-55a7-42a8-ac5e-cb13e7517e1a.png"
              alt="StyleMyFit Logo"
              className="h-4 mx-auto mb-2"
            />
            StyleMyFit® is owned and operated by StyleMyFit Pty. LLC. 
            Or its subsidiaries in the United Kingdom and other jurisdictions. Other marks and names may be claimed as 
            the property of others.
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LiveDemoDialog;
