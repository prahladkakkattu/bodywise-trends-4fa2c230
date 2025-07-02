
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

interface BodyShapeChatbotProps {
  open: boolean;
  onClose: () => void;
}

const BodyShapeChatbot = ({ open, onClose }: BodyShapeChatbotProps) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

  if (!open) return null;

  return (
    <div 
      className="fixed z-50 bg-gray-100 shadow-2xl border overflow-hidden flex flex-col"
      style={{
        width: '440px',
        height: '956px',
        top: '-17px',
        left: '107px',
        borderRadius: '30px'
      }}
    >
      {/* Header with back arrow */}
      <div className="relative p-6 pb-8">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 h-8 w-8 text-black hover:bg-gray-200"
          onClick={onClose}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        {/* Logo */}
        <div className="flex justify-center mt-8">
          <div className="text-center">
            <div className="text-4xl font-black mb-1">
              <span className="text-black tracking-wider">STYLEMY</span>
            </div>
            <div className="relative">
              <div className="text-2xl font-black text-[#B91C1C] tracking-wider">
                FIT
              </div>
              {/* Ruler design */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <div className="w-20 h-2 bg-[#B91C1C] relative">
                  {/* Ruler marks */}
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute bg-white"
                      style={{
                        left: `${i * 12.5}%`,
                        top: i % 2 === 0 ? '0' : '25%',
                        width: '1px',
                        height: i % 2 === 0 ? '100%' : '50%'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 py-4 space-y-8">
        {/* Height */}
        <div className="flex items-center justify-between">
          <label className="text-black text-xl font-normal">Height</label>
          <div className="relative">
            <Input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-28 h-12 text-center bg-white border-0 rounded-full text-gray-400 text-lg pr-12"
              placeholder=""
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">cm</span>
          </div>
        </div>

        {/* Weight */}
        <div className="flex items-center justify-between">
          <label className="text-black text-xl font-normal">Weight</label>
          <div className="relative">
            <Input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-28 h-12 text-center bg-white border-0 rounded-full text-gray-400 text-lg pr-12"
              placeholder=""
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">kg</span>
          </div>
        </div>

        {/* Age */}
        <div className="flex items-center justify-between">
          <label className="text-black text-xl font-normal">Age</label>
          <div className="relative">
            <Input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-28 h-12 text-center bg-white border-0 rounded-full text-gray-400 text-lg pr-12"
              placeholder=""
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">yrs</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 pb-8 space-y-6">
        {/* Sign in text */}
        <div className="text-center">
          <span className="text-[#B91C1C] text-lg">Already have an account? Sign in.</span>
        </div>
        
        {/* Next button */}
        <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white rounded-full h-14 text-lg font-medium">
          Next
        </Button>
        
        {/* Bottom logo and disclaimer */}
        <div className="text-center pt-6">
          <div className="mb-4">
            <div className="text-2xl font-black text-gray-400 tracking-wider mb-1">
              STYLEMY
            </div>
            <div className="text-lg font-black text-gray-400 tracking-wider relative">
              FIT
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-1 bg-gray-400 relative">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute bg-gray-100"
                      style={{
                        left: `${i * 20}%`,
                        top: i % 2 === 0 ? '0' : '25%',
                        width: '1px',
                        height: i % 2 === 0 ? '100%' : '50%'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 leading-tight px-2">
            StyleMy Fit logo are trademarks or registered trademarks of<br />
            StyleMy Fit, LLC. Or its subsidiaries in the United Kingdom and<br />
            other countries. Other brands and names may be claimed as<br />
            the property of others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodyShapeChatbot;
