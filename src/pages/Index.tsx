
import { useState } from "react";
import Navbar from "@/components/Navbar";
import MeasurementForm from "@/components/MeasurementForm";
import BodyTypeResult from "@/components/BodyTypeResult";
import ProductRecommendations from "@/components/ProductRecommendations";
import BodyShapeIcon from "@/components/BodyShapeIcon";
import { BodyMeasurement, BodyType } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, ShirtIcon, Users, ChartBar, DollarSign, CheckCircle } from "lucide-react";
import { Sparkles } from "@/components/ui/icons";
import AlternativeSizingOptions from "@/components/AlternativeSizingOptions";
import QuickMeasurementGuide from "@/components/QuickMeasurementGuide";
import LiveDemoDialog from "@/components/LiveDemoDialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";

// Steps in the user flow
type Step = "intro" | "alternative" | "measurement" | "results";

const Index = () => {
  const [bodyType, setBodyType] = useState<BodyType | null>(null);
  const [measurements, setMeasurements] = useState<BodyMeasurement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>("intro");
  const [showLiveDemo, setShowLiveDemo] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleBodyTypeChange = (newBodyType: BodyType, newMeasurements: BodyMeasurement) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setBodyType(newBodyType);
      setMeasurements(newMeasurements);
      setIsLoading(false);
      setCurrentStep("results");
      
      if (newBodyType !== "unknown") {
        toast({
          title: "Body Shape Analysis Complete",
          description: `We've analyzed your measurements and found personalized recommendations.`,
          duration: 5000,
        });
      }
    }, 1500);
  };
  
  const handleAlternativeSizing = (estimatedBodyType: BodyType) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setBodyType(estimatedBodyType);
      setIsLoading(false);
      setCurrentStep("results");
    }, 1000);
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case "intro":
        return (
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-fashion-beige/30 to-white py-8 px-4">
              <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-fashion-teal mb-4 tracking-tight">
                  Find Your Perfect Fit, Instantly
                </h1>
                <p className="text-lg md:text-xl text-fashion-teal/80 max-w-3xl mx-auto mb-6">
                  No more sizing guesswork. Use our solution and get accurate style and size recommendations—with or without measurements.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button 
                    size="lg" 
                    onClick={() => setCurrentStep("measurement")}
                    className="bg-fashion-coral hover:bg-fashion-coral/90 text-white px-8 py-3 text-lg"
                  >
                    Find My Style
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => setCurrentStep("alternative")}
                    className="px-8 py-3 text-lg"
                  >
                    Not sure about my measurements
                  </Button>
                </div>
                
                {/* StyleMyFit App Interface - Made 50% larger */}
                <div className="flex justify-center items-center mb-2">
                  <img 
                    src="/lovable-uploads/fdcd6e24-7331-47cb-ab8b-745435feab3d.png"
                    alt="StyleMyFit App Interface"
                    className="max-w-3xl h-auto drop-shadow-xl"
                  />
                </div>
              </div>
            </section>

            {/* Product Showcase Section - Reduced gap by 50% */}
            <section className="py-2 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {/* Classic Black Blazer */}
                  <div className="bg-fashion-beige/30 rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleProductClick('black-blazer')}>
                    <div className="aspect-square bg-fashion-beige rounded-lg mb-4 overflow-hidden">
                      <img 
                        src="/lovable-uploads/362a7e77-0f9f-4232-85ad-dc4e1a11f5e1.png"
                        alt="Classic Black Blazer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-fashion-teal text-sm mb-1">Classic Black Blazer</h3>
                    <p className="text-xs text-fashion-teal/60 mb-2">Elegant wool blazer with structured fit</p>
                    <div className="mb-2 flex justify-start">
                      <BodyShapeIcon bodyType="hourglass" size="sm" />
                    </div>
                    <p className="font-semibold text-fashion-teal">€ 450.00</p>
                    <Button size="sm" className="mt-2 w-full">See More</Button>
                  </div>
                  
                  {/* Belted Black Dress */}
                  <div className="bg-fashion-beige/30 rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleProductClick('black-dress')}>
                    <div className="aspect-square bg-fashion-beige rounded-lg mb-4 overflow-hidden">
                      <img 
                        src="/lovable-uploads/080741bc-13b9-47c1-8f51-45e655dbfbaf.png"
                        alt="Belted Black Dress"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-fashion-teal text-sm mb-1">Belted Black Dress</h3>
                    <p className="text-xs text-fashion-teal/60 mb-2">Midi length dress with cinched waist</p>
                    <div className="mb-2 flex justify-start">
                      <BodyShapeIcon bodyType="pear" size="sm" />
                    </div>
                    <p className="font-semibold text-fashion-teal">€ 385.00</p>
                    <Button size="sm" className="mt-2 w-full">See More</Button>
                  </div>
                  
                  {/* Elegant White Dress */}
                  <div className="bg-fashion-beige/30 rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleProductClick('white-dress')}>
                    <div className="aspect-square bg-fashion-beige rounded-lg mb-4 overflow-hidden">
                      <img 
                        src="/lovable-uploads/6593ea9a-91e1-415d-8e1e-7641480ae35e.png"
                        alt="Elegant White Dress"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-fashion-teal text-sm mb-1">Elegant White Dress</h3>
                    <p className="text-xs text-fashion-teal/60 mb-2">V-neck sleeveless midi dress</p>
                    <div className="mb-2 flex justify-start">
                      <BodyShapeIcon bodyType="apple" size="sm" />
                    </div>
                    <p className="font-semibold text-fashion-teal">€ 295.00</p>
                    <Button size="sm" className="mt-2 w-full">See More</Button>
                  </div>
                  
                  {/* Orange Blazer Set */}
                  <div className="bg-fashion-beige/30 rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleProductClick('orange-blazer')}>
                    <div className="aspect-square bg-fashion-beige rounded-lg mb-4 overflow-hidden">
                      <img 
                        src="/lovable-uploads/2cd58b40-2fc6-4a4c-8b33-f3c9929017bf.png"
                        alt="Orange Blazer Set"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-fashion-teal text-sm mb-1">Orange Blazer Set</h3>
                    <p className="text-xs text-fashion-teal/60 mb-2">Structured blazer with matching trousers</p>
                    <div className="mb-2 flex justify-start">
                      <BodyShapeIcon bodyType="hourglass" size="sm" />
                    </div>
                    <p className="font-semibold text-fashion-teal">€ 520.00</p>
                    <Button size="sm" className="mt-2 w-full">See More</Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section - Reduced padding */}
            <section className="py-8 bg-fashion-beige/20">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                    <Ruler className="h-12 w-12 text-fashion-coral mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Precise Recommendations</h3>
                    <p className="text-fashion-teal/70">Get clothing suggestions perfectly matched to your unique body shape.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                    <CheckCircle className="h-12 w-12 text-fashion-coral mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Perfect Fit Every Time</h3>
                    <p className="text-fashion-teal/70">Say goodbye to returns and exchanges with our tailored sizing solution.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                    <Sparkles className="h-12 w-12 text-fashion-coral mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Styling Expertise</h3>
                    <p className="text-fashion-teal/70">Discover which styles enhance your natural shape and personal style.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Business Solutions Section */}
            <section className="py-16 bg-white">
              <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-fashion-teal mb-4">For Fashion Businesses</h2>
                  <p className="text-lg text-fashion-teal/80 max-w-3xl mx-auto">
                    Transform your customer experience with StyleMyFit's powerful sizing and recommendation engine.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-fashion-beige/30 p-8 rounded-lg text-center">
                    <DollarSign className="h-12 w-12 text-fashion-coral mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Increase Revenue</h3>
                    <p className="text-fashion-teal/70">Boost conversions by up to 35% with accurate fit recommendations.</p>
                  </div>
                  
                  <div className="bg-fashion-beige/30 p-8 rounded-lg text-center">
                    <Users className="h-12 w-12 text-fashion-coral mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Enhance Experience</h3>
                    <p className="text-fashion-teal/70">Provide personalized shopping journeys that make customers feel valued.</p>
                  </div>
                  
                  <div className="bg-fashion-beige/30 p-8 rounded-lg text-center">
                    <ChartBar className="h-12 w-12 text-fashion-coral mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Reduce Returns</h3>
                    <p className="text-fashion-teal/70">Cut return rates by as much as 42% by getting the fit right the first time.</p>
                  </div>
                </div>
                
                <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="premium" size="lg" className="px-8 py-3">
                    Partner With StyleMyFit
                  </Button>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="lg"
                          onClick={() => setShowLiveDemo(true)}
                          className="px-8 py-3"
                        >
                          Live Preview
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">See how StyleMyFit appears on your e-commerce website</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </section>
          </>
        );
        
      case "alternative":
        return <AlternativeSizingOptions 
                 onProceedToMeasurements={() => setCurrentStep("measurement")} 
                 onBodyTypeSelected={handleAlternativeSizing}
               />;
        
      case "measurement":
        return (
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <MeasurementForm onBodyTypeChange={handleBodyTypeChange} isLoading={isLoading} />
              </div>
              
              <div className="w-full md:w-1/2">
                <QuickMeasurementGuide />
              </div>
            </div>
          </div>
        );
        
      case "results":
        return (
          <div className="max-w-6xl mx-auto">
            {measurements && (
              <div className="flex flex-col md:flex-row gap-8 mb-16">
                <div className="w-full md:w-1/2">
                  <MeasurementForm onBodyTypeChange={handleBodyTypeChange} isLoading={isLoading} />
                </div>
                
                <div className="w-full md:w-1/2">
                  {bodyType ? (
                    <BodyTypeResult bodyType={bodyType} />
                  ) : (
                    <div className="h-full flex items-center justify-center p-6 bg-muted/20 rounded-lg border border-dashed">
                      <p className="text-muted-foreground text-center">
                        Enter your measurements to discover your body shape and get personalized style recommendations.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {!measurements && bodyType && (
              <div className="mb-16">
                <BodyTypeResult bodyType={bodyType} />
              </div>
            )}
            
            {bodyType && bodyType !== "unknown" && (
              <section className="mb-12">
                <ProductRecommendations bodyType={bodyType} />
              </section>
            )}
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-fashion-beige/10">
      <Navbar />
      
      <main className="pt-16">
        {renderStep()}
        
        {currentStep !== "intro" && (
          <div className="flex justify-center mt-8 pb-8">
            <Button 
              variant="ghost" 
              onClick={() => setCurrentStep("intro")}
              className="text-muted-foreground"
            >
              Back to Home
            </Button>
          </div>
        )}
      </main>
      
      <footer className="bg-white border-t py-12">
        <div className="container">
          <div className="text-center">
            <h3 className="font-bold text-xl text-brand-500 mb-2">StyleMyFit</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Personalized fashion recommendations based on your unique body shape.
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="mailto:info@stylemyfit.com" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">info@stylemyfit.com</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">LinkedIn</a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} StyleMyFit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      <LiveDemoDialog open={showLiveDemo} onOpenChange={setShowLiveDemo} />
    </div>
  );
};

export default Index;
