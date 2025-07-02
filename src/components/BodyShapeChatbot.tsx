import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, ArrowLeft } from "lucide-react";
interface BodyShapeChatbotProps {
  open: boolean;
  onClose: () => void;
}
const BodyShapeChatbot = ({
  open,
  onClose
}: BodyShapeChatbotProps) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  if (!open) return null;
  return <div className="fixed z-50 bg-white shadow-2xl border overflow-hidden" style={{
    width: '440px',
    height: '80vh',
    maxHeight: '956px',
    bottom: '20px',
    right: '20px',
    borderRadius: '30px'
  }}>
      {/* Header */}
      <div className="bg-gray-100 p-4 relative">
        <Button variant="ghost" size="icon" className="absolute top-2 left-2 h-8 w-8" onClick={onClose}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex flex-col items-center pt-6">
          <div className="text-2xl font-bold mb-1">
            <span className="text-black"></span>
          </div>
          <div className="text-xl font-bold text-[#a12e1d] relative">
            Know your bodyshape
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#a12e1d]"></div>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#a12e1d] opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <div className="space-y-6 flex-1">
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">Height</label>
            <div className="flex items-center gap-2">
              <Input value={height} onChange={e => setHeight(e.target.value)} className="w-20 h-9 text-center" placeholder="" />
              <span className="text-gray-400 text-sm">cm</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">Weight</label>
            <div className="flex items-center gap-2">
              <Input value={weight} onChange={e => setWeight(e.target.value)} className="w-20 h-9 text-center" placeholder="" />
              <span className="text-gray-400 text-sm">cm</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">Age</label>
            <div className="flex items-center gap-2">
              <Input value={age} onChange={e => setAge(e.target.value)} className="w-20 h-9 text-center" placeholder="" />
              <span className="text-gray-400 text-sm">cm</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto space-y-4">
          <div className="text-center">
            <span className="text-[#a12e1d] text-sm">Already have an account? Sign in.</span>
          </div>
          
          <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white rounded-full h-12">
            Next
          </Button>
          
          <div className="text-center pt-4">
            <div className="text-xl font-bold text-gray-400 mb-2">
              <span>STYLEMY</span>
              <div className="text-sm">FIT</div>
              <div className="h-0.5 bg-gray-300 mt-1"></div>
            </div>
            <p className="text-xs text-gray-400 leading-tight">
              StyleMy Fit logo are trademarks or registered trademarks of<br />
              StyleMy Fit, LLC. or its subsidiaries in the United Kingdom and<br />
              other countries. Other brands and names may be claimed as<br />
              the property of others.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default BodyShapeChatbot;
