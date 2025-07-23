
import Navbar from "@/components/Navbar";
import { Check } from "lucide-react";

const Solution = () => {
  const features = [
    "Body shape analysis based on measurements",
    "Personalized clothing recommendations",
    "Size matching across different brands",
    "Style suggestions based on body type",
    "Virtual try-on technology"
  ];

  return (
    <div className="min-h-screen bg-[#fcfaff]">
      <Navbar />
      
      {/* Top Strip */}
      <div className="h-2 bg-gradient-to-r from-brand-100 to-brand-200"></div>
      
      <main className="container pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-6">Our Solution</h1>
        <p className="text-lg text-muted-foreground mb-8">
          StyleMyFit provides innovative solutions to the common problems in online clothing shopping.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="text-muted-foreground mb-6">
              Our technology analyzes your measurements to determine your body shape and then matches you with 
              clothing that will complement your unique physique. No more guessing or returns due to poor fit.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-brand-300 mr-2 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">The Technology</h3>
            <p className="text-muted-foreground mb-4">
              Our proprietary algorithm processes your measurements and compares them against 
              thousands of clothing items in our database to find perfect matches for your body type.
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-3">Measurement Analysis</h4>
            <p className="text-muted-foreground mb-4">
              We analyze key measurements including chest, waist, hips, and height to determine your 
              body shape category.
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-3">Clothing Database</h4>
            <p className="text-muted-foreground">
              Our extensive database contains detailed measurements for thousands of clothing items 
              from popular brands, allowing for precise matching with your body shape.
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t py-8">
        <div className="container">
          <div className="text-center">
            <h3 className="font-bold text-xl text-brand-500 mb-2">StyleMyFit</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Personalized fashion recommendations based on your unique body shape.
            </p>
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">FAQ</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">Contact Us</a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} StyleMyFit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Solution;
