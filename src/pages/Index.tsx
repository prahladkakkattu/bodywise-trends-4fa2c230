import { useState } from "react";
import Navbar from "@/components/Navbar";
import MeasurementForm from "@/components/MeasurementForm";
import BodyTypeResult from "@/components/BodyTypeResult";
import ProductRecommendations from "@/components/ProductRecommendations";
import BodyShapeIcon from "@/components/BodyShapeIcon";
import HeroBannerCarousel from "@/components/HeroBannerCarousel";
import { BodyMeasurement, BodyType } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, ShirtIcon, Users, ChartBar, DollarSign, CheckCircle } from "lucide-react";
import { Sparkles } from "@/components/ui/icons";
import AlternativeSizingOptions from "@/components/AlternativeSizingOptions";
import QuickMeasurementGuide from "@/components/QuickMeasurementGuide";
import LiveDemoDialog from "@/components/LiveDemoDialog";
import { getHomepageProducts } from "@/data/mockClothingData";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";

// Steps in the user flow
type Step = "intro" | "alternative" | "measurement" | "results";
const Index = () => {
  const [bodyType, setBodyType] = useState<BodyType | null>(null);
  const [measurements, setMeasurements] = useState<BodyMeasurement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>("intro");
  const [showLiveDemo, setShowLiveDemo] = useState(false);
  const [showMoreProducts, setShowMoreProducts] = useState(false);
  const {
    toast
  } = useToast();
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
          duration: 5000
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
  const handleViewMore = () => {
    setShowMoreProducts(true);
  };
  const renderStep = () => {
    switch (currentStep) {
      case "intro":
        return <>
            {/* Hero Section with Overlay CTA - Added proper top spacing */}
            <section className="relative w-full pt-20">
              {/* Primary Call-to-Action Overlay - Positioned at top */}
              <div className="relative z-20 bg-gradient-to-r from-fashion-teal to-fashion-coral py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Find Your Perfect Fit
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto">
                    Get personalized style recommendations instantly with our intelligent sizing solution
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="premium" 
                      size="lg" 
                      className="px-8 py-4 text-lg bg-white text-fashion-teal hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                      onClick={() => setCurrentStep("measurement")}
                    >
                      Find My Style
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="px-8 py-4 text-lg bg-transparent border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                      onClick={() => setCurrentStep("alternative")}
                    >
                      Not sure about measurements?
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Hero Image Section */}
              <div className="h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/33ebd579-7d29-4f90-815d-e29ef0d3ff34.png" 
                  alt="Fashion lifestyle" 
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* Hero Banner Carousel */}
            <HeroBannerCarousel onGetStarted={() => setCurrentStep("measurement")} onNoMeasurements={() => setCurrentStep("alternative")} />

            {/* Find Your Perfect Fit Section - Updated without duplicate buttons */}
            <section className="py-16 bg-white">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-fashion-teal mb-6">
                  Why Choose StyleMyFit?
                </h2>
                <p className="text-lg md:text-xl text-fashion-teal/80 mb-8 max-w-2xl mx-auto">
                  No more sizing guesswork. Our intelligent solution provides accurate style and size recommendations tailored just for you.
                </p>
              </div>
            </section>

            {/* Product Showcase Section */}
            <section className="py-4 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {getHomepageProducts(showMoreProducts).map(product => (
                    <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product.id)}>
                      <div className="aspect-[3/4] bg-fashion-beige/20 rounded-lg overflow-hidden mb-3">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-fashion-teal/60 uppercase tracking-wide">{product.type}</p>
                        <h3 className="font-medium text-fashion-teal text-sm">{product.name}</h3>
                        <div className="flex items-center justify-between">
                          <BodyShapeIcon bodyType={product.bodyTypes[0]} size="sm" />
                          <p className="font-semibold text-fashion-teal">€ {product.price}.00</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* View More Button */}
                {!showMoreProducts && (
                  <div className="text-center mt-8">
                    <Button variant="outline" size="lg" className="px-8 py-3" onClick={handleViewMore}>
                      View More
                    </Button>
                  </div>
                )}
              </div>
            </section>

            {/* Features Section */}
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
                        <Button variant="outline" size="lg" onClick={() => setShowLiveDemo(true)} className="px-8 py-3">
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
          </>;
      case "alternative":
        return <AlternativeSizingOptions onProceedToMeasurements={() => setCurrentStep("measurement")} onBodyTypeSelected={handleAlternativeSizing} />;
      case "measurement":
        return <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <MeasurementForm onBodyTypeChange={handleBodyTypeChange} isLoading={isLoading} />
              </div>
              
              <div className="w-full md:w-1/2">
                <QuickMeasurementGuide />
              </div>
            </div>
          </div>;
      case "results":
        return <div className="max-w-6xl mx-auto">
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
          </div>;
    }
  };
  return <div className="min-h-screen bg-fashion-beige/10">
      <Navbar />
      
      <main>
        {renderStep()}
        
        {currentStep !== "intro" && (
          <div className="flex justify-center mt-8 pb-8">
            <Button variant="ghost" onClick={() => setCurrentStep("intro")} className="text-muted-foreground">
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
    </div>;
};
export default Index;
