import { useState } from "react";
import Navbar from "@/components/Navbar";
import MeasurementForm from "@/components/MeasurementForm";
import BodyTypeResult from "@/components/BodyTypeResult";
import ProductRecommendations from "@/components/ProductRecommendations";
import BodyShapeHolder from "@/components/BodyShapeHolder";
import HeroBannerCarousel from "@/components/HeroBannerCarousel";
import { BodyMeasurement, BodyType } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, ShirtIcon, Users, ChartBar, DollarSign, CheckCircle, Heart } from "lucide-react";
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
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  
  const toggleFavorite = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };
  
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
            {/* Hero Image Section with Overlay Buttons */}
            <section className="relative w-full">
              <div className="h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center">
                <img 
                  src="/lovable-uploads/fff7fc5a-feec-464b-a87d-1f3d424185c2.png" 
                  alt="StyleMyFit App - Woman shopping with mobile interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay Call-to-Action Buttons */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center px-4 max-w-2xl mx-auto">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Find Your Perfect Fit
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
                    Get personalized style recommendations instantly
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="premium" 
                      size="lg" 
                      className="px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                      onClick={() => setCurrentStep("measurement")}
                    >
                      Find My Style
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="px-8 py-4 text-lg bg-white/95 text-fashion-teal hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                      onClick={() => setCurrentStep("alternative")}
                    >
                      Not sure about measurements?
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Product Showcase Section */}
            <section className="py-4 bg-white">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {getHomepageProducts(showMoreProducts).map(product => (
                    <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product.id)}>
                      <div className="relative aspect-[3/4] bg-fashion-beige/20 rounded-lg overflow-hidden mb-3">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white w-8 h-8"
                          onClick={(e) => toggleFavorite(e, product.id)}
                        >
                          <Heart className={`h-4 w-4 ${favorites.has(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                          <span className="sr-only">Add to favorites</span>
                        </Button>
                        <BodyShapeHolder 
                          bodyTypes={product.bodyTypes} 
                          className="absolute bottom-2 right-2" 
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-fashion-teal/60 uppercase tracking-wide">{product.type}</p>
                        <h3 className="font-medium text-fashion-teal text-sm">{product.name}</h3>
                        <div className="flex items-center justify-end">
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

            {/* Hero Banner Carousel */}
            <HeroBannerCarousel onGetStarted={() => setCurrentStep("measurement")} onNoMeasurements={() => setCurrentStep("alternative")} />

            {/* Features Section */}
            <section className="py-8 bg-fashion-beige/20">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg p-8 text-center shadow-sm group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <Ruler className="h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Precise Recommendations</h3>
                    <p className="text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal">
                      Get clothing suggestions perfectly matched to your unique body shape.
                    </p>
                    {/* Expandable content on hover */}
                    <div className="mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <div className="pt-4 border-t border-fashion-beige/30">
                        <ul className="text-sm text-fashion-teal/60 space-y-2">
                          <li>• AI-powered body shape analysis</li>
                          <li>• Personalized style recommendations</li>
                          <li>• Real-time fit predictions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-8 text-center shadow-sm group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <CheckCircle className="h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Perfect Fit Every Time</h3>
                    <p className="text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal">
                      Say goodbye to returns and exchanges with our tailored sizing solution.
                    </p>
                    {/* Expandable content on hover */}
                    <div className="mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <div className="pt-4 border-t border-fashion-beige/30">
                        <ul className="text-sm text-fashion-teal/60 space-y-2">
                          <li>• 95% accuracy rate</li>
                          <li>• Size conversion across brands</li>
                          <li>• Fit confidence scoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-8 text-center shadow-sm group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <Sparkles className="h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Styling Expertise</h3>
                    <p className="text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal">
                      Discover which styles enhance your natural shape and personal style.
                    </p>
                    {/* Expandable content on hover */}
                    <div className="mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <div className="pt-4 border-t border-fashion-beige/30">
                        <ul className="text-sm text-fashion-teal/60 space-y-2">
                          <li>• Professional styling tips</li>
                          <li>• Color palette suggestions</li>
                          <li>• Trend-based recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Business Solutions Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-fashion-teal mb-4">For Fashion Businesses</h2>
                  <p className="text-lg text-fashion-teal/80 max-w-3xl mx-auto">
                    Transform your customer experience with StyleMyFit's powerful sizing and recommendation engine.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-fashion-beige/30 p-8 rounded-lg text-center group hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <DollarSign className="h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Increase Revenue</h3>
                    <p className="text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal">
                      Boost conversions by up to 35% with accurate fit recommendations.
                    </p>
                    {/* Expandable content on hover */}
                    <div className="mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <div className="pt-4 border-t border-fashion-coral/20">
                        <div className="text-sm text-fashion-teal/60 space-y-2">
                          <p className="font-medium text-fashion-coral">Key Benefits:</p>
                          <p>• Higher conversion rates</p>
                          <p>• Increased average order value</p>
                          <p>• Better customer satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-fashion-beige/30 p-8 rounded-lg text-center group hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <Users className="h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Enhance Experience</h3>
                    <p className="text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal">
                      Provide personalized shopping journeys that make customers feel valued.
                    </p>
                    {/* Expandable content on hover */}
                    <div className="mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <div className="pt-4 border-t border-fashion-coral/20">
                        <div className="text-sm text-fashion-teal/60 space-y-2">
                          <p className="font-medium text-fashion-coral">Features Include:</p>
                          <p>• Personalized recommendations</p>
                          <p>• Interactive size guides</p>
                          <p>• Virtual fitting rooms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-fashion-beige/30 p-8 rounded-lg text-center group hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <ChartBar className="h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-3 text-fashion-teal">Reduce Returns</h3>
                    <p className="text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal">
                      Cut return rates by as much as 42% by getting the fit right the first time.
                    </p>
                    {/* Expandable content on hover */}
                    <div className="mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <div className="pt-4 border-t border-fashion-coral/20">
                        <div className="text-sm text-fashion-teal/60 space-y-2">
                          <p className="font-medium text-fashion-coral">Impact Metrics:</p>
                          <p>• 42% reduction in returns</p>
                          <p>• Faster inventory turnover</p>
                          <p>• Improved profit margins</p>
                        </div>
                      </div>
                    </div>
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
        return <div className="max-w-5xl mx-auto mt-8 px-4">
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
        return <div className="max-w-5xl mx-auto mt-8 px-4">
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
      
      <main className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {renderStep()}
        </div>
        
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
