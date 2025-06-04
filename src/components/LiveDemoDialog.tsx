import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Minimize, X, ShoppingCart, Heart, Star } from "lucide-react";

interface LiveDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LiveDemoDialog = ({ open, onOpenChange }: LiveDemoDialogProps) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [minimized, setMinimized] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ height, weight, age });
    // In a real implementation, this would process the data
  };

  const handleMinimizeToggle = () => {
    setMinimized(!minimized);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Live Preview - E-commerce Integration</DialogTitle>
        </DialogHeader>
        
        {/* Mock E-commerce Product Page */}
        <div className="h-full bg-white overflow-y-auto relative">
          {/* Header */}
          <div className="bg-gray-900 text-white p-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="text-xl font-bold">FashionStore</div>
              <div className="flex items-center gap-4">
                <span>Sign In</span>
                <ShoppingCart className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          {/* Product Page Content */}
          <div className="max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/8533b7f4-b8a3-426f-9586-957df87bb1cb.png"
                    alt="Women's Blazer"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded border"></div>
                  ))}
                </div>
              </div>
              
              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Classic Tailored Blazer</h1>
                  <p className="text-lg text-gray-600 mt-2">Perfect for professional and casual wear</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(124 reviews)</span>
                </div>
                
                <div className="text-2xl font-bold text-gray-900">$89.99</div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                    <div className="flex gap-2">
                      {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <button key={size} className="border border-gray-300 px-4 py-2 rounded hover:border-gray-900">
                          {size}
                        </button>
                      ))}
                    </div>
                    
                    {/* StyleMyFit Logo positioned below size buttons */}
                    <div className="mt-4 flex justify-center">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-3 h-auto hover:bg-gray-50"
                        onClick={() => onOpenChange(false)}
                      >
                        <img 
                          src="/lovable-uploads/c48f4d7d-9735-4f09-823d-69d5b0c75576.png"
                          alt="StyleMyFit - Find Your Perfect Fit"
                          className="h-16 w-auto"
                        />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Colour</label>
                    <div className="flex gap-2">
                      {['bg-black', 'bg-gray-600', 'bg-blue-900'].map((color, i) => (
                        <button key={i} className={`w-8 h-8 rounded-full border-2 border-gray-300 ${color}`}></button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="flex-1">Add to Cart</Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-2">Product Details</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Premium wool blend fabric</li>
                    <li>• Professional tailored fit</li>
                    <li>• Two-button closure</li>
                    <li>• Dry clean only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* StyleMyFit Widget in Bottom Right */}
          <div className="fixed bottom-4 right-4 z-50">
            <div 
              className={`
                w-[350px] sm:w-[400px] 
                bg-fashion-beige/95 
                rounded-lg 
                shadow-lg 
                border
                transition-all
                ${minimized ? 'h-[70px]' : 'h-auto'}
              `}
            >
              {minimized ? (
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/c48f4d7d-9735-4f09-823d-69d5b0c75576.png"
                      alt="StyleMyFit Logo"
                      className="h-12 mr-3"
                    />
                    <span className="text-fashion-teal font-medium text-lg">StyleMyFit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={handleMinimizeToggle}
                    >
                      <Minimize className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => onOpenChange(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="absolute right-4 top-4 flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={handleMinimizeToggle}
                    >
                      <Minimize className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => onOpenChange(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-col gap-6 pt-6">
                    <div className="flex justify-center">
                      <img 
                        src="/lovable-uploads/c48f4d7d-9735-4f09-823d-69d5b0c75576.png"
                        alt="StyleMyFit Logo"
                        className="h-16"
                      />
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-semibold text-fashion-teal mb-2">Find Your Perfect Fit</h3>
                      <p className="text-sm text-fashion-teal/80">Get personalized size recommendations</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label htmlFor="height" className="text-sm font-medium text-fashion-teal">Height</label>
                        <Input
                          id="height"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          className="w-20 bg-white text-xs"
                          placeholder="cm"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label htmlFor="weight" className="text-sm font-medium text-fashion-teal">Weight</label>
                        <Input
                          id="weight"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          className="w-20 bg-white text-xs"
                          placeholder="kg"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label htmlFor="age" className="text-sm font-medium text-fashion-teal">Age</label>
                        <Input
                          id="age"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          className="w-20 bg-white text-xs"
                          placeholder="years"
                        />
                      </div>
                      
                      <div className="flex justify-center pt-2">
                        <Button
                          type="submit"
                          className="bg-fashion-coral hover:bg-fashion-coral/90 text-white w-full"
                          size="sm"
                        >
                          Get My Size
                        </Button>
                      </div>
                    </form>
                    
                    <div className="text-xs text-gray-600 text-center">
                      <span>New to StyleMyFit? </span>
                      <Link to="/" className="underline font-medium text-fashion-coral">Learn more</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LiveDemoDialog;
